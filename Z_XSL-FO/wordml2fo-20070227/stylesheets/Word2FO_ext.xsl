<?xml version="1.0" encoding="UTF-8"?>


<!-- =====================================================

This stylesheet contains some RenderX extensions to XSL-FO
for WordML conversion.

**********************************************************

IMPLEMENTATION NOTES

The extensions add the following functionality as compared
with the generic stylesheet:

1. Flow sections - you can specify continuous sections 
   with different number of columns.
2. Document properties - you can save meta information
   (document properties) in the output file.
3. PDF hierarchical bookmarks. 

======================================================= -->


<xsl:stylesheet xmlns:fo="http://www.w3.org/1999/XSL/Format"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:rx="http://www.renderx.com/XSL/Extensions"
                xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml"
                xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint"
                xmlns:o="urn:schemas-microsoft-com:office:office"
                version="1.0">

  <xsl:import href="Word2FO.xsl"/>

  <xsl:output method="xml"
              version="1.0"
              indent="no"
              encoding="utf-8" />

<!-- ========================== -->
<!-- REDEFINED GLOBAL CONSTANTS -->
<!-- ========================== -->
<xsl:variable name="section-block-name" select="'rx:flow-section'"/>
<xsl:variable name="section-block-namespace" select="'http://www.renderx.com/XSL/Extensions'"/>



<!-- =================== -->
<!-- MAIN ROOT TRANSFORM -->
<!-- =================== -->
  <xsl:template match="/w:wordDocument">
  
  <fo:root>
    <!-- Set default font-family attribute on fo:root -->
    <xsl:apply-templates select="w:fonts/w:defaultFonts"/>
    
    <!-- ==================== -->
    <!-- Set meta information -->
    <!-- ==================== -->
    <xsl:variable name="rxDocProp" select="o:DocumentProperties/o:Author | o:DocumentProperties/o:Title | o:DocumentProperties/o:Subject | o:DocumentProperties/o:Keywords | o:DocumentProperties/o:Creator" />
    <xsl:if test="$rxDocProp">
      <rx:meta-info>
        <xsl:apply-templates select="$rxDocProp"/>
      </rx:meta-info>
    </xsl:if>
    
    <!-- Create physical page layout -->
    <xsl:call-template name="CreatePageLayout"/>
    
    <!-- ========= -->
    <!-- Bookmarks -->
    <!-- ========= -->
    <!--<rx:outline>
      <xsl:apply-templates select="w:body" mode="bookmarks" />
      </rx:outline>-->
    
    <xsl:if test="string($default-show-bookmarks) = 'true' ">
        <xsl:variable name="rxBookmarks">
          <xsl:apply-templates select="w:body" mode="bookmarks" />
        </xsl:variable>
        <xsl:if test="$rxBookmarks != '' ">
          <rx:outline>
            <xsl:copy-of select="$rxBookmarks"/>
          </rx:outline>
        </xsl:if>
    </xsl:if>
    
    <!-- Generate page sequences -->
    <xsl:call-template name="GeneratePageSequences"/>
    
  </fo:root>
  </xsl:template>



<!-- ================ -->
<!-- Meta information -->
<!-- ================ -->
    <xsl:template match="o:DocumentProperties/o:*" priority="-1">
      <xsl:variable name="field-name">
        <xsl:call-template name="ConvertStringToLowercase">
          <xsl:with-param name="field-name" select="local-name()"/>
        </xsl:call-template>
      </xsl:variable>
      <!-- 'rx:meta-field' element's name attribute can have only the following values: 'author', 'title', 'subject', 'keywords', 'creator'. 
        The other values shoud be ignored. -->
      <!--<xsl:if test="$field-name='author' or $field-name='title' or $field-name='subject' or $field-name='keywords' or $field-name='creator' ">-->
        <rx:meta-field>
          <!-- "name" attribute -->
          <xsl:attribute name="name">
            <xsl:value-of select="$field-name"/>
          </xsl:attribute>
          <!-- "value" attribute -->
          <xsl:attribute name="value">
            <xsl:value-of select="."/>
          </xsl:attribute>
        </rx:meta-field>
      <!--</xsl:if>-->
    </xsl:template>

<!-- =============== -->
<!--    Bookmarks    -->
<!-- =============== -->
    <!-- 
	a) bookmark all sections as "first-order" portions
	b) recursively bookmark all their subsections as "subordinary" portions
	
	As a result, we'll get the tree of sections/subsections.
	-->
	
    <xsl:template match="wx:sect | wx:sub-section" mode="bookmarks">
    	<!--<xsl:variable name="bookmark-text" select="descendant::w:p[1]/w:r/w:t"/>-->
      <xsl:variable name="bookmark-text">
        <xsl:apply-templates select="descendant::w:p[1]/w:r/w:t"/>
      </xsl:variable>
    	<xsl:variable name="number">
    		<xsl:number count="wx:sect | wx:sub-section" format="1.1" level="multiple"/>
    	</xsl:variable>
    	<xsl:variable name="max-text" select="substring($bookmark-text, 1, $default-bookmark-label-max-length)"/>
    	<xsl:variable name="bookmark-label">
    		<xsl:choose>
    			<xsl:when test="string-length($bookmark-text) &gt; $default-bookmark-label-max-length">
    				<xsl:value-of select="concat($max-text, '...')"/>
    			</xsl:when>
    			<xsl:otherwise>
    				<xsl:value-of select="$max-text"/>
    			</xsl:otherwise>
    		</xsl:choose>
    	</xsl:variable>
		<rx:bookmark internal-destination="{generate-id()}">
			<rx:bookmark-label>
			  <xsl:choose>
			    <xsl:when test="$default-numbered-pdf-bookmarks = 'true'">
			      <xsl:value-of select="concat($number, ' ', $bookmark-label)"/>
			    </xsl:when>
			    <xsl:otherwise>
			      <xsl:value-of select="$bookmark-label"/>
			    </xsl:otherwise>
			  </xsl:choose>
			</rx:bookmark-label>
			<xsl:apply-templates select="*" mode="bookmarks"/>
		</rx:bookmark>
    </xsl:template>

    <xsl:template match="*" mode="bookmarks" priority="-1">
      	<xsl:apply-templates select="*" mode="bookmarks"/>
    </xsl:template>

</xsl:stylesheet>
