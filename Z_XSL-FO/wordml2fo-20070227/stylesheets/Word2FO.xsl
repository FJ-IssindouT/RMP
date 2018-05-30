<?xml version="1.0" encoding="UTF-8"?>

<!-- ====================================================================

This stylesheet converts MS Word 2003 XML documents to XSL Formatting
Objects. It tries to be neutral to XSL FO formatters: no extension
elements are used. It is however specifically tuned to process WordML
emitted by Word 2003: when actual markup used by Word differs from the
documentation, the stylesheet favors the real implementation, rather
than the theory.

  Author of original style sheet is Alexei Gagarinov
  Please mail your questions and suggestions to support@renderx.com

(c) RenderX, 2004-2007

*************************************************************************

INTRODUCTORY NOTES

A typical WordML document consists of the following:

  a. structure division elements: headers, footers, sections, paragraphs,
     text runs;
  b. elements describing high-level typographic abstractions:
     lists, tables, graphics, hyperlinks, footnotes, data fields, etc.;
  c. formatting properties that define the look and feel of elements;
  d. styles that bundle formatting properties belonging to a class of elements.

The stylesheet covers all the above to some extent:

  a-b. Word structure elements are translated to their XSL-FO counterparts.
       The following elements are supported:
     - sections;
     - paragraphs;
     - headers and footers;
     - inline-level markup (text runs);
     - lists;
     - tables;
     - hyperlinks;
     - inline bitmap graphics, both embedded and linked from a file;
     - footnotes (basic numbering scheme only);
     - fields (with limitations).

  c. Word properties are mapped to their XSL-FO equivalents:
     - block-level properties: alignment, indentation, margins,
       keeps and breaks, widows and orphans, borders (not all styles),
       padding, background;
     - inline-level properties: font styling and color,
       text decoration properties.

  d. Style mechanism is supported fully, including paragraph
     and inline styles, style derivation, and style overrides
     on specific elements.

IMPLEMENTATION NOTES

1. Stylesheet structure and techniques

This is topmost template. It defines global constants, defaults and
laies down the rule for general template matching. All formatting
specific to single elements is contained in subordinated stylesheets:

  a. pageLayout.xsl - defines physical page layouts and creates
                      page sequences;

  b. elementStructure.xsl - defines the presentation of the contents;

  c. elementProperties.xsl - controls element properties at any level;

  d. auxiliary.xsl - named templates that assist in performing
                     common tasks.

2. Implementation specifics

In some cases, MS Word 2003 interpretation of elements and attributes
diverges from the 'MS Office 2003 Reference schemas' document.
In all such cases, real usage by Word is preferred to the formal
description. All cases where such adjustments were needed are
marked by a commentary inside the templates.

==================================================================== -->

<xsl:stylesheet xmlns:fo="http://www.w3.org/1999/XSL/Format"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml"
                version="2.0">


  <xsl:include href="auxiliary.xsl"/>
  <xsl:include href="pageLayout.xsl"/>
  <xsl:include href="elementStructure.xsl"/>
  <xsl:include href="elementProperties.xsl"/>
  <xsl:include href="profile.xsl"/>
  <xsl:include href="WordArt.xsl"/>
  <xsl:include href="smarttags.xsl"/>

    <!--
        Define "standard" namespace prefixes to be able to distinguish elements in "non-standard" namespaces.
        By "standard-prefixes" are meant all namespace prefixes used in WordML.
        It's assumed that the null-namespace is non-standard, too.
        Leading and trailing spaces are needed here!
    -->
    <xsl:variable name="standard-namespace-prefixes" select="' fo w o v wx aml w10 dt st1 '"/>
    <!-- This variable controls whether it's necessary to apply templates for children of elements from "non-standard" namespaces (i.e., "go deeper through") or not -->
    <xsl:variable name="go-deeper-for-alien-elements" select="'yes'"/>


  <xsl:output method="xml" omit-xml-declaration="yes" version="2.0" indent="no" encoding="utf-8" />
  <xsl:strip-space elements='*'/>


<!-- ==== -->
<!-- KEYS -->
<!-- ==== -->
  <xsl:key name="styles" match="/w:wordDocument/w:styles/w:style" use="@w:styleId"/>
  <xsl:key name="tables-by-style" match="//w:tbl" use="w:tblPr/w:tblStyle/@w:val"/>
  <xsl:key name="lists" match="/w:wordDocument/w:lists/w:list" use="@w:ilfo"/>
  <xsl:key name="list-properties" match="/w:wordDocument/w:lists/w:listDef" use="@w:listDefId"/>
  <xsl:key name="list-picture-bullets" match="/w:wordDocument/w:lists/w:listPicBullet" use="@w:listPicBulletId"/>
  <xsl:key name="fonts" match="/w:wordDocument/w:fonts/w:font" use="@w:name"/>


<!-- ========== -->
<!-- PARAMETERS -->
<!-- ========== -->
  <!-- This param deifnes the mode for displaying output messages -->
  <!-- if an unsupported element encountered. -->
  <!-- 'yes' - display messages -->
  <!-- 'no'  - don't display messages -->
  <xsl:param name="verbose" select="'no'"/>

<!-- ================ -->
<!-- GLOBAL CONSTANTS -->
<!-- ================ -->
  <xsl:variable name="section-block-name" select="'fo:block'"/>
  <xsl:variable name="section-block-namespace" select="'http://www.w3.org/1999/XSL/Format'"/>

  <xsl:variable name="default-paragraph-style" select="/w:wordDocument/w:styles/w:style[@w:default='on' and @w:type='paragraph']"/>
  <xsl:variable name="default-character-style" select="/w:wordDocument/w:styles/w:style[@w:default='on' and @w:type='character']"/>
  <xsl:variable name="default-table-style" select="/w:wordDocument/w:styles/w:style[@w:default='on' and @w:type='table']"/>

<!-- =================== -->
<!-- MAIN ROOT TRANSFORM -->
<!-- =================== -->
  <xsl:template match="/w:wordDocument">

    <fo:root>
      <!-- Set default font-family attribute on fo:root -->
      <xsl:apply-templates select="w:fonts/w:defaultFonts"/>

      <!-- Create physical page layout and generate page sequences -->
      <xsl:call-template name="CreatePageLayout"/>
      <xsl:call-template name="GeneratePageSequences"/>

    </fo:root>
  </xsl:template>


<!-- ========================= -->
<!-- GENERAL TEMPLATE MATCHING -->
<!-- ========================= -->
  <xsl:template match="*" priority="-1">
      <xsl:choose>
          <!-- note that the condition below also "catches" null namespace: since all "ordinary" WordML elements are not in null namespace, it's ok -->
          <xsl:when test="not(contains($standard-namespace-prefixes, concat(' ', substring-before(name(), ':'), ' ')))">
              <xsl:if test="$go-deeper-for-alien-elements = 'yes'">
                  <xsl:apply-templates/>
              </xsl:if>
          </xsl:when>
          <xsl:otherwise>
              <!-- "Trap" for unsupported elements -->
              <xsl:if test="$verbose='yes'">
                  <xsl:message>
                    <xsl:text>Warning! Unsupported element: </xsl:text>
                    <xsl:value-of select="name()"/>
                    <xsl:text>. Element's contents will be lost.</xsl:text>
                  </xsl:message>
              </xsl:if>
          </xsl:otherwise>
      </xsl:choose>
  </xsl:template>


</xsl:stylesheet>
