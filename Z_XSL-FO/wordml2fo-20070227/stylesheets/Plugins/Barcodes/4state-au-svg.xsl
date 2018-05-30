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

<!-- ============================================================= -->
<!-- This stylesheet exports a named template to draw a 4-state    -->
<!-- barcode used by the Post of Australia as an SVG image.        -->
<!-- When used stand-alone, it creates SVG from a code sequence    -->
<!-- passed in a parameter                                         -->
<!--                                                               -->
<!-- Template "draw-barcode-4state-au" can take 7 parameters, of which only  -->
<!-- the first one is mandatory:                                   -->
<!--                                                               -->
<!-- "sequence"    - sequence of barcode states to be drawn.       -->
<!--                 Mandatory parameter.                          -->
<!--                                                               -->
<!-- All other parameters are optional, and have values            -->
<!-- measured in drawing units, 1 unit = 0.01mm.                   -->
<!--                                                               -->
<!-- Following four parameters used to control bars appearance.    -->
<!-- They have reasonable defaults derived from barcode spec and   -->
<!-- thus normally do not need any additional tweaking:            -->
<!-- "bargap"      - gap between adjacent bars                     -->
<!-- "barascender" - height of the bar ascender. Bar descender has -->
<!--                 the same size as prescribed by the spec       -->
<!-- "bartracker"  - height of the bar tracker                     -->
<!-- "barwidth"    - width of the bar                              -->
<!--                                                               -->
<!-- Two parameters below define starting point of the barcode     -->
<!-- baseline. These parametere depend on hardcoded SVG size and   -->
<!-- should be changed with caution:                               -->
<!-- "xoffset"     - offset from the left edge of the drawing area -->
<!--                 to the first bar. It must be big enough to    -->
<!--                 include 6mm of "quiet zone" margin.           -->
<!-- "ybase"       - offset from the top edge of the drawing area  -->
<!--                 to the barcode baseline. It must leave enough -->
<!--                 space for numerical barcode representation    -->
<!--                 and 2mm "quiet zone" margin.                  -->
<!--                                                               -->
<!-- ============================================================= -->
	
	<xsl:output method="xml" indent="yes"/>

	<!-- Main template. -->
	<!-- Creates SVG element, prints numerical barcode representation and recursevely draws all bars -->
	<xsl:template name="draw-barcode-4state-au">
	  <!-- Bar states code sequence -->
	  <xsl:param name="sequence" select="''"/>
	  <!-- Optional parameters for drawing -->
	  <xsl:param name="bargap" select="65"/>
	  <xsl:param name="barascender" select="250"/>
	  <xsl:param name="bartracker" select="65"/>
 	  <xsl:param name="barwidth" select="50"/>
	  <xsl:param name="xoffset" select="600"/>
	  <xsl:param name="ybase" select="900"/>
		<!-- Parameters used to pass not encoded value to AFP backend -->
		<xsl:param name="FCC" select="11"/>
		<xsl:param name="DPID" select="''"/>
		<xsl:param name="CI" select="''"/>
		<xsl:param name="CIencoding" select="'C'"/>
      
      <!-- Establish SVG drawing area -->
      <!-- Drawing unit should be equal to 0.01mm -->
        <svg:svg width="90mm" height="14mm" viewBox="0 0 9000 1400">
        	<desc xmlns:mydoc="http://example.org/mydoc">
        		<barcode FCC="{$FCC}" DPID="{$DPID}" CI="{$CI}" CIencoding="{$CIencoding}" type="au_post"></barcode>
        	</desc>
        	
	    <!-- Call template to reqursively draw all bars -->
	    <xsl:call-template name="recursive-draw-4state-au">
	      <xsl:with-param name="sequence" select="$sequence"/>
	      <xsl:with-param name="bargap" select="$bargap"/>
	      <xsl:with-param name="barascender" select="$barascender"/>
	      <xsl:with-param name="bartracker" select="$bartracker"/>
 	      <xsl:with-param name="barwidth" select="$barwidth"/>
	      <xsl:with-param name="xoffset" select="$xoffset"/>
	      <xsl:with-param name="ybase" select="$ybase"/>
	    </xsl:call-template>
          </svg:svg>
	</xsl:template>

	<!-- Draws single bar and calls itself if there are more bars to be drawn -->
	<xsl:template name="recursive-draw-4state-au">
	  <xsl:param name="sequence"/>
	  <xsl:param name="bargap"/>
	  <xsl:param name="barascender"/>
	  <xsl:param name="bartracker"/>
 	  <xsl:param name="barwidth"/>
	  <xsl:param name="xoffset"/>
	  <xsl:param name="ybase"/>
	  <xsl:variable name="barstate" select="substring($sequence, 1, 1)"/>
	  
 	  <!-- Determine y coordinate of the bar -->
 	  <xsl:variable name="y">
 	    <xsl:choose>
	      <xsl:when test="$barstate=0 or $barstate=1">
	        <xsl:value-of select="$ybase - $barascender"/>
	      </xsl:when>
	      <xsl:when test="$barstate=2 or $barstate=3">
	        <xsl:value-of select="$ybase - $bartracker"/>
	      </xsl:when>
	      <xsl:otherwise>
	        <xsl:message terminate="yes">Error: Wrong bar state supplied to the drawing template!</xsl:message>
	      </xsl:otherwise>
	    </xsl:choose>
 	  </xsl:variable>
 	  
 	  <!-- Determine height of the bar -->
 	  <xsl:variable name="height">
 	    <xsl:choose>
	      <xsl:when test="$barstate=0"><xsl:value-of select="$barascender * 2"/></xsl:when>
	      <xsl:when test="$barstate=1 or $barstate=2"><xsl:value-of select="$barascender + $bartracker"/></xsl:when>
	      <xsl:when test="$barstate=3"><xsl:value-of select="$bartracker * 2"/></xsl:when>
	    </xsl:choose>
	  </xsl:variable>

      <!-- Print bar state code over the bar -->
      <svg:text x="{$xoffset - 25}" y="400" font-family="Courier" font-size="190" fill="black"><xsl:value-of select="$barstate"/></svg:text>
	  <!-- Drawing single bar -->
	  <svg:rect x="{$xoffset}" y="{$y}" width="{$barwidth}" height="{$height}" fill="black"/>

	  <!-- Activate recursion if there is more bars to be drawn -->
	  <!-- ("x-offset" parameter will be incremented) -->
	  <xsl:if test="string-length($sequence)>1">
	    <xsl:call-template name="recursive-draw-4state-au">
	      <xsl:with-param name="sequence" select="substring($sequence, 2)"/>
	      <xsl:with-param name="bargap" select="$bargap"/>
	      <xsl:with-param name="barascender" select="$barascender"/>
	      <xsl:with-param name="bartracker" select="$bartracker"/>
 	      <xsl:with-param name="barwidth" select="$barwidth"/>
	      <xsl:with-param name="xoffset" select="$xoffset + $barwidth + $bargap"/>
	      <xsl:with-param name="ybase" select="$ybase"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>
	
</xsl:stylesheet>
