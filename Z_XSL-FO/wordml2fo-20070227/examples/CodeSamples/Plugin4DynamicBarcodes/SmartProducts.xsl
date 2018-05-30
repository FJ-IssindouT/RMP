<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:fo="http://www.w3.org/1999/XSL/Format"
    xmlns:doc="http://www.pdfpower.com/docschema/documentation.xsd"
    xmlns:pdc="ProductTag"
    xmlns:stk="StorageData"
    version="1.0" exclude-result-prefixes="doc">
    
    <xsl:template match="pdc:product" mode="barcode">
        <xsl:variable name="part-1st">
            <xsl:choose>
                <xsl:when test="string(pdc:value) != ''">
                    <xsl:value-of select="pdc:value"/>                    
                </xsl:when>
                <xsl:otherwise>
                    <xsl:apply-templates select="pdc:value">
                        <xsl:with-param name="item-id" select="@item-id"/>
                    </xsl:apply-templates>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:variable name="part-2nd">
            <xsl:choose>
                <xsl:when test="string(pdc:serial) != ''">
                    <xsl:value-of select="pdc:serial"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:apply-templates select="pdc:serial">
                        <xsl:with-param name="item-id" select="@item-id"/>
                    </xsl:apply-templates>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:copy-of select="$part-1st"/>
        <xsl:text> </xsl:text>
        <xsl:copy-of select="$part-2nd"/>
    </xsl:template>
    
    <xsl:template match="pdc:product">
        <xsl:apply-templates select="child::node()">
            <xsl:with-param name="item-id" select="@item-id"/>
        </xsl:apply-templates>
    </xsl:template>
    
    <xsl:template match="pdc:value">
        <xsl:param name="item-id"/>
        
        <xsl:variable name="product-id" select="/descendant-or-self::stk:item[@item-id=$item-id]/@product-id"/>
        <xsl:value-of select="/descendant-or-self::stk:product-info[@id = $product-id]/descendant-or-self::stk:item-cost"/>
    </xsl:template>
    
    <xsl:template match="pdc:serial">
        <xsl:param name="item-id"/>
        
        <xsl:value-of select="/descendant-or-self::stk:item[@item-id=$item-id]/@serial"/>
    </xsl:template>
</xsl:stylesheet>