<?xml version="1.0"?>
<!-- ========================================================= -->
<!--                                                           -->
<!-- (c) 2003-2007, RenderX                                    -->
<!--                                                           -->
<!-- Author: Alexander Peshkov <peshkov@renderx.com>           -->
<!--                                                           -->
<!-- Permission is granted to use this document, copy and      -->
<!-- modify free of charge, provided that every derived work   -->
<!-- bear a reference to the present document.                 -->
<!--                                                           -->
<!-- This document contains a computer program written in      -->
<!-- XSL Transformations Language. It is published with no     -->
<!-- warranty of any kind about its usability, as a mere       -->
<!-- example of XSL technology. RenderX shall not be           -->
<!-- considered liable for any damage or loss of data caused   -->
<!-- by use of this program.                                   -->
<!--                                                           -->
<!-- ========================================================= -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                              xmlns:svg="http://www.w3.org/2000/svg">

<!-- ========================================================= -->
<!-- This stylesheet exports a named template used to draw a   -->
<!-- code 128 barcode as an SVG image.                         -->
<!-- When used stand-alone, it creates SVG from a code         -->
<!-- sequence passed in a parameter.                           -->
<!--                                                           -->
<!-- Template "draw-barcode" can take a number of parameters,  -->
<!-- of which only the first one is mandatory.                 -->
<!--                                                           -->
<!--                     Mandatory parameters are:             -->
<!--                                                           -->
<!--  "sequence"        - sequence of barcode states           -->
<!--                      to be drawn.                         -->
<!--                      Mandatory parameter.                 -->
<!--                                                           -->
<!--                      Optional parameters are:             -->
<!--                                                           -->
<!--  "string"          - information encoded by this barcode; -->
<!--                      (in the human-readable form)         -->
<!--                      Default is empty string.             -->
<!--  "print-text"      - boolean, defines if a human          -->
<!--                      readable label should be printed.    -->
<!--                      Default is: 'true'                   -->
<!--  "module"          - width of the elementary unit         -->
<!--                      bar/space;                           -->
<!--                      Default is 0.0075in                  -->
<!--  "height"          - pattern height (= bar length).       -->
<!--                      Default is 0.25in                    -->
<!--  "quiet-horizontal" - quiet zone horizontal margin width   -->
<!--                      Default is 0.25in                    -->
<!--  "quiet-vertical"   - quiet zone vertical margin width     -->
<!--                      Default is 0.075in                   -->
<!--  "font-family"     - a font family used to print textual  -->
<!--                      representation of a barcode.         -->
<!--                      Default is 'Courier'                 -->
<!--  "font-height"     - a height of the font used to print   -->
<!--                      textual representation of a barcode. -->
<!--                      Default is 6pt                       -->
<!-- ========================================================= -->

	<!-- Main template. -->
	<!-- Normalize all lengths and calculates all widths/heights -->
	<!-- Creates SVG element, prints numerical barcode representation and recursevely draws all bars -->
  <xsl:template name="draw-barcode-code128">
	  <!-- Bar states code sequence -->
	  <xsl:param name="sequence" select="''"/>
	  <!-- Information encoded by given barcode states -->
	  <xsl:param name="string" select="''"/>
	  <!-- Is human readable string printed under barcode? -->
	  <xsl:param name="print-text" select="'true'"/>
	  <!-- Optional parameters for drawing -->
      <xsl:param name="module" select="'0.0075in'"/>
      <xsl:param name="height" select="'0.25in'"/>
      <xsl:param name="quiet-horizontal" select="'0.25in'"/>
      <xsl:param name="quiet-vertical" select="'0.075in'"/>
      <xsl:param name="font-family" select="'Courier'"/>
      <xsl:param name="font-height" select="'6pt'"/> 

      <!-- Parse narrow bar/space width specifier -->
      <xsl:variable name="narrow-real">
        <xsl:call-template name="convert-to-basic-units">
          <xsl:with-param name="length" select="$module"/>
        </xsl:call-template>      
      </xsl:variable>

      <!-- Parse bar height specifier -->
      <xsl:variable name="height-real">
        <xsl:call-template name="convert-to-basic-units">
          <xsl:with-param name="length" select="$height"/>
        </xsl:call-template>      
      </xsl:variable>

      <!-- Parse quiet zone vertical/horizontal margins specifiers -->
      <xsl:variable name="quiet-horizontal-real">
        <xsl:call-template name="convert-to-basic-units">
          <xsl:with-param name="length" select="$quiet-horizontal"/>
        </xsl:call-template>      
      </xsl:variable>
      <xsl:variable name="quiet-vertical-real">
        <xsl:call-template name="convert-to-basic-units">
          <xsl:with-param name="length" select="$quiet-vertical"/>
        </xsl:call-template>      
      </xsl:variable>

      <!-- Calculate font height and line-height-->
      <xsl:variable name="font-height-real">
        <xsl:call-template name="convert-to-basic-units">
          <xsl:with-param name="length" select="$font-height"/>
        </xsl:call-template>
      </xsl:variable>
      <xsl:variable name="line-height-real" select="round($font-height-real*1.2)*number($print-text='true')"/>

      <!-- Useful variable - number of characters in code string -->
      <xsl:variable name="length">
        <xsl:value-of select="(string-length($sequence) - 1)  div 6"/>
      </xsl:variable>

      <!-- Calculate codesequence length -->
      <xsl:variable name="code-width-real" select="$narrow-real*(11*($length - 1) + 13)"/>
      
      <!-- Calculate drawing area dimensions -->
      <xsl:variable name="area-width-real" select="$code-width-real + 2*$quiet-horizontal-real"/>
      <xsl:variable name="area-height-real" select="$height-real + $line-height-real + 2*$quiet-vertical-real"/>
      
      <!-- Establish SVG drawing area -->
      <!-- Drawing unit is equal to 1/360mm -->
      <svg:svg width="{concat($area-width-real div 360, 'mm')}"
               height="{concat($area-height-real div 360, 'mm')}"
               viewBox="{concat('0 0 ', $area-width-real, ' ', $area-height-real)}">

      	<desc xmlns:mydoc="http://example.org/mydoc">
      		<barcode value="{$string}" type="code128"></barcode>
      	</desc>
      	
        <!-- Prepare actual path -->
        <xsl:variable name="path">
  	      <!-- Call template to reqursively draw all bars -->
          <xsl:call-template name="recursive-draw-code128">
  	        <xsl:with-param name="sequence" select="$sequence"/>
            <xsl:with-param name="narrow-real" select="$narrow-real"/>
            <xsl:with-param name="height-real" select="$height-real"/>
  	      </xsl:call-template>
  	    </xsl:variable>
	    
        <!-- Position a pen at the beggining of the barcode and make the actual drawing -->
        <xsl:variable name="full-path" select="concat('M ', $quiet-horizontal-real, ' ' , $quiet-vertical-real, $path)"/>
        <svg:path d="{$full-path}" fill="black"/>
        <xsl:if test="$print-text='true'">
          <svg:text x="{$area-width-real div 2}" y="{$quiet-vertical-real*2 + $height-real + $font-height-real}" text-anchor="middle" font-family="{$font-family}" font-size="{$font-height-real}" fill="black"><xsl:value-of select="$string"/></svg:text>
        </xsl:if>
      </svg:svg>
	</xsl:template>

	<!-- Draws single bar and calls itself if there are more bars to be drawn -->
  <xsl:template name="recursive-draw-code128">
	  <xsl:param name="sequence"/>
      <xsl:param name="narrow-real"/>
      <xsl:param name="height-real"/>
      <xsl:param name="position" select="1"/>
      
        	  
   	  <xsl:variable name="barstate" select="substring($sequence, 1, 1)"/>

	  <!-- Select bar width -->
	  <xsl:variable name="width" select="$narrow-real*$barstate"/>

 	  <!-- Draw black or white bar -->
      <xsl:choose>
	    <xsl:when test="($position mod 2) = 1">
          <!-- Create appropriate path segment -->  
          <xsl:value-of select="concat(' l 0 ', $height-real, ' ', $width, ' 0 0 -', $height-real, ' z m ', $width, ' 0')"/>
	    </xsl:when>
	    <xsl:otherwise>
          <!-- Create appropriate path segment -->  
          <xsl:value-of select="concat(' m ', $width, ' 0')"/>
	    </xsl:otherwise>
 	  </xsl:choose>
 	  
      <xsl:if test="string-length($sequence) &gt; 1">
        <xsl:call-template name="recursive-draw-code128">
  	        <xsl:with-param name="sequence" select="substring($sequence,2)"/>
              <xsl:with-param name="narrow-real" select="$narrow-real"/>
              <xsl:with-param name="height-real" select="$height-real"/>
              <xsl:with-param name="position" select="$position + 1"/>
  	    </xsl:call-template>
      </xsl:if>
	</xsl:template>


    
</xsl:stylesheet>
