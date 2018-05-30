<?xml version="1.0" encoding="UTF-8"?>
<!-- ========================================================= -->
<!--                                                           -->
<!-- (c) 2006-2007, RenderX                                    -->
<!-- ========================================================= -->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <!-- Utility templates -->
    
    <!-- ========================================================= -->
    <!-- Convert any lengths to the basic units.                   -->
    
    <xsl:template name="convert-to-basic-units">
        <xsl:param name="length"/>
        
        <xsl:variable name="length-numeric-value" select="translate ($length, 'ptxcinme ', '')"/>
        <xsl:variable name="length-unit" select="translate ($length, '-0123456789. ', '')"/>
        
        <xsl:variable name="length-scale-factor">
            <xsl:choose>
                <xsl:when test="$length-numeric-value = 0">0</xsl:when>
                <xsl:otherwise>
                    <xsl:call-template name="get-unit-scaling-factor">
                        <xsl:with-param name="unit" select="$length-unit"/>
                    </xsl:call-template>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:value-of select="round($length-numeric-value * $length-scale-factor)"/>
    </xsl:template>
    
    
    <!-- ========================================================= -->
    <!-- This template expresses all length units in 1/360s of mm. -->
    <!-- This is the largest unit in which both 1pt and 1 mm get   -->
    <!-- integer values. Also spellchecks length units.            -->
    
    <xsl:template name="get-unit-scaling-factor">
        <xsl:param name="unit"/>
        
        <xsl:choose>
            <xsl:when test="$unit = 'cm'">3600</xsl:when>
            <xsl:when test="$unit = 'mm'">360</xsl:when>
            <xsl:when test="$unit = 'in'">9144</xsl:when>
            <xsl:when test="$unit = 'pt'">127</xsl:when>
            <xsl:when test="$unit = 'pc'">1524</xsl:when>
            <xsl:when test="$unit = 'em'">
                <xsl:text>1524</xsl:text> <!-- defaulting to 12pt -->
                <xsl:message>
                    [BARCODE GENERATOR] Units of 'em' should not be mixed with other units;
                    assuming 1 em = 1 pica.
                </xsl:message>
            </xsl:when>
            <xsl:when test="$unit = 'ex'">
                <xsl:text>700</xsl:text>  <!-- defaulting to 12pt x 0.46 -->
                <xsl:message>
                    [BARCODE GENERATOR] Units of 'ex' should not be mixed with other units;
                    assuming 1 ex = 0.46 pica.
                </xsl:message>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>360</xsl:text>  <!-- defaulting to 1mm -->
                <xsl:message>
                    [BARCODE GENERATOR] Unknown unit '<xsl:value-of select="$unit"/>' should not be mixed with other units;
                    assuming 1 <xsl:value-of select="$unit"/> = 1 mm.
                </xsl:message>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    
</xsl:stylesheet>
