<?xml version="1.0" encoding="UTF-8"?>

<!-- ========================================================

This stylesheet defines physical page layouts and creates
page sequences.

*************************************************************

IMPLEMENTATION SPECIFICS

1. Continuous sections don't genarate its own page sequences.
2. Contents of static regions are retrieved via fo:marker
elements.

========================================================== -->


<xsl:stylesheet xmlns:fo="http://www.w3.org/1999/XSL/Format"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:rx="http://www.renderx.com/XSL/Extensions"
                xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml"
                xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint"
                xmlns:aml="http://schemas.microsoft.com/aml/2001/core"
                xmlns:w10="urn:schemas-microsoft-com:office:word"
                xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"
                version="1.0">

  <xsl:output method="xml"
              version="1.0"
              indent="no"
              encoding="utf-8" />

  <xsl:template name="CreatePageLayout">
    <fo:layout-master-set>
      <xsl:call-template name="CreatePageLayout1"/>
    </fo:layout-master-set>
  </xsl:template>
  
  <xsl:template name="CreatePageLayout1">
    <xsl:param name="context" select="w:body/wx:sect//wx:sub-section/*[name() != 'wx:sub-section' ] | w:body/wx:sect/*[name() != 'wx:sub-section' ] | w:body/*[name() != 'wx:sect' ]"/> <!-- w:body/wx:sect/* | w:body/*[name() != 'wx:sect' ] -->
    <xsl:param name="number" select="1"/>
    <xsl:call-template name="CreatePageLayout2"> <!-- $context[count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>($number - 1) ] -->
      <!-- $context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number - 1) and not(./descendant-or-self::w:sectPr/w:type/@w:val='continuous')) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number) and ./descendant-or-self::w:sectPr/w:type/@w:val='continuous') ] -->
      <xsl:with-param name="sect" select="$context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number - 1) and ($number = 1 or not(./descendant-or-self ::w:sectPr/w:type/@w:val='continuous'))) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number) and not(./descendant-or-self::w:sectPr[not(w:type/@w:val='continuous')]) and (./descendant-or-self::w:sectPr/w:type/@w:val='continuous' or ./following::w:sectPr[1]/w:type/@w:val='continuous'))]"/>
      <xsl:with-param name="number" select="$number"/>
    </xsl:call-template>
    <!-- $context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>$number) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=$number and not(./descendant-or-self::w:sectPr/w:type/@w:val='continuous')) ] -->
    <xsl:variable name="remainder" select="$context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>$number) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=$number and (./descendant-or-self::w:sectPr[not(w:type/@w:val='continuous')] or (not(./descendant-or-self::w:sectPr/w:type/@w:val='continuous') and not(./following::w:sectPr[1]/w:type/@w:val='continuous')))) ]"/>
    <xsl:if test="count($remainder) > 0">
      <xsl:call-template name="CreatePageLayout1">
        <xsl:with-param name="context" select="$remainder"/>
        <xsl:with-param name="number" select="$number + 1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <!-- ============================ -->
  <!-- Create physical page layout. -->
  <!-- ============================ -->
  <xsl:template name="CreatePageLayout2">
    <xsl:param name="sect"/>
    <xsl:param name="number"/>
    <!--<fo:layout-master-set>-->

      <!-- ========================================================= -->
      <!-- Generate page masters and page sequences for each section -->
      <!-- ========================================================= -->
      <!--<xsl:for-each select="$sect">--> <!-- "w:body/wx:sect" -->
      <xsl:variable name="first-page-name" select="concat('section',$number,'-first-page')"/>
      <xsl:variable name="odd-page-name" select="concat('section',$number,'-odd-page')"/>
      <xsl:variable name="even-page-name" select="concat('section',$number,'-even-page')"/>
      <xsl:variable name="page-sequence-master-name" select="concat('section',$number,'-page-sequence-master')"/>
        <!-- ====================================== -->
        <!-- Masters for first, odd, and even pages -->
        <!-- ====================================== -->
    <fo:simple-page-master master-name="{$first-page-name}">
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgSz"/> <!-- ($sect/descendant-or-self::w:sectPr/w:pgSz)[1] -->
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
            <xsl:with-param name="area" select="'page-master'"/>
          </xsl:apply-templates>

          <fo:region-body>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'region-body'"/>
            </xsl:apply-templates>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgBorders">
              <xsl:with-param name="page" select="first"/>
            </xsl:apply-templates>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:cols"/>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:vAlign"/>
          </fo:region-body>
          <fo:region-before region-name="first-page-header" extent="{$default-header-extent}">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-before>
           <fo:region-after region-name="first-page-footer" extent="{$default-footer-extent}" display-align="after">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-after>
        </fo:simple-page-master>

        <fo:simple-page-master master-name="{$odd-page-name}">
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgSz"/>
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
            <xsl:with-param name="area" select="'page-master'"/>
          </xsl:apply-templates>

          <fo:region-body>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'region-body'"/>
            </xsl:apply-templates>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgBorders"/>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:cols"/>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:vAlign"/>
          </fo:region-body>
          <fo:region-before region-name="odd-page-header" extent="{$default-header-extent}">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-before>
          <fo:region-after region-name="odd-page-footer" extent="{$default-footer-extent}" display-align="after">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-after>
        </fo:simple-page-master>

        <fo:simple-page-master master-name="{$even-page-name}">
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgSz"/>
          <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
            <xsl:with-param name="area" select="'page-master'"/>
          </xsl:apply-templates>

          <fo:region-body>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'region-body'"/>
            </xsl:apply-templates>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgBorders"/>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:cols"/>
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:vAlign"/>
          </fo:region-body>
          <fo:region-before region-name="even-page-header" extent="{$default-header-extent}">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-before>
          <fo:region-after region-name="even-page-footer" extent="{$default-footer-extent}" display-align="after">
            <xsl:apply-templates select="$sect/descendant-or-self::w:sectPr/w:pgMar">
              <xsl:with-param name="area" select="'static-content'"/>
            </xsl:apply-templates>
          </fo:region-after>
        </fo:simple-page-master>

        <!-- create a page-sequence master -->
        <fo:page-sequence-master master-name="{$page-sequence-master-name}">
          <xsl:if test="$sect/descendant-or-self::w:sectPr/w:titlePg[not(@w:val='off')]">
            <fo:single-page-master-reference master-reference="{$first-page-name}"/>
          </xsl:if>
          <fo:repeatable-page-master-alternatives>
            <fo:conditional-page-master-reference odd-or-even="odd" master-reference="{$odd-page-name}"/>
            <fo:conditional-page-master-reference odd-or-even="even" master-reference="{$even-page-name}"/>
          </fo:repeatable-page-master-alternatives>
        </fo:page-sequence-master>

      <!--</xsl:for-each>-->
    <!--</fo:layout-master-set>-->
  </xsl:template>

  
  <xsl:template name="GeneratePageSequences">
    <xsl:param name="context" select="w:body/wx:sect//wx:sub-section/*[name() != 'wx:sub-section' ] | w:body/wx:sect/*[name() != 'wx:sub-section' ] | w:body/*[name() != 'wx:sect' ]"/> <!--  --> <!-- w:body/wx:sect/* | w:body/*[name() != 'wx:sect' ] -->
    <xsl:param name="number" select="1"/>
    <xsl:call-template name="GeneratePageSequences2">
      <!-- $context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number - 1) and not(./descendant-or-self ::w:sectPr/w:type/@w:val='continuous')) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number) and ./descendant-or-self::w:sectPr/w:type/@w:val='continuous') ] -->
      <xsl:with-param name="sect" select="$context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number - 1) and ($number = 1 or not(./descendant-or-self ::w:sectPr/w:type/@w:val='continuous'))) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number) and not(./descendant-or-self::w:sectPr[not(w:type/@w:val='continuous')]) and (./descendant-or-self::w:sectPr/w:type/@w:val='continuous' or ./following::w:sectPr[1]/w:type/@w:val='continuous'))]"/>
      <xsl:with-param name="current-position" select="$number"/>
    </xsl:call-template><!-- $context[count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>($number - 1) ] -->
    <!-- $context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>$number) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=$number and not(./descendant-or-self::w:sectPr/w:type/@w:val='continuous')) ] -->
    <xsl:variable name="remainder" select="$context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])>$number) or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=$number and (./descendant-or-self::w:sectPr[not(w:type/@w:val='continuous')] or (not(./descendant-or-self::w:sectPr/w:type/@w:val='continuous') and not(./following::w:sectPr[1]/w:type/@w:val='continuous')))) ]"/>
    <xsl:if test="count($remainder) > 0">
      <xsl:call-template name="GeneratePageSequences">
        <xsl:with-param name="context" select="$remainder"/>
        <xsl:with-param name="number" select="$number + 1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>
  

  <!-- ======================== -->
  <!-- Generate page sequences. -->
  <!-- ======================== -->
  <xsl:template name="GeneratePageSequences2">
    <xsl:param name="sect"/>
    <xsl:param name="current-position"/>
    <!--<xsl:variable name="main-sections" select="w:body/wx:sect[not(preceding-sibling::wx:sect) or not(.//w:sectPr/w:type/@w:val='continuous')]"/>-->
    <!-- ==================================================== -->
    <!-- Apply page sequences for all non-continuous sections -->
    <!-- ==================================================== -->
    <!--<xsl:for-each select="$main-sections">-->
      <!--<xsl:variable name="next-main-sect-pos" select="position() + 1"/>
      <xsl:variable name="next-main-section" select="$main-sections[position()=$next-main-sect-pos]"/>
      <xsl:variable name="number-of-continuous-sections">
        <xsl:choose>
          <xsl:when test="$next-main-section">
            <xsl:value-of select="count($next-main-section/preceding-sibling::wx:sect) - count(preceding-sibling::wx:sect)"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="count(../wx:sect)"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>-->

      <!--<xsl:variable name="current-position" select="count(preceding-sibling::wx:sect) + 1"/>-->
      <xsl:variable name="page-sequence-master-name" select="concat('section',$current-position,'-page-sequence-master')"/>
      <fo:page-sequence master-reference="{$page-sequence-master-name}" id="{generate-id()}">
        <!-- Set format attribute -->
        <xsl:variable name="instruction" select="normalize-space($sect//w:fldSimple[1]/@w:instr[contains(., 'PAGE')])"/>
        <xsl:attribute name="format">
          <xsl:call-template name="PageNumberFormat">
            <xsl:with-param name="format" select="substring-before(substring-after($instruction, '\* '), ' ')"/>
          </xsl:call-template>
        </xsl:attribute>
        <!-- =================== -->
        <!-- Headers and Footers -->
        <!-- =================== -->
        <fo:static-content flow-name="first-page-header">
          <fo:retrieve-marker retrieve-class-name="first-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
        </fo:static-content>
        <fo:static-content flow-name="first-page-footer">
          <fo:retrieve-marker retrieve-class-name="first-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
        </fo:static-content>
        <fo:static-content flow-name="odd-page-header">
          <fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
        </fo:static-content>
        <fo:static-content flow-name="odd-page-footer">
          <fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
        </fo:static-content>
        <fo:static-content flow-name="even-page-header">
          <xsl:choose>
            <xsl:when test="/w:wordDocument/w:docPr/w:evenAndOddHeaders[not(@w:val) or @w:val!='off' ]"> <!-- element w:evenAndOddHeaders appears only if different headers for odd/even pages specified -->
              <fo:retrieve-marker retrieve-class-name="even-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
            </xsl:when>
            <xsl:otherwise>
              <fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
            </xsl:otherwise>
          </xsl:choose>
        </fo:static-content>
        <fo:static-content flow-name="even-page-footer">
          <xsl:choose>
            <xsl:when test="/w:wordDocument/w:docPr/w:evenAndOddHeaders[not(@w:val) or @w:val!='off' ]"> <!-- element w:evenAndOddHeaders appears only if different footers for odd/even pages specified -->
              <fo:retrieve-marker retrieve-class-name="even-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
            </xsl:when>
            <xsl:otherwise>
              <fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
            </xsl:otherwise>
          </xsl:choose>
        </fo:static-content>
        <!-- ========= -->
        <!-- Footnotes -->
        <!-- ========= -->
        <fo:static-content flow-name="xsl-footnote-separator">
          <fo:block>
             <fo:leader leader-pattern="rule"
                        leader-length="144pt"
                        rule-thickness="0.5pt"
                        rule-style="solid"
                        color="gray"/>
           </fo:block>
        </fo:static-content>
        <!-- =================================================================== -->
        <!-- Text flow is produced by applying templates to the wx:sect element: -->
        <!-- see templates under "DOCUMENT'S CONTENT"                            -->
        <!-- =================================================================== -->
        <fo:flow flow-name="xsl-region-body">
          <!-- Display the document's content -->
          <!--<xsl:apply-templates select=".|following-sibling::wx:sect[position() &lt; $number-of-continuous-sections]" />-->
          <!--<xsl:call-template name="wx:sect">
            <xsl:with-param name="context" select="$sect"/>
            </xsl:call-template>-->
          
<!--          <xsl:call-template name="wx:sect">
            <xsl:with-param name="context" select="$sect[count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($current-position - 1) and ($current-position = 1 or not(./descendant-or-self ::w:sectPr/w:type/@w:val='continuous')) ]"/>
          </xsl:call-template>
          <xsl:variable name="remainder" select="$sect[ count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($current-position) and (./descendant-or-self::w:sectPr/w:type/@w:val='continuous' or ./following-sibling::w:sectPr[1]/w:type/@w:val='continuous') ]"/>
          <xsl:if test="count($remainder)">
            <xsl:call-template name="ProcessContinuousSections">
              <xsl:with-param name="sect" select="$remainder"/>
              <xsl:with-param name="number" select="count($remainder[1]/preceding::w:sectPr)"/>
            </xsl:call-template>
          </xsl:if>
-->
          <xsl:call-template name="ProcessContinuousSections">
            <xsl:with-param name="sect" select="$sect"/>
          </xsl:call-template>
          
          <xsl:if test="position()=last()">
            <!-- Generate an empty block at the end of the FO document. -->
            <fo:block id="{generate-id(/)}"/>
          </xsl:if>
        </fo:flow>

      </fo:page-sequence>
   <!-- </xsl:for-each>-->
  </xsl:template>
  
  <xsl:template name="ProcessContinuousSections">
    <xsl:param name="sect"/>
    <xsl:param name="number" select="count($sect[1]/preceding::w:sectPr)"/>
    
    <!-- $context[(count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number - 1) and not(./descendant-or-self ::w:sectPr/w:type/@w:val='continuous')) 
      or (count(./preceding::w:sectPr[not(w:type/@w:val='continuous')])=($number) 
      and (./descendant-or-self::w:sectPr/w:type/@w:val='continuous' or ./following-sibling::w:sectPr[1]/w:type/@w:val='continuous'))] -->
    
    <xsl:variable name="part" select="$sect[ count(./preceding::w:sectPr)=$number ] "/>
    <xsl:variable name="remainder" select="$sect[ count(./preceding::w:sectPr)>$number ]"/>
    
    <xsl:call-template name="wx:sect">
      <xsl:with-param name="context" select="$part"/>
    </xsl:call-template>
    <xsl:if test="count($remainder)>0">
      <xsl:call-template name="ProcessContinuousSections">
        <xsl:with-param name="sect" select="$remainder"/>
        <xsl:with-param name="number" select="$number + 1"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>


  <!-- ====================== -->
  <!-- Display static content -->
  <!-- ====================== -->
  <xsl:template name="DisplayStaticContent">
    <xsl:param name="section"/>
    <xsl:param name="hdr-or-ftr"/>
    <xsl:param name="type"/>
    <!-- $sect/descendant-or-self::w:sectPr -->
    <!-- $section/self::w:p -->
    <xsl:choose>
      <xsl:when test="$hdr-or-ftr='header' and $section/descendant-or-self::w:sectPr/w:hdr[@w:type=$type]">
        <xsl:if test="$section/self::w:p/w:pPr/w:sectPr/w:hdr[@w:type=$type]">
          <xsl:apply-templates select="$section/self::w:p/w:pPr/w:sectPr/w:hdr[@w:type=$type]"/>
        </xsl:if>
        <xsl:if test="not($section/self::w:p/w:pPr/w:sectPr/w:hdr[@w:type=$type])">
          <xsl:if test="count($section/descendant-or-self::w:sectPr/w:hdr[@w:type=$type]) > 1">
            <xsl:apply-templates select="$section/descendant-or-self::w:sectPr/w:hdr[1][@w:type=$type]"/>
          </xsl:if>
          <xsl:if test="count($section/descendant-or-self::w:sectPr/w:hdr[@w:type=$type]) = 1">
            <xsl:apply-templates select="$section/descendant-or-self::w:sectPr/w:hdr[@w:type=$type]"/>
          </xsl:if>
        </xsl:if>
      </xsl:when>
      <xsl:when test="$hdr-or-ftr='footer' and $section/descendant-or-self::w:sectPr/w:ftr[@w:type=$type]">
        <xsl:if test="$section/self::w:p/w:pPr/w:sectPr/w:ftr[@w:type=$type]">
          <xsl:apply-templates select="$section/self::w:p/w:pPr/w:sectPr/w:ftr[@w:type=$type]"/>
        </xsl:if>
        <xsl:if test="not($section/self::w:p/w:pPr/w:sectPr/w:ftr[@w:type=$type])">
          <xsl:if test="count($section/descendant-or-self::w:sectPr/w:ftr[@w:type=$type]) > 1">
            <xsl:apply-templates select="$section/descendant-or-self::w:sectPr/w:ftr[1][@w:type=$type]"/>
          </xsl:if>
          <xsl:if test="count($section/descendant-or-self::w:sectPr/w:ftr[@w:type=$type]) = 1">
            <xsl:apply-templates select="$section/descendant-or-self::w:sectPr/w:ftr[@w:type=$type]"/>
          </xsl:if>
        </xsl:if>
      </xsl:when>
      <xsl:when test="$section and (($section/descendant-or-self::w:sectPr)[1] != (w:body//w:sectPr)[1])"> <!-- $section and ($section != w:body/wx:sect[1]) -->
        <xsl:call-template name="DisplayStaticContent">
          <!--<xsl:with-param name="section" select="$section[1]/ancestor::w:body/wx:sect[1]"/>--> <!-- $section[1]/../../wx:sect[1] --> <!-- $section/../preceding-sibling::wx:sect[1] -->
          <xsl:with-param name="section" select="($section[1]/ancestor::w:body//w:sectPr)[1]/../.."/>
          <xsl:with-param name="hdr-or-ftr" select="$hdr-or-ftr"/>
          <xsl:with-param name="type" select="$type"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise/>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>
