<?xml version="1.0" encoding="iso-8859-1"?>
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

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:my="table-codabar-data">

<!-- ========================================================= -->
<!-- This stylesheet contains named template (barcode-codabar) -->
<!-- that encodes sequence of character using Codabar barcode  -->
<!-- scheme (also known as USD-4, NW-7, and 2 of 7 code)       -->
<!-- without checksum. All 0 and 1 bars have the same width    -->
<!-- respectively.                                             -->
<!--                                                           -->
<!--                     Mandatory parameters are:             -->
<!--                                                           -->
<!--  "value"           - a string of characters to encode;    -->
<!--                      Alphabet contains digits 0-9 and     -->
<!--                      special chars: $ : / . + -           -->
<!--                                                           -->
<!--                      Optional parameters are:             -->
<!--                                                           -->
<!--  "start"           - Start symbol of the barcode;         -->
<!--                      Possible values are: A, B, C, D      -->
<!--                      Default is 'A'                       -->
<!--  "stop"           -  Stop symbol of the barcode;          -->
<!--                      Possible values are: A, B, C, D      -->
<!--                      Default is 'B'                       -->
<!--  "string"          - a human readable string;             -->
<!--                      represents data encoded in           -->
<!--                      the barcode in a human-readable form -->
<!--                      Optional parameter.                  -->
<!--                      Default is: 'value' with start/stop  -->
<!--                      added.                               -->
<!--  "print-text"      - boolean, defines if a human          -->
<!--                      readable label should be printed.    -->
<!--                      Default is: 'true'                   -->
<!--  "module"          - width of the elementary unit         -->
<!--                      bar/space;                           -->
<!--                      Default is 0.0075in                  -->
<!--  "wide-to-narrow"  - width ratio for bars/spaces;         -->
<!--                      Default is 3.0                       -->
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
<!--                      Default is 8pt                       -->
<!-- ========================================================= -->

    <xsl:output method="xml"
                version="1.0"
                indent="yes"/>
    <xsl:variable name="alphabet-codabar" select="'0123456789$:/.+-'"/>
    <xsl:variable name="startstop" select="'ABCD'"/>

    <!-- Main template used to create a barcode -->
    <xsl:template name="barcode-codabar">
      <xsl:param name="value"/>
      <xsl:param name="start" select="'A'"/>
      <xsl:param name="stop" select="'B'"/>
      <xsl:param name="string"/>
      <xsl:param name="print-text" select="'true'"/>
      <xsl:param name="module" select="'0.0075in'"/>
      <xsl:param name="wide-to-narrow" select="3.0"/>
      <xsl:param name="height" select="'0.25in'"/>
      <xsl:param name="quiet-horizontal" select="'0.25in'"/>
      <xsl:param name="quiet-vertical" select="'0.075in'"/>
      <xsl:param name="font-family" select="'Courier'"/>
      <xsl:param name="font-height" select="'8pt'"/>
      
      <!-- Check data consistency -->
      <xsl:if test="string-length($value)=0">
        <xsl:message terminate="yes">Error: 'value' is not specified.</xsl:message>
      </xsl:if>
      <xsl:if test="string-length(translate($value,$alphabet-codabar,''))!=0">
        <xsl:message terminate="yes">Error: unexpected characters in the 'value'.</xsl:message>
      </xsl:if>
      <xsl:if test="string-length($start)=0">
        <xsl:message terminate="yes">Error: 'start' is not specified.</xsl:message>
      </xsl:if>
      <xsl:if test="string-length(translate($start,$startstop,''))!=0">
        <xsl:message terminate="yes">Error: unexpected characters in the 'start'.</xsl:message>
      </xsl:if>
      <xsl:if test="string-length($stop)=0">
        <xsl:message terminate="yes">Error: 'stop' is not specified.</xsl:message>
      </xsl:if>
      <xsl:if test="string-length(translate($stop,$startstop,''))!=0">
        <xsl:message terminate="yes">Error: unexpected characters in the 'stop'.</xsl:message>
      </xsl:if>
      
      <!-- Add start/stop character -->
      <xsl:variable name="value-real" select="concat($start, $value, $stop)"/>
      
      <!-- Encode string in bars -->
      <xsl:variable name="value-encoded">
	    <xsl:call-template name="char2bar-codec-codabar">
	      <xsl:with-param name="string" select="$value-real"/>
	    </xsl:call-template>
      </xsl:variable>

      <!-- Call backend to generate SVG image of the barcode -->
      <xsl:call-template name="draw-barcode-codabar">
        <xsl:with-param name="sequence" select="$value-encoded"/>
        <xsl:with-param name="string">
          <xsl:choose>
            <xsl:when test="string-length($string)=0">
              <xsl:value-of select="$value-real"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="$string"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:with-param>
        <xsl:with-param name="print-text" select="$print-text"/>
        <xsl:with-param name="module" select="$module"/>
        <xsl:with-param name="wide-to-narrow" select="$wide-to-narrow"/>
        <xsl:with-param name="height" select="$height"/>
        <xsl:with-param name="quiet-horizontal" select="$quiet-horizontal"/>
        <xsl:with-param name="quiet-vertical" select="$quiet-vertical"/>        
        <xsl:with-param name="font-family" select="$font-family"/>
        <xsl:with-param name="font-height" select="$font-height"/>
      	<xsl:with-param name="value" select="$value"/>
      </xsl:call-template>
	</xsl:template>

    <!-- Helper templates -->

	<!-- Codes alpha-numerical string into bar states using appropriate table -->
	<xsl:template name="char2bar-codec-codabar">
	  <xsl:param name="string"/>
	  <xsl:value-of select="document('')//my:char2bar/entry[@char=substring($string, 1, 1)]/text()"/>
	  <xsl:if test="string-length($string) &gt; 1">
	    <xsl:call-template name="char2bar-codec-codabar">
	      <xsl:with-param name="string" select="substring($string, 2)"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>

	<!-- Code table defined in the standard -->
	<my:char2bar>
	  <entry char='0'>0000011</entry>
	  <entry char='1'>0000110</entry>
	  <entry char='2'>0001001</entry>
	  <entry char='3'>1100000</entry>
	  <entry char='4'>0010010</entry>
	  <entry char='5'>1000010</entry>
	  <entry char='6'>0100001</entry>
	  <entry char='7'>0100100</entry>
	  <entry char='8'>0110000</entry>
	  <entry char='9'>1001000</entry>
	  <entry char='-'>0001100</entry>
	  <entry char='$'>0011000</entry>
	  <entry char=':'>1000101</entry>
	  <entry char='/'>1010001</entry>
	  <entry char='.'>1010100</entry>
	  <entry char='+'>0010101</entry>

	  <entry char='A'>0011010</entry>
	  <entry char='B'>0101001</entry>
	  <entry char='C'>0001011</entry>
	  <entry char='D'>0001110</entry>
    </my:char2bar>	

</xsl:stylesheet>
