<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:fo="http://www.w3.org/1999/XSL/Format"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:doc="http://www.pdfpower.com/docschema/documentation.xsd"
    xmlns:bar="SmartBarcode"
    version="1.0" exclude-result-prefixes="doc">
    <xsl:include href="Plugins/Barcodes/BarcodeUtility.xsl"/>
    <xsl:include href="Plugins/Barcodes/upc-ean.xsl"/>
    <xsl:include href="Plugins/Barcodes/upc-ean-svg.xsl"/>
    <xsl:include href="Plugins/Barcodes/3of9.xsl"/>
    <xsl:include href="Plugins/Barcodes/3of9-svg.xsl"/>
    <xsl:include href="Plugins/Barcodes/2of5i.xsl"/>
    <xsl:include href="Plugins/Barcodes/2of5i-svg.xsl"/>
    <xsl:include href="Plugins/Barcodes/codabar.xsl"/>
    <xsl:include href="Plugins/Barcodes/codabar-svg.xsl"/>
    <xsl:include href="Plugins/Barcodes/code128.xsl"/>
    <xsl:include href="Plugins/Barcodes/code128-svg.xsl"/>
    <xsl:include href="Plugins/Barcodes/4state-au.xsl"/>
    <xsl:include href="Plugins/Barcodes/4state-au-svg.xsl"/>
    <!-- Uncomment next line to render Dynamic Barcode sample MixedTags.xml -->
    <!-- xsl:include href="../examples/CodeSamples/Plugin4DynamicBarcodes/SmartProducts.xsl"/ -->

    <xsl:output method="xml" version="1.0" indent="no" encoding="utf-8"/>

    <doc:param name="draw-border">Conditional rendering of barcode border, by default - 0 (no border)</doc:param>
    <xsl:param name="draw-border" select="0"/>

    <!-- ============================================================= -->
    <doc:styleinfo public="yes" id="plugin">
        <title>Wrapper to plug-in user stylesheets</title>
        <filename>SmartTags.xsl</filename>
        <dateCreated>2001-01-26</dateCreated>
        <version major="1" minor="1" release="0" revision="$Revision: 12 $"/>
        <summary>
            Wrapper for implementing user stylesheet for processing <i>smart tags </i> of Word document.
        </summary>
        <specifics>
            IMPLEMENTATION SPECIFICS
            Main problem is aliases for imported XSD Schemas
        </specifics>
        <seealso>
            <link refid="main">Main stylesheet</link>
            <link refid="properties">Element properties</link>
        </seealso>
        <lastModified author="$Author: Andrewg $" time="$Modtime: 30.06.06 16:13 $"/>
    </doc:styleinfo>


    <doc:pattern match="barcode">
        <summary>This is template for generating barcodes from smart-tags inserted into WordML file
        </summary>
        <caution>
            You should implement templates (with mode=&quot;barcode&quot;) for your own smart-tags,
            that could be inserted into barcode smart-tag.
        </caution>
    </doc:pattern>
    <xsl:template match="bar:barcode">
        <xsl:variable name="code-value">
            <xsl:apply-templates select="child::node()" mode="barcode"/>
        </xsl:variable>
        <xsl:choose>
            <xsl:when test="string($code-value) = ''">
                <xsl:message>
                    [BARCODE GENERATOR] Unknown element inside barcode tag or barcode value is not specified
                </xsl:message>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="process-barcode">
                    <xsl:with-param name="code-value" select="$code-value"/>
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <doc:pattern name="process-barcode">
        <summary>This is template for preparing parameters to render barcodes.
        </summary>
        <caution>
            There is completely different set of parameters for 4state Australi Post.
            If no @DPID specified in smart-tag, $code-value will be taken as Delivery Point ID.
        </caution>
    </doc:pattern>
    <xsl:template name="process-barcode">
        <xsl:param name="code-value"/>
        <fo:block>
            <fo:instream-foreign-object content-width="100%" content-height="100%" >
                <xsl:if test="$draw-border=1">
                    <xsl:attribute name="border">solid 0.1pt black</xsl:attribute>
                </xsl:if>
                <xsl:choose>
                    <xsl:when test="@type='Interleaved2of5'">
                        <xsl:call-template name="barcode-2of5i">
                            <xsl:with-param name="value" select="string($code-value)"/>
                            <xsl:with-param name="module">
                                <xsl:choose>
                                    <xsl:when test="@module">
                                        <xsl:value-of select="@module"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.012in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="wide-to-narrow">
                                <xsl:choose>
                                    <xsl:when test="@wide-to-narrow">
                                        <xsl:value-of select="@wide-to-narrow"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="3.0"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="height">
                                <xsl:choose>
                                    <xsl:when test="@height">
                                        <xsl:value-of select="@height"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.25in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:when test="@type='Code39'">
                        <xsl:call-template name="barcode-3of9">
                            <xsl:with-param name="value" select="string($code-value)"/>
                            <xsl:with-param name="module">
                                <xsl:choose>
                                    <xsl:when test="@module">
                                        <xsl:value-of select="@module"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.012in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="wide-to-narrow">
                                <xsl:choose>
                                    <xsl:when test="@wide-to-narrow">
                                        <xsl:value-of select="@wide-to-narrow"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="3.0"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="height">
                                <xsl:choose>
                                    <xsl:when test="@height">
                                        <xsl:value-of select="@height"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.5in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:when test="@type='Codabar'">
                        <xsl:call-template name="barcode-codabar">
                            <xsl:with-param name="value" select="string($code-value)"/>
                            <xsl:with-param name="start" >
                                <xsl:choose>
                                    <xsl:when test="@start">
                                        <xsl:value-of select="@start"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'A'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="stop" >
                                <xsl:choose>
                                    <xsl:when test="@stop">
                                        <xsl:value-of select="@stop"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'B'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="module">
                                <xsl:choose>
                                    <xsl:when test="@module">
                                        <xsl:value-of select="@module"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.0075in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="wide-to-narrow">
                                <xsl:choose>
                                    <xsl:when test="@wide-to-narrow">
                                        <xsl:value-of select="@wide-to-narrow"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="3.0"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="height">
                                <xsl:choose>
                                    <xsl:when test="@height">
                                        <xsl:value-of select="@height"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.25in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:when test="@type='Code128'">
                        <xsl:call-template name="barcode-code128">
                            <xsl:with-param name="value" select="string($code-value)"/>
                            <xsl:with-param name="subset" >
                                <xsl:choose>
                                    <xsl:when test="@subset">
                                        <xsl:value-of select="@subset"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'A'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="makeUCC" >
                                <xsl:choose>
                                    <xsl:when test="@makeUCC">
                                        <xsl:value-of select="@makeUCC"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'false'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="module">
                                <xsl:choose>
                                    <xsl:when test="@module">
                                        <xsl:value-of select="@module"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.0075in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="height">
                                <xsl:choose>
                                    <xsl:when test="@height">
                                        <xsl:value-of select="@height"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.25in'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:when test="@type='4stateAU'">
                        <xsl:call-template name="barcode-4state-au">
                            <xsl:with-param name="FCC">
                                <xsl:choose>
                                    <xsl:when test="@FCC">
                                        <xsl:value-of select="@FCC"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="11"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="DPID">
                                <xsl:choose>
                                    <xsl:when test="@DPID">
                                        <xsl:value-of select="@DPID"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="string($code-value)"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="CI">
                                <xsl:choose>
                                    <xsl:when test="@CI">
                                        <xsl:value-of select="@CI"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="''"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="CIencoding" >
                                <xsl:choose>
                                    <xsl:when test="@CIencoding">
                                        <xsl:value-of select="@CIencoding"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'C'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:call-template name="barcode-EAN">
                            <xsl:with-param name="code-type">
                                <xsl:choose>
                                    <xsl:when test="@type">
                                        <xsl:value-of select="string(translate(@type, ' ', '-'))"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'auto'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="value" select="string($code-value)"/>
                            <xsl:with-param name="module">
                                <xsl:choose>
                                    <xsl:when test="@module">
                                        <xsl:value-of select="@module"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'0.33mm'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="height">
                                <xsl:choose>
                                    <xsl:when test="@height">
                                        <xsl:value-of select="@height"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'auto'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:otherwise>
                </xsl:choose>
            </fo:instream-foreign-object>
        </fo:block>
    </xsl:template>

</xsl:stylesheet>
