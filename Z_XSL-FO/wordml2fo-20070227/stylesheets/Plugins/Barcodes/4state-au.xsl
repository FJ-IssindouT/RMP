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
                              xmlns:svg="http://www.w3.org/2000/svg"
                              xmlns:my="table-rs-data">

<!-- ============================================================= -->
<!-- The stylesheet defines a named template 'barcode-4state-au'   -->
<!-- to create Australia Post 4-State barcodes. The barcode format -->
<!-- is defined in "Customer Barcoding Technical Specifications"   -->
<!-- and "A Guide to Printing the 4-State Barcode", available at   -->
<!-- the following URL:                                            -->
<!--                                                               -->
<!-- http://www.auspost.com.au/BCP/0,1080,CH2196%257EMO19,00.html  -->
<!--                                                               -->
<!-- The template calculates all checksums and control digits,     -->
<!-- and draws an SVG image of the bars. To simplify maintenance,  -->
<!-- the SVG part is put into a separate file, 4state-au-SVG.xsl.  -->
<!--                                                               -->
<!-- This XSLT stylesheet includes implementation of Reed Solomon  -->
<!-- error-correction codes, used to calculate check digits.       -->
<!-- ============================================================= -->

<!-- ============================================================= -->
<!-- Input parameters:                                             -->
<!--                                                               -->
<!-- "FCC"         - a two digit number identifying type of        -->
<!--                 the barcode to be generated. Mandatory        -->
<!--                 parameter. Possible values are:               -->
<!--                 11 - "Standard Customer Barcode"              -->
<!--                 45 - "Reply Paid Barcode"                     -->
<!--                 59 - "Customer Barcode 2"                     -->
<!--                 62 - "Customer Barcode 3"                     -->
<!--                 Two latter barcode types could carry          -->
<!--                 customer information and therefore should     -->
<!--                 be used in conjunction with CI and CIencoding -->
<!--                 parameters (see below).                       -->
<!--                                                               -->
<!-- "DPID"        - an eigth-digit number representing            -->
<!--                 the "Delivery Point Identifier".              -->
<!--                 Mandatory parameter.                          -->
<!--                                                               -->
<!-- "CI"          - a "Customer Information" field used for       -->
<!--                 Customer Barcode 2 or 3. Can contain numeric  -->
<!--                 data when CIencoding is 'N', alpha-numeric    -->
<!--                 data when CIencoding is 'C', and any valid    -->
<!--                 barcode state values for 'custom' encoding.   -->
<!--                 Encoded customer information length should    -->
<!--                 not exceed 16 bars for "Customer Barcode 2"   -->
<!--                 and 31 bars for "Customer Barcode 3".         -->
<!--                                                               -->
<!-- "CIencoding"  - customer encoding type. Defines how           -->
<!--                 information supplied in a "CI" parameter      -->
<!--                 should be treated. Possible values are:       -->
<!--                 C      - information supplied in "CI"         -->
<!--                          parameter will be encoded using 'C'  -->
<!--                          table defined in barcode standard.   -->
<!--                 N      - information supplied in "CI"         -->
<!--                          parameter will be encoded using 'N'  -->
<!--                          table defined in barcode standard.   -->
<!--                 custom - information supplied in "CI" field   -->
<!--                          is already encoded using customer-   -->
<!--                          specific scheme. "CI" field content  -->
<!--                          will be passed unchanged to the      -->
<!--                          resulting barcode.                   -->
<!--                                                               -->
<!-- CI parameter presence and data length must match the FCC type;--> 
<!-- otherwise, the customer information is ignored and a warning  -->
<!-- is issued.                                                    -->
<!-- ==============================================================-->

    <xsl:output method="xml" indent="yes"/>	
        
    <!-- Main template. Takes four parameters described above and produces 4-state barcode -->
	<xsl:template name="barcode-4state-au">
	  <xsl:param name="FCC" select="11"/>
	  <xsl:param name="DPID" select="''"/>
	  <xsl:param name="CI" select="''"/>
	  <xsl:param name="CIencoding" select="'C'"/>

	  <!-- Check data consistency -->
	  <xsl:if test="string-length(translate($DPID,'1234567890',''))!=0">
	    <xsl:message terminate="yes">Error: unexpected characters in 'DPID'.</xsl:message>
	  </xsl:if> 

          <xsl:if test="string-length($DPID)!=8">
            <xsl:message terminate="yes">Error: Wrong DPID '<xsl:value-of select="$DPID"/>'. DPID must be 8 digits long.</xsl:message>
	  </xsl:if>

	  <!-- Encode customer information when necessary (FCC must match customer information) -->
	  <xsl:variable name="CIencoded">
	    <xsl:choose>
          <!-- if FCC=11 it's a "Standard Customer Barcode" and customer information will be ignored -->
	      <xsl:when test="$FCC=11">
	        <xsl:if test="string($CI)!=''">
	          <xsl:message>Warning: Generating "Standard Customer Barcode". Customer information (CI) will be ignored.</xsl:message>
	        </xsl:if>
	      </xsl:when>
          <!-- if FCC=45 it's a "Reply Paid Barcode" and customer information will be ignored -->
	      <xsl:when test="$FCC=45">
	        <xsl:if test="string($CI)!=''">
	          <xsl:message>Warning: Generating "Reply Paid Barcode". Customer information (CI) will be ignored.</xsl:message>
	        </xsl:if>
	      </xsl:when>
	      <!-- if FCC=59 it's a "Customer Barcode 2" and (encoded) customer information must not exceed 16 bars -->
	      <!-- if FCC=62 it's a "Customer Barcode 3" and (encoded) customer information must not exceed 31 bars -->
	      <xsl:when test="$FCC=59 or $FCC=62">
            <xsl:call-template name="makeCI">
              <xsl:with-param name="FCC" select="$FCC"/>
	          <xsl:with-param name="CI" select="$CI"/>
	          <xsl:with-param name="CIencoding" select="$CIencoding"/>
	        </xsl:call-template>
	      </xsl:when>
	      <!-- Error or unsupported FCC -->
	      <xsl:otherwise>
	        <xsl:message terminate="yes">Error: Unsupported FCC '<xsl:value-of select="$FCC"/>'</xsl:message>
	      </xsl:otherwise>
	    </xsl:choose>
	  </xsl:variable>
      	  
	  <!-- Encode FCC field using N table -->
	  <xsl:variable name="FCCencoded">
	    <xsl:call-template name="dec2N_codec">
	      <xsl:with-param name="deccode" select="$FCC"/>
	    </xsl:call-template>	    
	  </xsl:variable>

	  <!-- Encode DPID field using N table and add one filler bar if FCC is 11 or 45 -->
	  <xsl:variable name="DPIDencoded">
	    <xsl:call-template name="dec2N_codec">
	      <xsl:with-param name="deccode" select="$DPID"/>
	    </xsl:call-template>
	    <xsl:if test="$FCC=11 or $FCC=45"><xsl:text>3</xsl:text></xsl:if>
	  </xsl:variable>
      
      <!-- Generate Reed Solomon Error Correction Code sequence -->
      <xsl:variable name="RSECCencoded">
 	    <xsl:call-template name="makeRSECC">
	      <xsl:with-param name="sourcebar" select="concat($FCCencoded,$DPIDencoded,$CIencoded)"/>
	    </xsl:call-template>
      </xsl:variable>

      <!-- Add start/stop bars and generate final barcode -->
      <xsl:variable name="barcode" select="concat('13',$FCCencoded,$DPIDencoded,$CIencoded,$RSECCencoded,'13')"/>
      <!-- Call backend to generate SVG image of the barcode -->
      <xsl:call-template name="draw-barcode-4state-au">
        <xsl:with-param name="sequence" select="$barcode"/>
      	<xsl:with-param name="FCC" select="$FCC"/>
      	<xsl:with-param name="DPID" select="$DPID"/>
      	<xsl:with-param name="CI" select="$CI"/>
      	<xsl:with-param name="CIencoding" select="$CIencoding"/>
      </xsl:call-template>
	
	</xsl:template>

    
    <!-- utility templates -->
    
    <!-- Encode, check and pad customer information -->
    <xsl:template name="makeCI">
      <xsl:param name="FCC"/>
	  <xsl:param name="CI"/>
	  <xsl:param name="CIencoding"/>
	  <xsl:variable name="filler" select="'33333333333333333333333333333333'"/>
	  <!-- encode -->
	  <xsl:variable name="CIencoded">
	    <xsl:choose>
	      <xsl:when test="$CIencoding='N'">
	        <xsl:call-template name="dec2N_codec">
	          <xsl:with-param name="deccode" select="$CI"/>
	        </xsl:call-template>
	      </xsl:when>
	      <xsl:when test="$CIencoding='C'">
	        <xsl:call-template name="char2C_codec">
	          <xsl:with-param name="charcode" select="$CI"/>
	        </xsl:call-template>
	      </xsl:when>
	      <xsl:when test="$CIencoding='custom'">
	        <xsl:value-of select="$CI"/>
	      </xsl:when>
	      <xsl:otherwise>
	        <xsl:message>Warning: Unknown customer information encoding '<xsl:value-of select="$CIencoding"/>'. Customer information will be ignored.</xsl:message>
	      </xsl:otherwise>
	    </xsl:choose>
	  </xsl:variable>
	  <!-- check customer information length and pad it when necessary-->
	  <xsl:choose>
	    <xsl:when test="string-length(normalize-space($CIencoded)) &gt; 16 and $FCC=59">
	      <xsl:message>Warning: Generating "Customer Barcode 2". Customer information (CI) is longer then 16 bars and will be ignored.</xsl:message>
	    </xsl:when>
	    <xsl:when test="string-length(normalize-space($CIencoded)) &lt; 16 and $FCC=59">
	      <xsl:value-of select="concat(normalize-space($CIencoded), substring($filler,1, 16 - string-length(normalize-space($CIencoded))))"/>
	    </xsl:when>
	    <xsl:when test="string-length(normalize-space($CIencoded)) &gt; 31 and $FCC=62">
	      <xsl:message>Warning: Generating "Customer Barcode 3". Customer information (CI) is longer then 31 bars and will be ignored.</xsl:message>
	    </xsl:when>
	    <xsl:when test="string-length(normalize-space($CIencoded)) &lt; 31 and $FCC=62">
	      <xsl:value-of select="concat(normalize-space($CIencoded), substring($filler,1, 31 - string-length(normalize-space($CIencoded))))"/>
	    </xsl:when>
	    <xsl:otherwise>
	      <xsl:value-of select="normalize-space($CIencoded)"/>
	    </xsl:otherwise>
	  </xsl:choose>
   	</xsl:template>

    <!-- Create an RS check sequence based on barcode information -->
	<xsl:template name="makeRSECC">
	  <xsl:param name="sourcebar"/>
	  <!-- Turn barcode triplets into 2 digit long decimal numbers (padded with 0 when necessary) -->	
	  <!-- Note: order of numbers is reversed -->
	  <xsl:variable name="sourcedec">
	    <xsl:call-template name="bar2dec_codec">
	      <xsl:with-param name="barcode" select="$sourcebar"/>
	    </xsl:call-template>
	  </xsl:variable>	  
	  <!-- Create Reed Solomon Error Correction Code sequence (2 digit long decimal numbers) -->
	  <xsl:variable name="rsecc">
        <xsl:call-template name="rs-external-cycle">
          <xsl:with-param name="i" select="number(string-length($sourcedec) div 2) - 1"/>
          <xsl:with-param name="temp" select="concat('00000000',$sourcedec)"/>
        </xsl:call-template>	  
	  </xsl:variable>
	  <!-- Decode RSECC from decimals into bar triplets -->
	  <!-- Note: order of numbers is reversed -->
	  <xsl:call-template name="dec2bar_codec">
	    <xsl:with-param name="deccode" select="substring($rsecc,1,8)"/>
	  </xsl:call-template>
	</xsl:template>


    <!-- Reed Solomon coder templates -->
    <!-- coder implementation is based on samples provided by Australia Post -->

	<xsl:template name="rs-external-cycle">		
	  <xsl:param name="i"/>
	  <xsl:param name="temp"/>

          <xsl:variable name="new_temp">  
	    <xsl:call-template name="rs-internal-cycle">
	        <xsl:with-param name="i" select="$i"/>
	        <xsl:with-param name="j" select="0"/>
	        <xsl:with-param name="temp" select="$temp"/>	    
	    </xsl:call-template>
	  </xsl:variable>
	  <xsl:choose>
	    <xsl:when test="$i&gt;0">
	      <xsl:call-template name="rs-external-cycle">
	        <xsl:with-param name="i" select="$i - 1"/>
	        <xsl:with-param name="temp" select="$new_temp"/>
	      </xsl:call-template>
	    </xsl:when>
	    <xsl:otherwise>
	      <xsl:value-of select="$new_temp"/>
	    </xsl:otherwise>
	  </xsl:choose>
	</xsl:template>
	
	<xsl:template name="rs-internal-cycle">
	  <xsl:param name="i"/>
	  <xsl:param name="j" select="0"/>
	  <xsl:param name="temp"/>
          <xsl:variable name="temp_i_j_cur" select="number(substring($temp, ($i+$j+1)*2 - 1, 2))"/>
	  <xsl:variable name="temp_i_4_cur" select="number(substring($temp, ($i+4+1)*2 - 1, 2))"/>
	  <xsl:variable name="gen_val" select="number(document('')//my:gen/entry[number($j)+1])"/>
	  <xsl:variable name="mult_val" select="number(document('')//my:mult/row[number($gen_val)+1]/entry[number($temp_i_4_cur)+1])"/>
	  <xsl:variable name="xor_res">
	    <xsl:call-template name="xor63">
	      <xsl:with-param name="arg1" select="$temp_i_j_cur"/>
	      <xsl:with-param name="arg2" select="$mult_val"/>
	    </xsl:call-template>
	  </xsl:variable>
	  <xsl:variable name="new_temp">
	    <xsl:value-of select="substring($temp, 1, ($i+$j+1)*2 - 2)"/>
	    <xsl:if test="number($xor_res) &lt; 10"><xsl:text>0</xsl:text></xsl:if>
	    <xsl:value-of select="$xor_res"/>
	    <xsl:value-of select="substring($temp, ($i+$j+1)*2 + 1)"/>
	  </xsl:variable>
	  <xsl:choose>
	    <xsl:when test="$j&lt;4">
	      <xsl:call-template name="rs-internal-cycle">
	        <xsl:with-param name="i" select="$i"/>
	        <xsl:with-param name="j" select="$j+1"/>
	        <xsl:with-param name="temp" select="$new_temp"/>
	      </xsl:call-template>
	    </xsl:when>
	    <xsl:otherwise>
	      <xsl:value-of select="$new_temp"/>
	    </xsl:otherwise>
	  </xsl:choose>
	</xsl:template>	
	
	<!-- XOR for 6bit numbers -->
	<xsl:template name="xor63">
	  <xsl:param name="arg1"/>
	  <xsl:param name="arg2"/>
          <xsl:param name="counter" select="32"/>
          <xsl:param name="res" select="0"/>
	  <xsl:choose>
	    <xsl:when test="$arg1=0">
	      <xsl:value-of select="$res + $arg2"/>
	    </xsl:when>
	    <xsl:when test="$arg2=0">
	      <xsl:value-of select="$res + $arg1"/>
	    </xsl:when>
	    <xsl:when test="$arg1=1 and $arg2=1">
	      <xsl:value-of select="$res"/>
	    </xsl:when>
	    <xsl:otherwise>
	      <xsl:variable name="x" select="floor($arg1 div $counter)"/>
	      <xsl:variable name="y" select="floor($arg2 div $counter)"/>
	      <xsl:variable name="bitxor" select="number($x!=$y)"/>
	      <xsl:call-template name="xor63">
	        <xsl:with-param name="arg1" select="$arg1 mod $counter"/>
	        <xsl:with-param name="arg2" select="$arg2 mod $counter"/>
	        <xsl:with-param name="counter" select="$counter div 2"/>
	        <xsl:with-param name="res" select="$res + $bitxor*$counter"/>
	      </xsl:call-template>
	    </xsl:otherwise>
	  </xsl:choose>
	</xsl:template>
	
	
	<!-- Coders used to transform data from one format to another -->
	
	<!-- Codes character sequence using 'C' table -->
	<xsl:template name="char2C_codec">
	  <xsl:param name="charcode"/>
	  <xsl:call-template name="char2C">
	    <xsl:with-param name="char" select="substring($charcode, 1, 1)"/>
	  </xsl:call-template>
	  <xsl:if test="string-length($charcode) &gt; 1">
	    <xsl:call-template name="char2C_codec">
	      <xsl:with-param name="charcode" select="substring($charcode, 2)"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>
   	
   	<!-- Codes digital sequence using 'N' table -->  
	<xsl:template name="dec2N_codec">
	  <xsl:param name="deccode"/>
	  <xsl:call-template name="dec2N">
	    <xsl:with-param name="dec" select="substring($deccode, 1, 1)"/>
	  </xsl:call-template>
	  <xsl:if test="string-length($deccode) &gt; 1">
	    <xsl:call-template name="dec2N_codec">
	      <xsl:with-param name="deccode" select="substring($deccode, 2)"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>
    
    <!-- Translates bar states sequence into decimal representation -->
	<xsl:template name="bar2dec_codec">
	  <xsl:param name="barcode"/>
	  <xsl:variable name="dec">
	    <xsl:call-template name="bar2dec">
	      <xsl:with-param name="bar" select="substring($barcode, string-length($barcode) - 2)"/>
	    </xsl:call-template>
	  </xsl:variable>
	  <xsl:if test="number($dec) &lt; 10"><xsl:text>0</xsl:text></xsl:if>
	  <xsl:value-of select="$dec"/>
	  <xsl:if test="string-length($barcode) &gt; 3">
	    <xsl:call-template name="bar2dec_codec">
	      <xsl:with-param name="barcode" select="substring($barcode, 1, string-length($barcode) - 3)"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>

    <!-- Translates decimal sequence into bar states representation -->
	<xsl:template name="dec2bar_codec">
	  <xsl:param name="deccode"/>
	  <xsl:call-template name="dec2bar">
	    <xsl:with-param name="dec" select="number(substring($deccode, string-length($deccode) - 1))"/>
      </xsl:call-template>
	  <xsl:if test="string-length($deccode) &gt; 2">
	    <xsl:call-template name="dec2bar_codec">
	      <xsl:with-param name="deccode" select="substring($deccode, 1, string-length($deccode) - 2)"/>
	    </xsl:call-template>
	  </xsl:if>
	</xsl:template>

	
	<!-- Code tables defined in the standard -->
	
	<xsl:template name="bar2dec">
	  <xsl:param name="bar"/>
	  <xsl:if test="$bar!='' and string-length($bar)=3">
	    <xsl:value-of select="number(substring($bar,1,1))*16 + number(substring($bar,2,1))*4 + number(substring($bar,3,1))"/>
	  </xsl:if>
	</xsl:template>

	<xsl:template name="dec2bar">
	  <xsl:param name="dec"/>
	  <xsl:if test="$dec &lt; 64">
	    <xsl:value-of select="concat(floor(number($dec) div 16), floor((number($dec) mod 16) div 4), number($dec) mod 4)"/>
	  </xsl:if>
	</xsl:template>

	<xsl:template name="dec2N">
	  <xsl:param name="dec"/>
	  <xsl:if test="$dec &lt; 10">
	    <xsl:value-of select="concat(floor(number($dec) div 3), number($dec) mod 3)"/>
	  </xsl:if>
	</xsl:template>

	<xsl:template name="char2C">
	  <xsl:param name="char"/>
	  <xsl:choose>
	    <xsl:when test="$char='A'">000</xsl:when>
	    <xsl:when test="$char='B'">001</xsl:when>
	    <xsl:when test="$char='C'">002</xsl:when>
	    <xsl:when test="$char='D'">010</xsl:when>
	    <xsl:when test="$char='E'">011</xsl:when>
	    <xsl:when test="$char='F'">012</xsl:when>
	    <xsl:when test="$char='G'">020</xsl:when>
	    <xsl:when test="$char='H'">021</xsl:when>
	    <xsl:when test="$char='I'">022</xsl:when>
	    <xsl:when test="$char='J'">100</xsl:when>
	    <xsl:when test="$char='K'">101</xsl:when>
	    <xsl:when test="$char='L'">102</xsl:when>
	    <xsl:when test="$char='M'">110</xsl:when>
	    <xsl:when test="$char='N'">111</xsl:when>
	    <xsl:when test="$char='O'">112</xsl:when>
	    <xsl:when test="$char='P'">120</xsl:when>
	    <xsl:when test="$char='Q'">121</xsl:when>
	    <xsl:when test="$char='R'">122</xsl:when>
	    <xsl:when test="$char='S'">200</xsl:when>
	    <xsl:when test="$char='T'">201</xsl:when>
	    <xsl:when test="$char='U'">202</xsl:when>
	    <xsl:when test="$char='V'">210</xsl:when>
	    <xsl:when test="$char='W'">211</xsl:when>
	    <xsl:when test="$char='X'">212</xsl:when>
	    <xsl:when test="$char='Y'">220</xsl:when>
	    <xsl:when test="$char='Z'">221</xsl:when>
	    <xsl:when test="$char='0'">222</xsl:when>
	    <xsl:when test="$char='1'">300</xsl:when>
	    <xsl:when test="$char='2'">301</xsl:when>
	    <xsl:when test="$char='3'">302</xsl:when>
	    <xsl:when test="$char='4'">310</xsl:when>
	    <xsl:when test="$char='5'">311</xsl:when>
	    <xsl:when test="$char='6'">312</xsl:when>
	    <xsl:when test="$char='7'">320</xsl:when>
	    <xsl:when test="$char='8'">321</xsl:when>
	    <xsl:when test="$char='9'">322</xsl:when>
	    <xsl:when test="$char='a'">023</xsl:when>
	    <xsl:when test="$char='b'">030</xsl:when>
	    <xsl:when test="$char='c'">031</xsl:when>
	    <xsl:when test="$char='d'">032</xsl:when>
	    <xsl:when test="$char='e'">033</xsl:when>
	    <xsl:when test="$char='f'">103</xsl:when>
	    <xsl:when test="$char='g'">113</xsl:when>
	    <xsl:when test="$char='h'">123</xsl:when>
	    <xsl:when test="$char='i'">130</xsl:when>
	    <xsl:when test="$char='j'">131</xsl:when>
	    <xsl:when test="$char='k'">132</xsl:when>
	    <xsl:when test="$char='l'">133</xsl:when>
	    <xsl:when test="$char='m'">203</xsl:when>
	    <xsl:when test="$char='n'">213</xsl:when>
	    <xsl:when test="$char='o'">223</xsl:when>
	    <xsl:when test="$char='p'">230</xsl:when>
	    <xsl:when test="$char='q'">231</xsl:when>
	    <xsl:when test="$char='r'">232</xsl:when>
	    <xsl:when test="$char='s'">233</xsl:when>
	    <xsl:when test="$char='t'">303</xsl:when>
	    <xsl:when test="$char='u'">313</xsl:when>
	    <xsl:when test="$char='v'">323</xsl:when>
	    <xsl:when test="$char='w'">330</xsl:when>
	    <xsl:when test="$char='x'">331</xsl:when>
	    <xsl:when test="$char='y'">332</xsl:when>
	    <xsl:when test="$char='z'">333</xsl:when>
	    <xsl:when test="$char=' '">003</xsl:when>
	    <xsl:when test="$char='#'">013</xsl:when>
	  </xsl:choose>
	</xsl:template>


	<!-- Reed Solomon coder data -->

	<my:gen>
	  <entry>48</entry>
	  <entry>17</entry>
	  <entry>29</entry>
	  <entry>30</entry>
	  <entry>1</entry>
	</my:gen>

	<my:mult>
      <row>
        <entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry><entry>0</entry>
      </row>
      <row>
        <entry>0</entry><entry>1</entry><entry>2</entry><entry>3</entry><entry>4</entry><entry>5</entry><entry>6</entry><entry>7</entry><entry>8</entry><entry>9</entry><entry>10</entry><entry>11</entry><entry>12</entry><entry>13</entry><entry>14</entry><entry>15</entry><entry>16</entry><entry>17</entry><entry>18</entry><entry>19</entry><entry>20</entry><entry>21</entry><entry>22</entry><entry>23</entry><entry>24</entry><entry>25</entry><entry>26</entry><entry>27</entry><entry>28</entry><entry>29</entry><entry>30</entry><entry>31</entry><entry>32</entry><entry>33</entry><entry>34</entry><entry>35</entry><entry>36</entry><entry>37</entry><entry>38</entry><entry>39</entry><entry>40</entry><entry>41</entry><entry>42</entry><entry>43</entry><entry>44</entry><entry>45</entry><entry>46</entry><entry>47</entry><entry>48</entry><entry>49</entry><entry>50</entry><entry>51</entry><entry>52</entry><entry>53</entry><entry>54</entry><entry>55</entry><entry>56</entry><entry>57</entry><entry>58</entry><entry>59</entry><entry>60</entry><entry>61</entry><entry>62</entry><entry>63</entry>
      </row>
      <row>
        <entry>0</entry><entry>2</entry><entry>4</entry><entry>6</entry><entry>8</entry><entry>10</entry><entry>12</entry><entry>14</entry><entry>16</entry><entry>18</entry><entry>20</entry><entry>22</entry><entry>24</entry><entry>26</entry><entry>28</entry><entry>30</entry><entry>32</entry><entry>34</entry><entry>36</entry><entry>38</entry><entry>40</entry><entry>42</entry><entry>44</entry><entry>46</entry><entry>48</entry><entry>50</entry><entry>52</entry><entry>54</entry><entry>56</entry><entry>58</entry><entry>60</entry><entry>62</entry><entry>3</entry><entry>1</entry><entry>7</entry><entry>5</entry><entry>11</entry><entry>9</entry><entry>15</entry><entry>13</entry><entry>19</entry><entry>17</entry><entry>23</entry><entry>21</entry><entry>27</entry><entry>25</entry><entry>31</entry><entry>29</entry><entry>35</entry><entry>33</entry><entry>39</entry><entry>37</entry><entry>43</entry><entry>41</entry><entry>47</entry><entry>45</entry><entry>51</entry><entry>49</entry><entry>55</entry><entry>53</entry><entry>59</entry><entry>57</entry><entry>63</entry><entry>61</entry>
      </row>
      <row>
        <entry>0</entry><entry>3</entry><entry>6</entry><entry>5</entry><entry>12</entry><entry>15</entry><entry>10</entry><entry>9</entry><entry>24</entry><entry>27</entry><entry>30</entry><entry>29</entry><entry>20</entry><entry>23</entry><entry>18</entry><entry>17</entry><entry>48</entry><entry>51</entry><entry>54</entry><entry>53</entry><entry>60</entry><entry>63</entry><entry>58</entry><entry>57</entry><entry>40</entry><entry>43</entry><entry>46</entry><entry>45</entry><entry>36</entry><entry>39</entry><entry>34</entry><entry>33</entry><entry>35</entry><entry>32</entry><entry>37</entry><entry>38</entry><entry>47</entry><entry>44</entry><entry>41</entry><entry>42</entry><entry>59</entry><entry>56</entry><entry>61</entry><entry>62</entry><entry>55</entry><entry>52</entry><entry>49</entry><entry>50</entry><entry>19</entry><entry>16</entry><entry>21</entry><entry>22</entry><entry>31</entry><entry>28</entry><entry>25</entry><entry>26</entry><entry>11</entry><entry>8</entry><entry>13</entry><entry>14</entry><entry>7</entry><entry>4</entry><entry>1</entry><entry>2</entry>
      </row>
      <row>
        <entry>0</entry><entry>4</entry><entry>8</entry><entry>12</entry><entry>16</entry><entry>20</entry><entry>24</entry><entry>28</entry><entry>32</entry><entry>36</entry><entry>40</entry><entry>44</entry><entry>48</entry><entry>52</entry><entry>56</entry><entry>60</entry><entry>3</entry><entry>7</entry><entry>11</entry><entry>15</entry><entry>19</entry><entry>23</entry><entry>27</entry><entry>31</entry><entry>35</entry><entry>39</entry><entry>43</entry><entry>47</entry><entry>51</entry><entry>55</entry><entry>59</entry><entry>63</entry><entry>6</entry><entry>2</entry><entry>14</entry><entry>10</entry><entry>22</entry><entry>18</entry><entry>30</entry><entry>26</entry><entry>38</entry><entry>34</entry><entry>46</entry><entry>42</entry><entry>54</entry><entry>50</entry><entry>62</entry><entry>58</entry><entry>5</entry><entry>1</entry><entry>13</entry><entry>9</entry><entry>21</entry><entry>17</entry><entry>29</entry><entry>25</entry><entry>37</entry><entry>33</entry><entry>45</entry><entry>41</entry><entry>53</entry><entry>49</entry><entry>61</entry><entry>57</entry>
      </row>
      <row>
        <entry>0</entry><entry>5</entry><entry>10</entry><entry>15</entry><entry>20</entry><entry>17</entry><entry>30</entry><entry>27</entry><entry>40</entry><entry>45</entry><entry>34</entry><entry>39</entry><entry>60</entry><entry>57</entry><entry>54</entry><entry>51</entry><entry>19</entry><entry>22</entry><entry>25</entry><entry>28</entry><entry>7</entry><entry>2</entry><entry>13</entry><entry>8</entry><entry>59</entry><entry>62</entry><entry>49</entry><entry>52</entry><entry>47</entry><entry>42</entry><entry>37</entry><entry>32</entry><entry>38</entry><entry>35</entry><entry>44</entry><entry>41</entry><entry>50</entry><entry>55</entry><entry>56</entry><entry>61</entry><entry>14</entry><entry>11</entry><entry>4</entry><entry>1</entry><entry>26</entry><entry>31</entry><entry>16</entry><entry>21</entry><entry>53</entry><entry>48</entry><entry>63</entry><entry>58</entry><entry>33</entry><entry>36</entry><entry>43</entry><entry>46</entry><entry>29</entry><entry>24</entry><entry>23</entry><entry>18</entry><entry>9</entry><entry>12</entry><entry>3</entry><entry>6</entry>
      </row>
      <row>
        <entry>0</entry><entry>6</entry><entry>12</entry><entry>10</entry><entry>24</entry><entry>30</entry><entry>20</entry><entry>18</entry><entry>48</entry><entry>54</entry><entry>60</entry><entry>58</entry><entry>40</entry><entry>46</entry><entry>36</entry><entry>34</entry><entry>35</entry><entry>37</entry><entry>47</entry><entry>41</entry><entry>59</entry><entry>61</entry><entry>55</entry><entry>49</entry><entry>19</entry><entry>21</entry><entry>31</entry><entry>25</entry><entry>11</entry><entry>13</entry><entry>7</entry><entry>1</entry><entry>5</entry><entry>3</entry><entry>9</entry><entry>15</entry><entry>29</entry><entry>27</entry><entry>17</entry><entry>23</entry><entry>53</entry><entry>51</entry><entry>57</entry><entry>63</entry><entry>45</entry><entry>43</entry><entry>33</entry><entry>39</entry><entry>38</entry><entry>32</entry><entry>42</entry><entry>44</entry><entry>62</entry><entry>56</entry><entry>50</entry><entry>52</entry><entry>22</entry><entry>16</entry><entry>26</entry><entry>28</entry><entry>14</entry><entry>8</entry><entry>2</entry><entry>4</entry>
      </row>
      <row>
        <entry>0</entry><entry>7</entry><entry>14</entry><entry>9</entry><entry>28</entry><entry>27</entry><entry>18</entry><entry>21</entry><entry>56</entry><entry>63</entry><entry>54</entry><entry>49</entry><entry>36</entry><entry>35</entry><entry>42</entry><entry>45</entry><entry>51</entry><entry>52</entry><entry>61</entry><entry>58</entry><entry>47</entry><entry>40</entry><entry>33</entry><entry>38</entry><entry>11</entry><entry>12</entry><entry>5</entry><entry>2</entry><entry>23</entry><entry>16</entry><entry>25</entry><entry>30</entry><entry>37</entry><entry>34</entry><entry>43</entry><entry>44</entry><entry>57</entry><entry>62</entry><entry>55</entry><entry>48</entry><entry>29</entry><entry>26</entry><entry>19</entry><entry>20</entry><entry>1</entry><entry>6</entry><entry>15</entry><entry>8</entry><entry>22</entry><entry>17</entry><entry>24</entry><entry>31</entry><entry>10</entry><entry>13</entry><entry>4</entry><entry>3</entry><entry>46</entry><entry>41</entry><entry>32</entry><entry>39</entry><entry>50</entry><entry>53</entry><entry>60</entry><entry>59</entry>
      </row>
      <row>
        <entry>0</entry><entry>8</entry><entry>16</entry><entry>24</entry><entry>32</entry><entry>40</entry><entry>48</entry><entry>56</entry><entry>3</entry><entry>11</entry><entry>19</entry><entry>27</entry><entry>35</entry><entry>43</entry><entry>51</entry><entry>59</entry><entry>6</entry><entry>14</entry><entry>22</entry><entry>30</entry><entry>38</entry><entry>46</entry><entry>54</entry><entry>62</entry><entry>5</entry><entry>13</entry><entry>21</entry><entry>29</entry><entry>37</entry><entry>45</entry><entry>53</entry><entry>61</entry><entry>12</entry><entry>4</entry><entry>28</entry><entry>20</entry><entry>44</entry><entry>36</entry><entry>60</entry><entry>52</entry><entry>15</entry><entry>7</entry><entry>31</entry><entry>23</entry><entry>47</entry><entry>39</entry><entry>63</entry><entry>55</entry><entry>10</entry><entry>2</entry><entry>26</entry><entry>18</entry><entry>42</entry><entry>34</entry><entry>58</entry><entry>50</entry><entry>9</entry><entry>1</entry><entry>25</entry><entry>17</entry><entry>41</entry><entry>33</entry><entry>57</entry><entry>49</entry>
      </row>
      <row>
        <entry>0</entry><entry>9</entry><entry>18</entry><entry>27</entry><entry>36</entry><entry>45</entry><entry>54</entry><entry>63</entry><entry>11</entry><entry>2</entry><entry>25</entry><entry>16</entry><entry>47</entry><entry>38</entry><entry>61</entry><entry>52</entry><entry>22</entry><entry>31</entry><entry>4</entry><entry>13</entry><entry>50</entry><entry>59</entry><entry>32</entry><entry>41</entry><entry>29</entry><entry>20</entry><entry>15</entry><entry>6</entry><entry>57</entry><entry>48</entry><entry>43</entry><entry>34</entry><entry>44</entry><entry>37</entry><entry>62</entry><entry>55</entry><entry>8</entry><entry>1</entry><entry>26</entry><entry>19</entry><entry>39</entry><entry>46</entry><entry>53</entry><entry>60</entry><entry>3</entry><entry>10</entry><entry>17</entry><entry>24</entry><entry>58</entry><entry>51</entry><entry>40</entry><entry>33</entry><entry>30</entry><entry>23</entry><entry>12</entry><entry>5</entry><entry>49</entry><entry>56</entry><entry>35</entry><entry>42</entry><entry>21</entry><entry>28</entry><entry>7</entry><entry>14</entry>
      </row>
      <row>
        <entry>0</entry><entry>10</entry><entry>20</entry><entry>30</entry><entry>40</entry><entry>34</entry><entry>60</entry><entry>54</entry><entry>19</entry><entry>25</entry><entry>7</entry><entry>13</entry><entry>59</entry><entry>49</entry><entry>47</entry><entry>37</entry><entry>38</entry><entry>44</entry><entry>50</entry><entry>56</entry><entry>14</entry><entry>4</entry><entry>26</entry><entry>16</entry><entry>53</entry><entry>63</entry><entry>33</entry><entry>43</entry><entry>29</entry><entry>23</entry><entry>9</entry><entry>3</entry><entry>15</entry><entry>5</entry><entry>27</entry><entry>17</entry><entry>39</entry><entry>45</entry><entry>51</entry><entry>57</entry><entry>28</entry><entry>22</entry><entry>8</entry><entry>2</entry><entry>52</entry><entry>62</entry><entry>32</entry><entry>42</entry><entry>41</entry><entry>35</entry><entry>61</entry><entry>55</entry><entry>1</entry><entry>11</entry><entry>21</entry><entry>31</entry><entry>58</entry><entry>48</entry><entry>46</entry><entry>36</entry><entry>18</entry><entry>24</entry><entry>6</entry><entry>12</entry>
      </row>
      <row>
        <entry>0</entry><entry>11</entry><entry>22</entry><entry>29</entry><entry>44</entry><entry>39</entry><entry>58</entry><entry>49</entry><entry>27</entry><entry>16</entry><entry>13</entry><entry>6</entry><entry>55</entry><entry>60</entry><entry>33</entry><entry>42</entry><entry>54</entry><entry>61</entry><entry>32</entry><entry>43</entry><entry>26</entry><entry>17</entry><entry>12</entry><entry>7</entry><entry>45</entry><entry>38</entry><entry>59</entry><entry>48</entry><entry>1</entry><entry>10</entry><entry>23</entry><entry>28</entry><entry>47</entry><entry>36</entry><entry>57</entry><entry>50</entry><entry>3</entry><entry>8</entry><entry>21</entry><entry>30</entry><entry>52</entry><entry>63</entry><entry>34</entry><entry>41</entry><entry>24</entry><entry>19</entry><entry>14</entry><entry>5</entry><entry>25</entry><entry>18</entry><entry>15</entry><entry>4</entry><entry>53</entry><entry>62</entry><entry>35</entry><entry>40</entry><entry>2</entry><entry>9</entry><entry>20</entry><entry>31</entry><entry>46</entry><entry>37</entry><entry>56</entry><entry>51</entry>
      </row>
      <row>
        <entry>0</entry><entry>12</entry><entry>24</entry><entry>20</entry><entry>48</entry><entry>60</entry><entry>40</entry><entry>36</entry><entry>35</entry><entry>47</entry><entry>59</entry><entry>55</entry><entry>19</entry><entry>31</entry><entry>11</entry><entry>7</entry><entry>5</entry><entry>9</entry><entry>29</entry><entry>17</entry><entry>53</entry><entry>57</entry><entry>45</entry><entry>33</entry><entry>38</entry><entry>42</entry><entry>62</entry><entry>50</entry><entry>22</entry><entry>26</entry><entry>14</entry><entry>2</entry><entry>10</entry><entry>6</entry><entry>18</entry><entry>30</entry><entry>58</entry><entry>54</entry><entry>34</entry><entry>46</entry><entry>41</entry><entry>37</entry><entry>49</entry><entry>61</entry><entry>25</entry><entry>21</entry><entry>1</entry><entry>13</entry><entry>15</entry><entry>3</entry><entry>23</entry><entry>27</entry><entry>63</entry><entry>51</entry><entry>39</entry><entry>43</entry><entry>44</entry><entry>32</entry><entry>52</entry><entry>56</entry><entry>28</entry><entry>16</entry><entry>4</entry><entry>8</entry>
      </row>
      <row>
        <entry>0</entry><entry>13</entry><entry>26</entry><entry>23</entry><entry>52</entry><entry>57</entry><entry>46</entry><entry>35</entry><entry>43</entry><entry>38</entry><entry>49</entry><entry>60</entry><entry>31</entry><entry>18</entry><entry>5</entry><entry>8</entry><entry>21</entry><entry>24</entry><entry>15</entry><entry>2</entry><entry>33</entry><entry>44</entry><entry>59</entry><entry>54</entry><entry>62</entry><entry>51</entry><entry>36</entry><entry>41</entry><entry>10</entry><entry>7</entry><entry>16</entry><entry>29</entry><entry>42</entry><entry>39</entry><entry>48</entry><entry>61</entry><entry>30</entry><entry>19</entry><entry>4</entry><entry>9</entry><entry>1</entry><entry>12</entry><entry>27</entry><entry>22</entry><entry>53</entry><entry>56</entry><entry>47</entry><entry>34</entry><entry>63</entry><entry>50</entry><entry>37</entry><entry>40</entry><entry>11</entry><entry>6</entry><entry>17</entry><entry>28</entry><entry>20</entry><entry>25</entry><entry>14</entry><entry>3</entry><entry>32</entry><entry>45</entry><entry>58</entry><entry>55</entry>
      </row>
      <row>
        <entry>0</entry><entry>14</entry><entry>28</entry><entry>18</entry><entry>56</entry><entry>54</entry><entry>36</entry><entry>42</entry><entry>51</entry><entry>61</entry><entry>47</entry><entry>33</entry><entry>11</entry><entry>5</entry><entry>23</entry><entry>25</entry><entry>37</entry><entry>43</entry><entry>57</entry><entry>55</entry><entry>29</entry><entry>19</entry><entry>1</entry><entry>15</entry><entry>22</entry><entry>24</entry><entry>10</entry><entry>4</entry><entry>46</entry><entry>32</entry><entry>50</entry><entry>60</entry><entry>9</entry><entry>7</entry><entry>21</entry><entry>27</entry><entry>49</entry><entry>63</entry><entry>45</entry><entry>35</entry><entry>58</entry><entry>52</entry><entry>38</entry><entry>40</entry><entry>2</entry><entry>12</entry><entry>30</entry><entry>16</entry><entry>44</entry><entry>34</entry><entry>48</entry><entry>62</entry><entry>20</entry><entry>26</entry><entry>8</entry><entry>6</entry><entry>31</entry><entry>17</entry><entry>3</entry><entry>13</entry><entry>39</entry><entry>41</entry><entry>59</entry><entry>53</entry>
      </row>
      <row>
        <entry>0</entry><entry>15</entry><entry>30</entry><entry>17</entry><entry>60</entry><entry>51</entry><entry>34</entry><entry>45</entry><entry>59</entry><entry>52</entry><entry>37</entry><entry>42</entry><entry>7</entry><entry>8</entry><entry>25</entry><entry>22</entry><entry>53</entry><entry>58</entry><entry>43</entry><entry>36</entry><entry>9</entry><entry>6</entry><entry>23</entry><entry>24</entry><entry>14</entry><entry>1</entry><entry>16</entry><entry>31</entry><entry>50</entry><entry>61</entry><entry>44</entry><entry>35</entry><entry>41</entry><entry>38</entry><entry>55</entry><entry>56</entry><entry>21</entry><entry>26</entry><entry>11</entry><entry>4</entry><entry>18</entry><entry>29</entry><entry>12</entry><entry>3</entry><entry>46</entry><entry>33</entry><entry>48</entry><entry>63</entry><entry>28</entry><entry>19</entry><entry>2</entry><entry>13</entry><entry>32</entry><entry>47</entry><entry>62</entry><entry>49</entry><entry>39</entry><entry>40</entry><entry>57</entry><entry>54</entry><entry>27</entry><entry>20</entry><entry>5</entry><entry>10</entry>
      </row>
      <row>
        <entry>0</entry><entry>16</entry><entry>32</entry><entry>48</entry><entry>3</entry><entry>19</entry><entry>35</entry><entry>51</entry><entry>6</entry><entry>22</entry><entry>38</entry><entry>54</entry><entry>5</entry><entry>21</entry><entry>37</entry><entry>53</entry><entry>12</entry><entry>28</entry><entry>44</entry><entry>60</entry><entry>15</entry><entry>31</entry><entry>47</entry><entry>63</entry><entry>10</entry><entry>26</entry><entry>42</entry><entry>58</entry><entry>9</entry><entry>25</entry><entry>41</entry><entry>57</entry><entry>24</entry><entry>8</entry><entry>56</entry><entry>40</entry><entry>27</entry><entry>11</entry><entry>59</entry><entry>43</entry><entry>30</entry><entry>14</entry><entry>62</entry><entry>46</entry><entry>29</entry><entry>13</entry><entry>61</entry><entry>45</entry><entry>20</entry><entry>4</entry><entry>52</entry><entry>36</entry><entry>23</entry><entry>7</entry><entry>55</entry><entry>39</entry><entry>18</entry><entry>2</entry><entry>50</entry><entry>34</entry><entry>17</entry><entry>1</entry><entry>49</entry><entry>33</entry>
      </row>
      <row>
        <entry>0</entry><entry>17</entry><entry>34</entry><entry>51</entry><entry>7</entry><entry>22</entry><entry>37</entry><entry>52</entry><entry>14</entry><entry>31</entry><entry>44</entry><entry>61</entry><entry>9</entry><entry>24</entry><entry>43</entry><entry>58</entry><entry>28</entry><entry>13</entry><entry>62</entry><entry>47</entry><entry>27</entry><entry>10</entry><entry>57</entry><entry>40</entry><entry>18</entry><entry>3</entry><entry>48</entry><entry>33</entry><entry>21</entry><entry>4</entry><entry>55</entry><entry>38</entry><entry>56</entry><entry>41</entry><entry>26</entry><entry>11</entry><entry>63</entry><entry>46</entry><entry>29</entry><entry>12</entry><entry>54</entry><entry>39</entry><entry>20</entry><entry>5</entry><entry>49</entry><entry>32</entry><entry>19</entry><entry>2</entry><entry>36</entry><entry>53</entry><entry>6</entry><entry>23</entry><entry>35</entry><entry>50</entry><entry>1</entry><entry>16</entry><entry>42</entry><entry>59</entry><entry>8</entry><entry>25</entry><entry>45</entry><entry>60</entry><entry>15</entry><entry>30</entry>
      </row>
      <row>
        <entry>0</entry><entry>18</entry><entry>36</entry><entry>54</entry><entry>11</entry><entry>25</entry><entry>47</entry><entry>61</entry><entry>22</entry><entry>4</entry><entry>50</entry><entry>32</entry><entry>29</entry><entry>15</entry><entry>57</entry><entry>43</entry><entry>44</entry><entry>62</entry><entry>8</entry><entry>26</entry><entry>39</entry><entry>53</entry><entry>3</entry><entry>17</entry><entry>58</entry><entry>40</entry><entry>30</entry><entry>12</entry><entry>49</entry><entry>35</entry><entry>21</entry><entry>7</entry><entry>27</entry><entry>9</entry><entry>63</entry><entry>45</entry><entry>16</entry><entry>2</entry><entry>52</entry><entry>38</entry><entry>13</entry><entry>31</entry><entry>41</entry><entry>59</entry><entry>6</entry><entry>20</entry><entry>34</entry><entry>48</entry><entry>55</entry><entry>37</entry><entry>19</entry><entry>1</entry><entry>60</entry><entry>46</entry><entry>24</entry><entry>10</entry><entry>33</entry><entry>51</entry><entry>5</entry><entry>23</entry><entry>42</entry><entry>56</entry><entry>14</entry><entry>28</entry>
      </row>
      <row>
        <entry>0</entry><entry>19</entry><entry>38</entry><entry>53</entry><entry>15</entry><entry>28</entry><entry>41</entry><entry>58</entry><entry>30</entry><entry>13</entry><entry>56</entry><entry>43</entry><entry>17</entry><entry>2</entry><entry>55</entry><entry>36</entry><entry>60</entry><entry>47</entry><entry>26</entry><entry>9</entry><entry>51</entry><entry>32</entry><entry>21</entry><entry>6</entry><entry>34</entry><entry>49</entry><entry>4</entry><entry>23</entry><entry>45</entry><entry>62</entry><entry>11</entry><entry>24</entry><entry>59</entry><entry>40</entry><entry>29</entry><entry>14</entry><entry>52</entry><entry>39</entry><entry>18</entry><entry>1</entry><entry>37</entry><entry>54</entry><entry>3</entry><entry>16</entry><entry>42</entry><entry>57</entry><entry>12</entry><entry>31</entry><entry>7</entry><entry>20</entry><entry>33</entry><entry>50</entry><entry>8</entry><entry>27</entry><entry>46</entry><entry>61</entry><entry>25</entry><entry>10</entry><entry>63</entry><entry>44</entry><entry>22</entry><entry>5</entry><entry>48</entry><entry>35</entry>
      </row>
      <row>
        <entry>0</entry><entry>20</entry><entry>40</entry><entry>60</entry><entry>19</entry><entry>7</entry><entry>59</entry><entry>47</entry><entry>38</entry><entry>50</entry><entry>14</entry><entry>26</entry><entry>53</entry><entry>33</entry><entry>29</entry><entry>9</entry><entry>15</entry><entry>27</entry><entry>39</entry><entry>51</entry><entry>28</entry><entry>8</entry><entry>52</entry><entry>32</entry><entry>41</entry><entry>61</entry><entry>1</entry><entry>21</entry><entry>58</entry><entry>46</entry><entry>18</entry><entry>6</entry><entry>30</entry><entry>10</entry><entry>54</entry><entry>34</entry><entry>13</entry><entry>25</entry><entry>37</entry><entry>49</entry><entry>56</entry><entry>44</entry><entry>16</entry><entry>4</entry><entry>43</entry><entry>63</entry><entry>3</entry><entry>23</entry><entry>17</entry><entry>5</entry><entry>57</entry><entry>45</entry><entry>2</entry><entry>22</entry><entry>42</entry><entry>62</entry><entry>55</entry><entry>35</entry><entry>31</entry><entry>11</entry><entry>36</entry><entry>48</entry><entry>12</entry><entry>24</entry>
      </row>
      <row>
        <entry>0</entry><entry>21</entry><entry>42</entry><entry>63</entry><entry>23</entry><entry>2</entry><entry>61</entry><entry>40</entry><entry>46</entry><entry>59</entry><entry>4</entry><entry>17</entry><entry>57</entry><entry>44</entry><entry>19</entry><entry>6</entry><entry>31</entry><entry>10</entry><entry>53</entry><entry>32</entry><entry>8</entry><entry>29</entry><entry>34</entry><entry>55</entry><entry>49</entry><entry>36</entry><entry>27</entry><entry>14</entry><entry>38</entry><entry>51</entry><entry>12</entry><entry>25</entry><entry>62</entry><entry>43</entry><entry>20</entry><entry>1</entry><entry>41</entry><entry>60</entry><entry>3</entry><entry>22</entry><entry>16</entry><entry>5</entry><entry>58</entry><entry>47</entry><entry>7</entry><entry>18</entry><entry>45</entry><entry>56</entry><entry>33</entry><entry>52</entry><entry>11</entry><entry>30</entry><entry>54</entry><entry>35</entry><entry>28</entry><entry>9</entry><entry>15</entry><entry>26</entry><entry>37</entry><entry>48</entry><entry>24</entry><entry>13</entry><entry>50</entry><entry>39</entry>
      </row>
      <row>
        <entry>0</entry><entry>22</entry><entry>44</entry><entry>58</entry><entry>27</entry><entry>13</entry><entry>55</entry><entry>33</entry><entry>54</entry><entry>32</entry><entry>26</entry><entry>12</entry><entry>45</entry><entry>59</entry><entry>1</entry><entry>23</entry><entry>47</entry><entry>57</entry><entry>3</entry><entry>21</entry><entry>52</entry><entry>34</entry><entry>24</entry><entry>14</entry><entry>25</entry><entry>15</entry><entry>53</entry><entry>35</entry><entry>2</entry><entry>20</entry><entry>46</entry><entry>56</entry><entry>29</entry><entry>11</entry><entry>49</entry><entry>39</entry><entry>6</entry><entry>16</entry><entry>42</entry><entry>60</entry><entry>43</entry><entry>61</entry><entry>7</entry><entry>17</entry><entry>48</entry><entry>38</entry><entry>28</entry><entry>10</entry><entry>50</entry><entry>36</entry><entry>30</entry><entry>8</entry><entry>41</entry><entry>63</entry><entry>5</entry><entry>19</entry><entry>4</entry><entry>18</entry><entry>40</entry><entry>62</entry><entry>31</entry><entry>9</entry><entry>51</entry><entry>37</entry>
      </row>
      <row>
        <entry>0</entry><entry>23</entry><entry>46</entry><entry>57</entry><entry>31</entry><entry>8</entry><entry>49</entry><entry>38</entry><entry>62</entry><entry>41</entry><entry>16</entry><entry>7</entry><entry>33</entry><entry>54</entry><entry>15</entry><entry>24</entry><entry>63</entry><entry>40</entry><entry>17</entry><entry>6</entry><entry>32</entry><entry>55</entry><entry>14</entry><entry>25</entry><entry>1</entry><entry>22</entry><entry>47</entry><entry>56</entry><entry>30</entry><entry>9</entry><entry>48</entry><entry>39</entry><entry>61</entry><entry>42</entry><entry>19</entry><entry>4</entry><entry>34</entry><entry>53</entry><entry>12</entry><entry>27</entry><entry>3</entry><entry>20</entry><entry>45</entry><entry>58</entry><entry>28</entry><entry>11</entry><entry>50</entry><entry>37</entry><entry>2</entry><entry>21</entry><entry>44</entry><entry>59</entry><entry>29</entry><entry>10</entry><entry>51</entry><entry>36</entry><entry>60</entry><entry>43</entry><entry>18</entry><entry>5</entry><entry>35</entry><entry>52</entry><entry>13</entry><entry>26</entry>
      </row>
      <row>
        <entry>0</entry><entry>24</entry><entry>48</entry><entry>40</entry><entry>35</entry><entry>59</entry><entry>19</entry><entry>11</entry><entry>5</entry><entry>29</entry><entry>53</entry><entry>45</entry><entry>38</entry><entry>62</entry><entry>22</entry><entry>14</entry><entry>10</entry><entry>18</entry><entry>58</entry><entry>34</entry><entry>41</entry><entry>49</entry><entry>25</entry><entry>1</entry><entry>15</entry><entry>23</entry><entry>63</entry><entry>39</entry><entry>44</entry><entry>52</entry><entry>28</entry><entry>4</entry><entry>20</entry><entry>12</entry><entry>36</entry><entry>60</entry><entry>55</entry><entry>47</entry><entry>7</entry><entry>31</entry><entry>17</entry><entry>9</entry><entry>33</entry><entry>57</entry><entry>50</entry><entry>42</entry><entry>2</entry><entry>26</entry><entry>30</entry><entry>6</entry><entry>46</entry><entry>54</entry><entry>61</entry><entry>37</entry><entry>13</entry><entry>21</entry><entry>27</entry><entry>3</entry><entry>43</entry><entry>51</entry><entry>56</entry><entry>32</entry><entry>8</entry><entry>16</entry>
      </row>
      <row>
        <entry>0</entry><entry>25</entry><entry>50</entry><entry>43</entry><entry>39</entry><entry>62</entry><entry>21</entry><entry>12</entry><entry>13</entry><entry>20</entry><entry>63</entry><entry>38</entry><entry>42</entry><entry>51</entry><entry>24</entry><entry>1</entry><entry>26</entry><entry>3</entry><entry>40</entry><entry>49</entry><entry>61</entry><entry>36</entry><entry>15</entry><entry>22</entry><entry>23</entry><entry>14</entry><entry>37</entry><entry>60</entry><entry>48</entry><entry>41</entry><entry>2</entry><entry>27</entry><entry>52</entry><entry>45</entry><entry>6</entry><entry>31</entry><entry>19</entry><entry>10</entry><entry>33</entry><entry>56</entry><entry>57</entry><entry>32</entry><entry>11</entry><entry>18</entry><entry>30</entry><entry>7</entry><entry>44</entry><entry>53</entry><entry>46</entry><entry>55</entry><entry>28</entry><entry>5</entry><entry>9</entry><entry>16</entry><entry>59</entry><entry>34</entry><entry>35</entry><entry>58</entry><entry>17</entry><entry>8</entry><entry>4</entry><entry>29</entry><entry>54</entry><entry>47</entry>
      </row>
      <row>
        <entry>0</entry><entry>26</entry><entry>52</entry><entry>46</entry><entry>43</entry><entry>49</entry><entry>31</entry><entry>5</entry><entry>21</entry><entry>15</entry><entry>33</entry><entry>59</entry><entry>62</entry><entry>36</entry><entry>10</entry><entry>16</entry><entry>42</entry><entry>48</entry><entry>30</entry><entry>4</entry><entry>1</entry><entry>27</entry><entry>53</entry><entry>47</entry><entry>63</entry><entry>37</entry><entry>11</entry><entry>17</entry><entry>20</entry><entry>14</entry><entry>32</entry><entry>58</entry><entry>23</entry><entry>13</entry><entry>35</entry><entry>57</entry><entry>60</entry><entry>38</entry><entry>8</entry><entry>18</entry><entry>2</entry><entry>24</entry><entry>54</entry><entry>44</entry><entry>41</entry><entry>51</entry><entry>29</entry><entry>7</entry><entry>61</entry><entry>39</entry><entry>9</entry><entry>19</entry><entry>22</entry><entry>12</entry><entry>34</entry><entry>56</entry><entry>40</entry><entry>50</entry><entry>28</entry><entry>6</entry><entry>3</entry><entry>25</entry><entry>55</entry><entry>45</entry>
      </row>
      <row>
        <entry>0</entry><entry>27</entry><entry>54</entry><entry>45</entry><entry>47</entry><entry>52</entry><entry>25</entry><entry>2</entry><entry>29</entry><entry>6</entry><entry>43</entry><entry>48</entry><entry>50</entry><entry>41</entry><entry>4</entry><entry>31</entry><entry>58</entry><entry>33</entry><entry>12</entry><entry>23</entry><entry>21</entry><entry>14</entry><entry>35</entry><entry>56</entry><entry>39</entry><entry>60</entry><entry>17</entry><entry>10</entry><entry>8</entry><entry>19</entry><entry>62</entry><entry>37</entry><entry>55</entry><entry>44</entry><entry>1</entry><entry>26</entry><entry>24</entry><entry>3</entry><entry>46</entry><entry>53</entry><entry>42</entry><entry>49</entry><entry>28</entry><entry>7</entry><entry>5</entry><entry>30</entry><entry>51</entry><entry>40</entry><entry>13</entry><entry>22</entry><entry>59</entry><entry>32</entry><entry>34</entry><entry>57</entry><entry>20</entry><entry>15</entry><entry>16</entry><entry>11</entry><entry>38</entry><entry>61</entry><entry>63</entry><entry>36</entry><entry>9</entry><entry>18</entry>
      </row>
      <row>
        <entry>0</entry><entry>28</entry><entry>56</entry><entry>36</entry><entry>51</entry><entry>47</entry><entry>11</entry><entry>23</entry><entry>37</entry><entry>57</entry><entry>29</entry><entry>1</entry><entry>22</entry><entry>10</entry><entry>46</entry><entry>50</entry><entry>9</entry><entry>21</entry><entry>49</entry><entry>45</entry><entry>58</entry><entry>38</entry><entry>2</entry><entry>30</entry><entry>44</entry><entry>48</entry><entry>20</entry><entry>8</entry><entry>31</entry><entry>3</entry><entry>39</entry><entry>59</entry><entry>18</entry><entry>14</entry><entry>42</entry><entry>54</entry><entry>33</entry><entry>61</entry><entry>25</entry><entry>5</entry><entry>55</entry><entry>43</entry><entry>15</entry><entry>19</entry><entry>4</entry><entry>24</entry><entry>60</entry><entry>32</entry><entry>27</entry><entry>7</entry><entry>35</entry><entry>63</entry><entry>40</entry><entry>52</entry><entry>16</entry><entry>12</entry><entry>62</entry><entry>34</entry><entry>6</entry><entry>26</entry><entry>13</entry><entry>17</entry><entry>53</entry><entry>41</entry>
      </row>
      <row>
        <entry>0</entry><entry>29</entry><entry>58</entry><entry>39</entry><entry>55</entry><entry>42</entry><entry>13</entry><entry>16</entry><entry>45</entry><entry>48</entry><entry>23</entry><entry>10</entry><entry>26</entry><entry>7</entry><entry>32</entry><entry>61</entry><entry>25</entry><entry>4</entry><entry>35</entry><entry>62</entry><entry>46</entry><entry>51</entry><entry>20</entry><entry>9</entry><entry>52</entry><entry>41</entry><entry>14</entry><entry>19</entry><entry>3</entry><entry>30</entry><entry>57</entry><entry>36</entry><entry>50</entry><entry>47</entry><entry>8</entry><entry>21</entry><entry>5</entry><entry>24</entry><entry>63</entry><entry>34</entry><entry>31</entry><entry>2</entry><entry>37</entry><entry>56</entry><entry>40</entry><entry>53</entry><entry>18</entry><entry>15</entry><entry>43</entry><entry>54</entry><entry>17</entry><entry>12</entry><entry>28</entry><entry>1</entry><entry>38</entry><entry>59</entry><entry>6</entry><entry>27</entry><entry>60</entry><entry>33</entry><entry>49</entry><entry>44</entry><entry>11</entry><entry>22</entry>
      </row>
      <row>
        <entry>0</entry><entry>30</entry><entry>60</entry><entry>34</entry><entry>59</entry><entry>37</entry><entry>7</entry><entry>25</entry><entry>53</entry><entry>43</entry><entry>9</entry><entry>23</entry><entry>14</entry><entry>16</entry><entry>50</entry><entry>44</entry><entry>41</entry><entry>55</entry><entry>21</entry><entry>11</entry><entry>18</entry><entry>12</entry><entry>46</entry><entry>48</entry><entry>28</entry><entry>2</entry><entry>32</entry><entry>62</entry><entry>39</entry><entry>57</entry><entry>27</entry><entry>5</entry><entry>17</entry><entry>15</entry><entry>45</entry><entry>51</entry><entry>42</entry><entry>52</entry><entry>22</entry><entry>8</entry><entry>36</entry><entry>58</entry><entry>24</entry><entry>6</entry><entry>31</entry><entry>1</entry><entry>35</entry><entry>61</entry><entry>56</entry><entry>38</entry><entry>4</entry><entry>26</entry><entry>3</entry><entry>29</entry><entry>63</entry><entry>33</entry><entry>13</entry><entry>19</entry><entry>49</entry><entry>47</entry><entry>54</entry><entry>40</entry><entry>10</entry><entry>20</entry>
      </row>
      <row>
        <entry>0</entry><entry>31</entry><entry>62</entry><entry>33</entry><entry>63</entry><entry>32</entry><entry>1</entry><entry>30</entry><entry>61</entry><entry>34</entry><entry>3</entry><entry>28</entry><entry>2</entry><entry>29</entry><entry>60</entry><entry>35</entry><entry>57</entry><entry>38</entry><entry>7</entry><entry>24</entry><entry>6</entry><entry>25</entry><entry>56</entry><entry>39</entry><entry>4</entry><entry>27</entry><entry>58</entry><entry>37</entry><entry>59</entry><entry>36</entry><entry>5</entry><entry>26</entry><entry>49</entry><entry>46</entry><entry>15</entry><entry>16</entry><entry>14</entry><entry>17</entry><entry>48</entry><entry>47</entry><entry>12</entry><entry>19</entry><entry>50</entry><entry>45</entry><entry>51</entry><entry>44</entry><entry>13</entry><entry>18</entry><entry>8</entry><entry>23</entry><entry>54</entry><entry>41</entry><entry>55</entry><entry>40</entry><entry>9</entry><entry>22</entry><entry>53</entry><entry>42</entry><entry>11</entry><entry>20</entry><entry>10</entry><entry>21</entry><entry>52</entry><entry>43</entry>
      </row>
      <row>
        <entry>0</entry><entry>32</entry><entry>3</entry><entry>35</entry><entry>6</entry><entry>38</entry><entry>5</entry><entry>37</entry><entry>12</entry><entry>44</entry><entry>15</entry><entry>47</entry><entry>10</entry><entry>42</entry><entry>9</entry><entry>41</entry><entry>24</entry><entry>56</entry><entry>27</entry><entry>59</entry><entry>30</entry><entry>62</entry><entry>29</entry><entry>61</entry><entry>20</entry><entry>52</entry><entry>23</entry><entry>55</entry><entry>18</entry><entry>50</entry><entry>17</entry><entry>49</entry><entry>48</entry><entry>16</entry><entry>51</entry><entry>19</entry><entry>54</entry><entry>22</entry><entry>53</entry><entry>21</entry><entry>60</entry><entry>28</entry><entry>63</entry><entry>31</entry><entry>58</entry><entry>26</entry><entry>57</entry><entry>25</entry><entry>40</entry><entry>8</entry><entry>43</entry><entry>11</entry><entry>46</entry><entry>14</entry><entry>45</entry><entry>13</entry><entry>36</entry><entry>4</entry><entry>39</entry><entry>7</entry><entry>34</entry><entry>2</entry><entry>33</entry><entry>1</entry>
      </row>
      <row>
        <entry>0</entry><entry>33</entry><entry>1</entry><entry>32</entry><entry>2</entry><entry>35</entry><entry>3</entry><entry>34</entry><entry>4</entry><entry>37</entry><entry>5</entry><entry>36</entry><entry>6</entry><entry>39</entry><entry>7</entry><entry>38</entry><entry>8</entry><entry>41</entry><entry>9</entry><entry>40</entry><entry>10</entry><entry>43</entry><entry>11</entry><entry>42</entry><entry>12</entry><entry>45</entry><entry>13</entry><entry>44</entry><entry>14</entry><entry>47</entry><entry>15</entry><entry>46</entry><entry>16</entry><entry>49</entry><entry>17</entry><entry>48</entry><entry>18</entry><entry>51</entry><entry>19</entry><entry>50</entry><entry>20</entry><entry>53</entry><entry>21</entry><entry>52</entry><entry>22</entry><entry>55</entry><entry>23</entry><entry>54</entry><entry>24</entry><entry>57</entry><entry>25</entry><entry>56</entry><entry>26</entry><entry>59</entry><entry>27</entry><entry>58</entry><entry>28</entry><entry>61</entry><entry>29</entry><entry>60</entry><entry>30</entry><entry>63</entry><entry>31</entry><entry>62</entry>
      </row>
      <row>
        <entry>0</entry><entry>34</entry><entry>7</entry><entry>37</entry><entry>14</entry><entry>44</entry><entry>9</entry><entry>43</entry><entry>28</entry><entry>62</entry><entry>27</entry><entry>57</entry><entry>18</entry><entry>48</entry><entry>21</entry><entry>55</entry><entry>56</entry><entry>26</entry><entry>63</entry><entry>29</entry><entry>54</entry><entry>20</entry><entry>49</entry><entry>19</entry><entry>36</entry><entry>6</entry><entry>35</entry><entry>1</entry><entry>42</entry><entry>8</entry><entry>45</entry><entry>15</entry><entry>51</entry><entry>17</entry><entry>52</entry><entry>22</entry><entry>61</entry><entry>31</entry><entry>58</entry><entry>24</entry><entry>47</entry><entry>13</entry><entry>40</entry><entry>10</entry><entry>33</entry><entry>3</entry><entry>38</entry><entry>4</entry><entry>11</entry><entry>41</entry><entry>12</entry><entry>46</entry><entry>5</entry><entry>39</entry><entry>2</entry><entry>32</entry><entry>23</entry><entry>53</entry><entry>16</entry><entry>50</entry><entry>25</entry><entry>59</entry><entry>30</entry><entry>60</entry>
      </row>
      <row>
        <entry>0</entry><entry>35</entry><entry>5</entry><entry>38</entry><entry>10</entry><entry>41</entry><entry>15</entry><entry>44</entry><entry>20</entry><entry>55</entry><entry>17</entry><entry>50</entry><entry>30</entry><entry>61</entry><entry>27</entry><entry>56</entry><entry>40</entry><entry>11</entry><entry>45</entry><entry>14</entry><entry>34</entry><entry>1</entry><entry>39</entry><entry>4</entry><entry>60</entry><entry>31</entry><entry>57</entry><entry>26</entry><entry>54</entry><entry>21</entry><entry>51</entry><entry>16</entry><entry>19</entry><entry>48</entry><entry>22</entry><entry>53</entry><entry>25</entry><entry>58</entry><entry>28</entry><entry>63</entry><entry>7</entry><entry>36</entry><entry>2</entry><entry>33</entry><entry>13</entry><entry>46</entry><entry>8</entry><entry>43</entry><entry>59</entry><entry>24</entry><entry>62</entry><entry>29</entry><entry>49</entry><entry>18</entry><entry>52</entry><entry>23</entry><entry>47</entry><entry>12</entry><entry>42</entry><entry>9</entry><entry>37</entry><entry>6</entry><entry>32</entry><entry>3</entry>
      </row>
      <row>
        <entry>0</entry><entry>36</entry><entry>11</entry><entry>47</entry><entry>22</entry><entry>50</entry><entry>29</entry><entry>57</entry><entry>44</entry><entry>8</entry><entry>39</entry><entry>3</entry><entry>58</entry><entry>30</entry><entry>49</entry><entry>21</entry><entry>27</entry><entry>63</entry><entry>16</entry><entry>52</entry><entry>13</entry><entry>41</entry><entry>6</entry><entry>34</entry><entry>55</entry><entry>19</entry><entry>60</entry><entry>24</entry><entry>33</entry><entry>5</entry><entry>42</entry><entry>14</entry><entry>54</entry><entry>18</entry><entry>61</entry><entry>25</entry><entry>32</entry><entry>4</entry><entry>43</entry><entry>15</entry><entry>26</entry><entry>62</entry><entry>17</entry><entry>53</entry><entry>12</entry><entry>40</entry><entry>7</entry><entry>35</entry><entry>45</entry><entry>9</entry><entry>38</entry><entry>2</entry><entry>59</entry><entry>31</entry><entry>48</entry><entry>20</entry><entry>1</entry><entry>37</entry><entry>10</entry><entry>46</entry><entry>23</entry><entry>51</entry><entry>28</entry><entry>56</entry>
      </row>
      <row>
        <entry>0</entry><entry>37</entry><entry>9</entry><entry>44</entry><entry>18</entry><entry>55</entry><entry>27</entry><entry>62</entry><entry>36</entry><entry>1</entry><entry>45</entry><entry>8</entry><entry>54</entry><entry>19</entry><entry>63</entry><entry>26</entry><entry>11</entry><entry>46</entry><entry>2</entry><entry>39</entry><entry>25</entry><entry>60</entry><entry>16</entry><entry>53</entry><entry>47</entry><entry>10</entry><entry>38</entry><entry>3</entry><entry>61</entry><entry>24</entry><entry>52</entry><entry>17</entry><entry>22</entry><entry>51</entry><entry>31</entry><entry>58</entry><entry>4</entry><entry>33</entry><entry>13</entry><entry>40</entry><entry>50</entry><entry>23</entry><entry>59</entry><entry>30</entry><entry>32</entry><entry>5</entry><entry>41</entry><entry>12</entry><entry>29</entry><entry>56</entry><entry>20</entry><entry>49</entry><entry>15</entry><entry>42</entry><entry>6</entry><entry>35</entry><entry>57</entry><entry>28</entry><entry>48</entry><entry>21</entry><entry>43</entry><entry>14</entry><entry>34</entry><entry>7</entry>
      </row>
      <row>
        <entry>0</entry><entry>38</entry><entry>15</entry><entry>41</entry><entry>30</entry><entry>56</entry><entry>17</entry><entry>55</entry><entry>60</entry><entry>26</entry><entry>51</entry><entry>21</entry><entry>34</entry><entry>4</entry><entry>45</entry><entry>11</entry><entry>59</entry><entry>29</entry><entry>52</entry><entry>18</entry><entry>37</entry><entry>3</entry><entry>42</entry><entry>12</entry><entry>7</entry><entry>33</entry><entry>8</entry><entry>46</entry><entry>25</entry><entry>63</entry><entry>22</entry><entry>48</entry><entry>53</entry><entry>19</entry><entry>58</entry><entry>28</entry><entry>43</entry><entry>13</entry><entry>36</entry><entry>2</entry><entry>9</entry><entry>47</entry><entry>6</entry><entry>32</entry><entry>23</entry><entry>49</entry><entry>24</entry><entry>62</entry><entry>14</entry><entry>40</entry><entry>1</entry><entry>39</entry><entry>16</entry><entry>54</entry><entry>31</entry><entry>57</entry><entry>50</entry><entry>20</entry><entry>61</entry><entry>27</entry><entry>44</entry><entry>10</entry><entry>35</entry><entry>5</entry>
      </row>
      <row>
        <entry>0</entry><entry>39</entry><entry>13</entry><entry>42</entry><entry>26</entry><entry>61</entry><entry>23</entry><entry>48</entry><entry>52</entry><entry>19</entry><entry>57</entry><entry>30</entry><entry>46</entry><entry>9</entry><entry>35</entry><entry>4</entry><entry>43</entry><entry>12</entry><entry>38</entry><entry>1</entry><entry>49</entry><entry>22</entry><entry>60</entry><entry>27</entry><entry>31</entry><entry>56</entry><entry>18</entry><entry>53</entry><entry>5</entry><entry>34</entry><entry>8</entry><entry>47</entry><entry>21</entry><entry>50</entry><entry>24</entry><entry>63</entry><entry>15</entry><entry>40</entry><entry>2</entry><entry>37</entry><entry>33</entry><entry>6</entry><entry>44</entry><entry>11</entry><entry>59</entry><entry>28</entry><entry>54</entry><entry>17</entry><entry>62</entry><entry>25</entry><entry>51</entry><entry>20</entry><entry>36</entry><entry>3</entry><entry>41</entry><entry>14</entry><entry>10</entry><entry>45</entry><entry>7</entry><entry>32</entry><entry>16</entry><entry>55</entry><entry>29</entry><entry>58</entry>
      </row>
      <row>
        <entry>0</entry><entry>40</entry><entry>19</entry><entry>59</entry><entry>38</entry><entry>14</entry><entry>53</entry><entry>29</entry><entry>15</entry><entry>39</entry><entry>28</entry><entry>52</entry><entry>41</entry><entry>1</entry><entry>58</entry><entry>18</entry><entry>30</entry><entry>54</entry><entry>13</entry><entry>37</entry><entry>56</entry><entry>16</entry><entry>43</entry><entry>3</entry><entry>17</entry><entry>57</entry><entry>2</entry><entry>42</entry><entry>55</entry><entry>31</entry><entry>36</entry><entry>12</entry><entry>60</entry><entry>20</entry><entry>47</entry><entry>7</entry><entry>26</entry><entry>50</entry><entry>9</entry><entry>33</entry><entry>51</entry><entry>27</entry><entry>32</entry><entry>8</entry><entry>21</entry><entry>61</entry><entry>6</entry><entry>46</entry><entry>34</entry><entry>10</entry><entry>49</entry><entry>25</entry><entry>4</entry><entry>44</entry><entry>23</entry><entry>63</entry><entry>45</entry><entry>5</entry><entry>62</entry><entry>22</entry><entry>11</entry><entry>35</entry><entry>24</entry><entry>48</entry>
      </row>
      <row>
        <entry>0</entry><entry>41</entry><entry>17</entry><entry>56</entry><entry>34</entry><entry>11</entry><entry>51</entry><entry>26</entry><entry>7</entry><entry>46</entry><entry>22</entry><entry>63</entry><entry>37</entry><entry>12</entry><entry>52</entry><entry>29</entry><entry>14</entry><entry>39</entry><entry>31</entry><entry>54</entry><entry>44</entry><entry>5</entry><entry>61</entry><entry>20</entry><entry>9</entry><entry>32</entry><entry>24</entry><entry>49</entry><entry>43</entry><entry>2</entry><entry>58</entry><entry>19</entry><entry>28</entry><entry>53</entry><entry>13</entry><entry>36</entry><entry>62</entry><entry>23</entry><entry>47</entry><entry>6</entry><entry>27</entry><entry>50</entry><entry>10</entry><entry>35</entry><entry>57</entry><entry>16</entry><entry>40</entry><entry>1</entry><entry>18</entry><entry>59</entry><entry>3</entry><entry>42</entry><entry>48</entry><entry>25</entry><entry>33</entry><entry>8</entry><entry>21</entry><entry>60</entry><entry>4</entry><entry>45</entry><entry>55</entry><entry>30</entry><entry>38</entry><entry>15</entry>
      </row>
      <row>
        <entry>0</entry><entry>42</entry><entry>23</entry><entry>61</entry><entry>46</entry><entry>4</entry><entry>57</entry><entry>19</entry><entry>31</entry><entry>53</entry><entry>8</entry><entry>34</entry><entry>49</entry><entry>27</entry><entry>38</entry><entry>12</entry><entry>62</entry><entry>20</entry><entry>41</entry><entry>3</entry><entry>16</entry><entry>58</entry><entry>7</entry><entry>45</entry><entry>33</entry><entry>11</entry><entry>54</entry><entry>28</entry><entry>15</entry><entry>37</entry><entry>24</entry><entry>50</entry><entry>63</entry><entry>21</entry><entry>40</entry><entry>2</entry><entry>17</entry><entry>59</entry><entry>6</entry><entry>44</entry><entry>32</entry><entry>10</entry><entry>55</entry><entry>29</entry><entry>14</entry><entry>36</entry><entry>25</entry><entry>51</entry><entry>1</entry><entry>43</entry><entry>22</entry><entry>60</entry><entry>47</entry><entry>5</entry><entry>56</entry><entry>18</entry><entry>30</entry><entry>52</entry><entry>9</entry><entry>35</entry><entry>48</entry><entry>26</entry><entry>39</entry><entry>13</entry>
      </row>
      <row>
        <entry>0</entry><entry>43</entry><entry>21</entry><entry>62</entry><entry>42</entry><entry>1</entry><entry>63</entry><entry>20</entry><entry>23</entry><entry>60</entry><entry>2</entry><entry>41</entry><entry>61</entry><entry>22</entry><entry>40</entry><entry>3</entry><entry>46</entry><entry>5</entry><entry>59</entry><entry>16</entry><entry>4</entry><entry>47</entry><entry>17</entry><entry>58</entry><entry>57</entry><entry>18</entry><entry>44</entry><entry>7</entry><entry>19</entry><entry>56</entry><entry>6</entry><entry>45</entry><entry>31</entry><entry>52</entry><entry>10</entry><entry>33</entry><entry>53</entry><entry>30</entry><entry>32</entry><entry>11</entry><entry>8</entry><entry>35</entry><entry>29</entry><entry>54</entry><entry>34</entry><entry>9</entry><entry>55</entry><entry>28</entry><entry>49</entry><entry>26</entry><entry>36</entry><entry>15</entry><entry>27</entry><entry>48</entry><entry>14</entry><entry>37</entry><entry>38</entry><entry>13</entry><entry>51</entry><entry>24</entry><entry>12</entry><entry>39</entry><entry>25</entry><entry>50</entry>
      </row>
      <row>
        <entry>0</entry><entry>44</entry><entry>27</entry><entry>55</entry><entry>54</entry><entry>26</entry><entry>45</entry><entry>1</entry><entry>47</entry><entry>3</entry><entry>52</entry><entry>24</entry><entry>25</entry><entry>53</entry><entry>2</entry><entry>46</entry><entry>29</entry><entry>49</entry><entry>6</entry><entry>42</entry><entry>43</entry><entry>7</entry><entry>48</entry><entry>28</entry><entry>50</entry><entry>30</entry><entry>41</entry><entry>5</entry><entry>4</entry><entry>40</entry><entry>31</entry><entry>51</entry><entry>58</entry><entry>22</entry><entry>33</entry><entry>13</entry><entry>12</entry><entry>32</entry><entry>23</entry><entry>59</entry><entry>21</entry><entry>57</entry><entry>14</entry><entry>34</entry><entry>35</entry><entry>15</entry><entry>56</entry><entry>20</entry><entry>39</entry><entry>11</entry><entry>60</entry><entry>16</entry><entry>17</entry><entry>61</entry><entry>10</entry><entry>38</entry><entry>8</entry><entry>36</entry><entry>19</entry><entry>63</entry><entry>62</entry><entry>18</entry><entry>37</entry><entry>9</entry>
      </row>
      <row>
        <entry>0</entry><entry>45</entry><entry>25</entry><entry>52</entry><entry>50</entry><entry>31</entry><entry>43</entry><entry>6</entry><entry>39</entry><entry>10</entry><entry>62</entry><entry>19</entry><entry>21</entry><entry>56</entry><entry>12</entry><entry>33</entry><entry>13</entry><entry>32</entry><entry>20</entry><entry>57</entry><entry>63</entry><entry>18</entry><entry>38</entry><entry>11</entry><entry>42</entry><entry>7</entry><entry>51</entry><entry>30</entry><entry>24</entry><entry>53</entry><entry>1</entry><entry>44</entry><entry>26</entry><entry>55</entry><entry>3</entry><entry>46</entry><entry>40</entry><entry>5</entry><entry>49</entry><entry>28</entry><entry>61</entry><entry>16</entry><entry>36</entry><entry>9</entry><entry>15</entry><entry>34</entry><entry>22</entry><entry>59</entry><entry>23</entry><entry>58</entry><entry>14</entry><entry>35</entry><entry>37</entry><entry>8</entry><entry>60</entry><entry>17</entry><entry>48</entry><entry>29</entry><entry>41</entry><entry>4</entry><entry>2</entry><entry>47</entry><entry>27</entry><entry>54</entry>
      </row>
      <row>
        <entry>0</entry><entry>46</entry><entry>31</entry><entry>49</entry><entry>62</entry><entry>16</entry><entry>33</entry><entry>15</entry><entry>63</entry><entry>17</entry><entry>32</entry><entry>14</entry><entry>1</entry><entry>47</entry><entry>30</entry><entry>48</entry><entry>61</entry><entry>19</entry><entry>34</entry><entry>12</entry><entry>3</entry><entry>45</entry><entry>28</entry><entry>50</entry><entry>2</entry><entry>44</entry><entry>29</entry><entry>51</entry><entry>60</entry><entry>18</entry><entry>35</entry><entry>13</entry><entry>57</entry><entry>23</entry><entry>38</entry><entry>8</entry><entry>7</entry><entry>41</entry><entry>24</entry><entry>54</entry><entry>6</entry><entry>40</entry><entry>25</entry><entry>55</entry><entry>56</entry><entry>22</entry><entry>39</entry><entry>9</entry><entry>4</entry><entry>42</entry><entry>27</entry><entry>53</entry><entry>58</entry><entry>20</entry><entry>37</entry><entry>11</entry><entry>59</entry><entry>21</entry><entry>36</entry><entry>10</entry><entry>5</entry><entry>43</entry><entry>26</entry><entry>52</entry>
      </row>
      <row>
        <entry>0</entry><entry>47</entry><entry>29</entry><entry>50</entry><entry>58</entry><entry>21</entry><entry>39</entry><entry>8</entry><entry>55</entry><entry>24</entry><entry>42</entry><entry>5</entry><entry>13</entry><entry>34</entry><entry>16</entry><entry>63</entry><entry>45</entry><entry>2</entry><entry>48</entry><entry>31</entry><entry>23</entry><entry>56</entry><entry>10</entry><entry>37</entry><entry>26</entry><entry>53</entry><entry>7</entry><entry>40</entry><entry>32</entry><entry>15</entry><entry>61</entry><entry>18</entry><entry>25</entry><entry>54</entry><entry>4</entry><entry>43</entry><entry>35</entry><entry>12</entry><entry>62</entry><entry>17</entry><entry>46</entry><entry>1</entry><entry>51</entry><entry>28</entry><entry>20</entry><entry>59</entry><entry>9</entry><entry>38</entry><entry>52</entry><entry>27</entry><entry>41</entry><entry>6</entry><entry>14</entry><entry>33</entry><entry>19</entry><entry>60</entry><entry>3</entry><entry>44</entry><entry>30</entry><entry>49</entry><entry>57</entry><entry>22</entry><entry>36</entry><entry>11</entry>
      </row>
      <row>
        <entry>0</entry><entry>48</entry><entry>35</entry><entry>19</entry><entry>5</entry><entry>53</entry><entry>38</entry><entry>22</entry><entry>10</entry><entry>58</entry><entry>41</entry><entry>25</entry><entry>15</entry><entry>63</entry><entry>44</entry><entry>28</entry><entry>20</entry><entry>36</entry><entry>55</entry><entry>7</entry><entry>17</entry><entry>33</entry><entry>50</entry><entry>2</entry><entry>30</entry><entry>46</entry><entry>61</entry><entry>13</entry><entry>27</entry><entry>43</entry><entry>56</entry><entry>8</entry><entry>40</entry><entry>24</entry><entry>11</entry><entry>59</entry><entry>45</entry><entry>29</entry><entry>14</entry><entry>62</entry><entry>34</entry><entry>18</entry><entry>1</entry><entry>49</entry><entry>39</entry><entry>23</entry><entry>4</entry><entry>52</entry><entry>60</entry><entry>12</entry><entry>31</entry><entry>47</entry><entry>57</entry><entry>9</entry><entry>26</entry><entry>42</entry><entry>54</entry><entry>6</entry><entry>21</entry><entry>37</entry><entry>51</entry><entry>3</entry><entry>16</entry><entry>32</entry>
      </row>
      <row>
        <entry>0</entry><entry>49</entry><entry>33</entry><entry>16</entry><entry>1</entry><entry>48</entry><entry>32</entry><entry>17</entry><entry>2</entry><entry>51</entry><entry>35</entry><entry>18</entry><entry>3</entry><entry>50</entry><entry>34</entry><entry>19</entry><entry>4</entry><entry>53</entry><entry>37</entry><entry>20</entry><entry>5</entry><entry>52</entry><entry>36</entry><entry>21</entry><entry>6</entry><entry>55</entry><entry>39</entry><entry>22</entry><entry>7</entry><entry>54</entry><entry>38</entry><entry>23</entry><entry>8</entry><entry>57</entry><entry>41</entry><entry>24</entry><entry>9</entry><entry>56</entry><entry>40</entry><entry>25</entry><entry>10</entry><entry>59</entry><entry>43</entry><entry>26</entry><entry>11</entry><entry>58</entry><entry>42</entry><entry>27</entry><entry>12</entry><entry>61</entry><entry>45</entry><entry>28</entry><entry>13</entry><entry>60</entry><entry>44</entry><entry>29</entry><entry>14</entry><entry>63</entry><entry>47</entry><entry>30</entry><entry>15</entry><entry>62</entry><entry>46</entry><entry>31</entry>
      </row>
      <row>
        <entry>0</entry><entry>50</entry><entry>39</entry><entry>21</entry><entry>13</entry><entry>63</entry><entry>42</entry><entry>24</entry><entry>26</entry><entry>40</entry><entry>61</entry><entry>15</entry><entry>23</entry><entry>37</entry><entry>48</entry><entry>2</entry><entry>52</entry><entry>6</entry><entry>19</entry><entry>33</entry><entry>57</entry><entry>11</entry><entry>30</entry><entry>44</entry><entry>46</entry><entry>28</entry><entry>9</entry><entry>59</entry><entry>35</entry><entry>17</entry><entry>4</entry><entry>54</entry><entry>43</entry><entry>25</entry><entry>12</entry><entry>62</entry><entry>38</entry><entry>20</entry><entry>1</entry><entry>51</entry><entry>49</entry><entry>3</entry><entry>22</entry><entry>36</entry><entry>60</entry><entry>14</entry><entry>27</entry><entry>41</entry><entry>31</entry><entry>45</entry><entry>56</entry><entry>10</entry><entry>18</entry><entry>32</entry><entry>53</entry><entry>7</entry><entry>5</entry><entry>55</entry><entry>34</entry><entry>16</entry><entry>8</entry><entry>58</entry><entry>47</entry><entry>29</entry>
      </row>
      <row>
        <entry>0</entry><entry>51</entry><entry>37</entry><entry>22</entry><entry>9</entry><entry>58</entry><entry>44</entry><entry>31</entry><entry>18</entry><entry>33</entry><entry>55</entry><entry>4</entry><entry>27</entry><entry>40</entry><entry>62</entry><entry>13</entry><entry>36</entry><entry>23</entry><entry>1</entry><entry>50</entry><entry>45</entry><entry>30</entry><entry>8</entry><entry>59</entry><entry>54</entry><entry>5</entry><entry>19</entry><entry>32</entry><entry>63</entry><entry>12</entry><entry>26</entry><entry>41</entry><entry>11</entry><entry>56</entry><entry>46</entry><entry>29</entry><entry>2</entry><entry>49</entry><entry>39</entry><entry>20</entry><entry>25</entry><entry>42</entry><entry>60</entry><entry>15</entry><entry>16</entry><entry>35</entry><entry>53</entry><entry>6</entry><entry>47</entry><entry>28</entry><entry>10</entry><entry>57</entry><entry>38</entry><entry>21</entry><entry>3</entry><entry>48</entry><entry>61</entry><entry>14</entry><entry>24</entry><entry>43</entry><entry>52</entry><entry>7</entry><entry>17</entry><entry>34</entry>
      </row>
      <row>
        <entry>0</entry><entry>52</entry><entry>43</entry><entry>31</entry><entry>21</entry><entry>33</entry><entry>62</entry><entry>10</entry><entry>42</entry><entry>30</entry><entry>1</entry><entry>53</entry><entry>63</entry><entry>11</entry><entry>20</entry><entry>32</entry><entry>23</entry><entry>35</entry><entry>60</entry><entry>8</entry><entry>2</entry><entry>54</entry><entry>41</entry><entry>29</entry><entry>61</entry><entry>9</entry><entry>22</entry><entry>34</entry><entry>40</entry><entry>28</entry><entry>3</entry><entry>55</entry><entry>46</entry><entry>26</entry><entry>5</entry><entry>49</entry><entry>59</entry><entry>15</entry><entry>16</entry><entry>36</entry><entry>4</entry><entry>48</entry><entry>47</entry><entry>27</entry><entry>17</entry><entry>37</entry><entry>58</entry><entry>14</entry><entry>57</entry><entry>13</entry><entry>18</entry><entry>38</entry><entry>44</entry><entry>24</entry><entry>7</entry><entry>51</entry><entry>19</entry><entry>39</entry><entry>56</entry><entry>12</entry><entry>6</entry><entry>50</entry><entry>45</entry><entry>25</entry>
      </row>
      <row>
        <entry>0</entry><entry>53</entry><entry>41</entry><entry>28</entry><entry>17</entry><entry>36</entry><entry>56</entry><entry>13</entry><entry>34</entry><entry>23</entry><entry>11</entry><entry>62</entry><entry>51</entry><entry>6</entry><entry>26</entry><entry>47</entry><entry>7</entry><entry>50</entry><entry>46</entry><entry>27</entry><entry>22</entry><entry>35</entry><entry>63</entry><entry>10</entry><entry>37</entry><entry>16</entry><entry>12</entry><entry>57</entry><entry>52</entry><entry>1</entry><entry>29</entry><entry>40</entry><entry>14</entry><entry>59</entry><entry>39</entry><entry>18</entry><entry>31</entry><entry>42</entry><entry>54</entry><entry>3</entry><entry>44</entry><entry>25</entry><entry>5</entry><entry>48</entry><entry>61</entry><entry>8</entry><entry>20</entry><entry>33</entry><entry>9</entry><entry>60</entry><entry>32</entry><entry>21</entry><entry>24</entry><entry>45</entry><entry>49</entry><entry>4</entry><entry>43</entry><entry>30</entry><entry>2</entry><entry>55</entry><entry>58</entry><entry>15</entry><entry>19</entry><entry>38</entry>
      </row>
      <row>
        <entry>0</entry><entry>54</entry><entry>47</entry><entry>25</entry><entry>29</entry><entry>43</entry><entry>50</entry><entry>4</entry><entry>58</entry><entry>12</entry><entry>21</entry><entry>35</entry><entry>39</entry><entry>17</entry><entry>8</entry><entry>62</entry><entry>55</entry><entry>1</entry><entry>24</entry><entry>46</entry><entry>42</entry><entry>28</entry><entry>5</entry><entry>51</entry><entry>13</entry><entry>59</entry><entry>34</entry><entry>20</entry><entry>16</entry><entry>38</entry><entry>63</entry><entry>9</entry><entry>45</entry><entry>27</entry><entry>2</entry><entry>52</entry><entry>48</entry><entry>6</entry><entry>31</entry><entry>41</entry><entry>23</entry><entry>33</entry><entry>56</entry><entry>14</entry><entry>10</entry><entry>60</entry><entry>37</entry><entry>19</entry><entry>26</entry><entry>44</entry><entry>53</entry><entry>3</entry><entry>7</entry><entry>49</entry><entry>40</entry><entry>30</entry><entry>32</entry><entry>22</entry><entry>15</entry><entry>57</entry><entry>61</entry><entry>11</entry><entry>18</entry><entry>36</entry>
      </row>
      <row>
        <entry>0</entry><entry>55</entry><entry>45</entry><entry>26</entry><entry>25</entry><entry>46</entry><entry>52</entry><entry>3</entry><entry>50</entry><entry>5</entry><entry>31</entry><entry>40</entry><entry>43</entry><entry>28</entry><entry>6</entry><entry>49</entry><entry>39</entry><entry>16</entry><entry>10</entry><entry>61</entry><entry>62</entry><entry>9</entry><entry>19</entry><entry>36</entry><entry>21</entry><entry>34</entry><entry>56</entry><entry>15</entry><entry>12</entry><entry>59</entry><entry>33</entry><entry>22</entry><entry>13</entry><entry>58</entry><entry>32</entry><entry>23</entry><entry>20</entry><entry>35</entry><entry>57</entry><entry>14</entry><entry>63</entry><entry>8</entry><entry>18</entry><entry>37</entry><entry>38</entry><entry>17</entry><entry>11</entry><entry>60</entry><entry>42</entry><entry>29</entry><entry>7</entry><entry>48</entry><entry>51</entry><entry>4</entry><entry>30</entry><entry>41</entry><entry>24</entry><entry>47</entry><entry>53</entry><entry>2</entry><entry>1</entry><entry>54</entry><entry>44</entry><entry>27</entry>
      </row>
      <row>
        <entry>0</entry><entry>56</entry><entry>51</entry><entry>11</entry><entry>37</entry><entry>29</entry><entry>22</entry><entry>46</entry><entry>9</entry><entry>49</entry><entry>58</entry><entry>2</entry><entry>44</entry><entry>20</entry><entry>31</entry><entry>39</entry><entry>18</entry><entry>42</entry><entry>33</entry><entry>25</entry><entry>55</entry><entry>15</entry><entry>4</entry><entry>60</entry><entry>27</entry><entry>35</entry><entry>40</entry><entry>16</entry><entry>62</entry><entry>6</entry><entry>13</entry><entry>53</entry><entry>36</entry><entry>28</entry><entry>23</entry><entry>47</entry><entry>1</entry><entry>57</entry><entry>50</entry><entry>10</entry><entry>45</entry><entry>21</entry><entry>30</entry><entry>38</entry><entry>8</entry><entry>48</entry><entry>59</entry><entry>3</entry><entry>54</entry><entry>14</entry><entry>5</entry><entry>61</entry><entry>19</entry><entry>43</entry><entry>32</entry><entry>24</entry><entry>63</entry><entry>7</entry><entry>12</entry><entry>52</entry><entry>26</entry><entry>34</entry><entry>41</entry><entry>17</entry>
      </row>
      <row>
        <entry>0</entry><entry>57</entry><entry>49</entry><entry>8</entry><entry>33</entry><entry>24</entry><entry>16</entry><entry>41</entry><entry>1</entry><entry>56</entry><entry>48</entry><entry>9</entry><entry>32</entry><entry>25</entry><entry>17</entry><entry>40</entry><entry>2</entry><entry>59</entry><entry>51</entry><entry>10</entry><entry>35</entry><entry>26</entry><entry>18</entry><entry>43</entry><entry>3</entry><entry>58</entry><entry>50</entry><entry>11</entry><entry>34</entry><entry>27</entry><entry>19</entry><entry>42</entry><entry>4</entry><entry>61</entry><entry>53</entry><entry>12</entry><entry>37</entry><entry>28</entry><entry>20</entry><entry>45</entry><entry>5</entry><entry>60</entry><entry>52</entry><entry>13</entry><entry>36</entry><entry>29</entry><entry>21</entry><entry>44</entry><entry>6</entry><entry>63</entry><entry>55</entry><entry>14</entry><entry>39</entry><entry>30</entry><entry>22</entry><entry>47</entry><entry>7</entry><entry>62</entry><entry>54</entry><entry>15</entry><entry>38</entry><entry>31</entry><entry>23</entry><entry>46</entry>
      </row>
      <row>
        <entry>0</entry><entry>58</entry><entry>55</entry><entry>13</entry><entry>45</entry><entry>23</entry><entry>26</entry><entry>32</entry><entry>25</entry><entry>35</entry><entry>46</entry><entry>20</entry><entry>52</entry><entry>14</entry><entry>3</entry><entry>57</entry><entry>50</entry><entry>8</entry><entry>5</entry><entry>63</entry><entry>31</entry><entry>37</entry><entry>40</entry><entry>18</entry><entry>43</entry><entry>17</entry><entry>28</entry><entry>38</entry><entry>6</entry><entry>60</entry><entry>49</entry><entry>11</entry><entry>39</entry><entry>29</entry><entry>16</entry><entry>42</entry><entry>10</entry><entry>48</entry><entry>61</entry><entry>7</entry><entry>62</entry><entry>4</entry><entry>9</entry><entry>51</entry><entry>19</entry><entry>41</entry><entry>36</entry><entry>30</entry><entry>21</entry><entry>47</entry><entry>34</entry><entry>24</entry><entry>56</entry><entry>2</entry><entry>15</entry><entry>53</entry><entry>12</entry><entry>54</entry><entry>59</entry><entry>1</entry><entry>33</entry><entry>27</entry><entry>22</entry><entry>44</entry>
      </row>
      <row>
        <entry>0</entry><entry>59</entry><entry>53</entry><entry>14</entry><entry>41</entry><entry>18</entry><entry>28</entry><entry>39</entry><entry>17</entry><entry>42</entry><entry>36</entry><entry>31</entry><entry>56</entry><entry>3</entry><entry>13</entry><entry>54</entry><entry>34</entry><entry>25</entry><entry>23</entry><entry>44</entry><entry>11</entry><entry>48</entry><entry>62</entry><entry>5</entry><entry>51</entry><entry>8</entry><entry>6</entry><entry>61</entry><entry>26</entry><entry>33</entry><entry>47</entry><entry>20</entry><entry>7</entry><entry>60</entry><entry>50</entry><entry>9</entry><entry>46</entry><entry>21</entry><entry>27</entry><entry>32</entry><entry>22</entry><entry>45</entry><entry>35</entry><entry>24</entry><entry>63</entry><entry>4</entry><entry>10</entry><entry>49</entry><entry>37</entry><entry>30</entry><entry>16</entry><entry>43</entry><entry>12</entry><entry>55</entry><entry>57</entry><entry>2</entry><entry>52</entry><entry>15</entry><entry>1</entry><entry>58</entry><entry>29</entry><entry>38</entry><entry>40</entry><entry>19</entry>
      </row>
      <row>
        <entry>0</entry><entry>60</entry><entry>59</entry><entry>7</entry><entry>53</entry><entry>9</entry><entry>14</entry><entry>50</entry><entry>41</entry><entry>21</entry><entry>18</entry><entry>46</entry><entry>28</entry><entry>32</entry><entry>39</entry><entry>27</entry><entry>17</entry><entry>45</entry><entry>42</entry><entry>22</entry><entry>36</entry><entry>24</entry><entry>31</entry><entry>35</entry><entry>56</entry><entry>4</entry><entry>3</entry><entry>63</entry><entry>13</entry><entry>49</entry><entry>54</entry><entry>10</entry><entry>34</entry><entry>30</entry><entry>25</entry><entry>37</entry><entry>23</entry><entry>43</entry><entry>44</entry><entry>16</entry><entry>11</entry><entry>55</entry><entry>48</entry><entry>12</entry><entry>62</entry><entry>2</entry><entry>5</entry><entry>57</entry><entry>51</entry><entry>15</entry><entry>8</entry><entry>52</entry><entry>6</entry><entry>58</entry><entry>61</entry><entry>1</entry><entry>26</entry><entry>38</entry><entry>33</entry><entry>29</entry><entry>47</entry><entry>19</entry><entry>20</entry><entry>40</entry>
      </row>
      <row>
        <entry>0</entry><entry>61</entry><entry>57</entry><entry>4</entry><entry>49</entry><entry>12</entry><entry>8</entry><entry>53</entry><entry>33</entry><entry>28</entry><entry>24</entry><entry>37</entry><entry>16</entry><entry>45</entry><entry>41</entry><entry>20</entry><entry>1</entry><entry>60</entry><entry>56</entry><entry>5</entry><entry>48</entry><entry>13</entry><entry>9</entry><entry>52</entry><entry>32</entry><entry>29</entry><entry>25</entry><entry>36</entry><entry>17</entry><entry>44</entry><entry>40</entry><entry>21</entry><entry>2</entry><entry>63</entry><entry>59</entry><entry>6</entry><entry>51</entry><entry>14</entry><entry>10</entry><entry>55</entry><entry>35</entry><entry>30</entry><entry>26</entry><entry>39</entry><entry>18</entry><entry>47</entry><entry>43</entry><entry>22</entry><entry>3</entry><entry>62</entry><entry>58</entry><entry>7</entry><entry>50</entry><entry>15</entry><entry>11</entry><entry>54</entry><entry>34</entry><entry>31</entry><entry>27</entry><entry>38</entry><entry>19</entry><entry>46</entry><entry>42</entry><entry>23</entry>
      </row>
      <row>
        <entry>0</entry><entry>62</entry><entry>63</entry><entry>1</entry><entry>61</entry><entry>3</entry><entry>2</entry><entry>60</entry><entry>57</entry><entry>7</entry><entry>6</entry><entry>56</entry><entry>4</entry><entry>58</entry><entry>59</entry><entry>5</entry><entry>49</entry><entry>15</entry><entry>14</entry><entry>48</entry><entry>12</entry><entry>50</entry><entry>51</entry><entry>13</entry><entry>8</entry><entry>54</entry><entry>55</entry><entry>9</entry><entry>53</entry><entry>11</entry><entry>10</entry><entry>52</entry><entry>33</entry><entry>31</entry><entry>30</entry><entry>32</entry><entry>28</entry><entry>34</entry><entry>35</entry><entry>29</entry><entry>24</entry><entry>38</entry><entry>39</entry><entry>25</entry><entry>37</entry><entry>27</entry><entry>26</entry><entry>36</entry><entry>16</entry><entry>46</entry><entry>47</entry><entry>17</entry><entry>45</entry><entry>19</entry><entry>18</entry><entry>44</entry><entry>41</entry><entry>23</entry><entry>22</entry><entry>40</entry><entry>20</entry><entry>42</entry><entry>43</entry><entry>21</entry>
      </row>
      <row>
        <entry>0</entry><entry>63</entry><entry>61</entry><entry>2</entry><entry>57</entry><entry>6</entry><entry>4</entry><entry>59</entry><entry>49</entry><entry>14</entry><entry>12</entry><entry>51</entry><entry>8</entry><entry>55</entry><entry>53</entry><entry>10</entry><entry>33</entry><entry>30</entry><entry>28</entry><entry>35</entry><entry>24</entry><entry>39</entry><entry>37</entry><entry>26</entry><entry>16</entry><entry>47</entry><entry>45</entry><entry>18</entry><entry>41</entry><entry>22</entry><entry>20</entry><entry>43</entry><entry>1</entry><entry>62</entry><entry>60</entry><entry>3</entry><entry>56</entry><entry>7</entry><entry>5</entry><entry>58</entry><entry>48</entry><entry>15</entry><entry>13</entry><entry>50</entry><entry>9</entry><entry>54</entry><entry>52</entry><entry>11</entry><entry>32</entry><entry>31</entry><entry>29</entry><entry>34</entry><entry>25</entry><entry>38</entry><entry>36</entry><entry>27</entry><entry>17</entry><entry>46</entry><entry>44</entry><entry>19</entry><entry>40</entry><entry>23</entry><entry>21</entry><entry>42</entry>
      </row>
	</my:mult>
	
</xsl:stylesheet>
