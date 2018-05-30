<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" version="1.1" exclude-result-prefixes="fo">
    <xsl:output method="xml" version="1.0" omit-xml-declaration="no" indent="yes" />
    <xsl:template match="my_var_main">
        <fo:root xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml" font-family="Calibri">
            <fo:layout-master-set xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint">
                <fo:simple-page-master master-name="section1-first-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="35.4pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
                    <fo:region-body margin-top="35.4pt" margin-bottom="35.45pt" />
                    <fo:region-before region-name="first-page-header" extent="11in" />
                    <fo:region-after region-name="first-page-footer" extent="11in" display-align="after" />
                </fo:simple-page-master>
                <fo:simple-page-master master-name="section1-odd-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="35.4pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
                    <fo:region-body margin-top="60pt" margin-bottom="35.45pt" />
                    <fo:region-before region-name="odd-page-header" extent="11in" />
                    <fo:region-after region-name="odd-page-footer" extent="11in" display-align="after" />
                </fo:simple-page-master>
                <fo:simple-page-master master-name="section1-even-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="35.4pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
                    <fo:region-body margin-top="60pt" margin-bottom="35.45pt" />
                    <fo:region-before region-name="even-page-header" extent="11in" />
                    <fo:region-after region-name="even-page-footer" extent="11in" display-align="after" />
                </fo:simple-page-master>
                <fo:page-sequence-master master-name="section1-page-sequence-master">
                    <fo:repeatable-page-master-alternatives>
                        <fo:conditional-page-master-reference odd-or-even="odd" master-reference="section1-odd-page" />
                        <fo:conditional-page-master-reference odd-or-even="even" master-reference="section1-even-page" />
                    </fo:repeatable-page-master-alternatives>
                </fo:page-sequence-master>
            </fo:layout-master-set>
            <fo:page-sequence xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" master-reference="section1-page-sequence-master" format="1">
                <fo:static-content flow-name="first-page-header">
                    <fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="first-page-footer">
                    <fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="odd-page-header">
                    <fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="odd-page-footer">
                    <fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="even-page-header">
                    <fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="even-page-footer">
                    <fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="xsl-footnote-separator">
                    <fo:block>
                        <fo:leader leader-pattern="rule" leader-length="144pt" rule-thickness="0.5pt" rule-style="solid" color="gray" />
                    </fo:block>
                </fo:static-content>
                <fo:flow flow-name="xsl-region-body">
                    <fo:block widows="2" orphans="2" font-size="10pt" line-height="1.147" white-space-collapse="false">
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="first-page-header" />
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="first-page-footer" />
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="even-page-header" />
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="odd-page-header">
                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="26pt" language="FR">
                                <fo:inline>
                                    <fo:external-graphic content-width="57.75pt" content-height="44.25pt" src="url(https://live.runmyprocess.com/pub/661134565/upload/c13233e0-74ba-11e5-8edc-22000b8b31dc/images.jpg)" />
                                </fo:inline>
                                <fo:inline>
                                    <fo:leader leader-pattern="space" leader-length="NaNpt" />
                                    <fo:leader leader-length="0pt" />
                                    Purchase order
                                </fo:inline>
                            </fo:block>
                        </fo:marker>
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="odd-page-footer">
                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                                <fo:inline />
                                <fo:inline color="#4F81BD">
                                    <fo:leader leader-length="0pt" />
                                </fo:inline>
                                <fo:inline font-family="Cambria" color="#4F81BD" font-size="10pt">
                                    <fo:leader leader-length="0pt" />
                                    p.
                                </fo:inline>
                                <fo:inline font-family="Cambria" color="#4F81BD" font-size="10pt">
                                    <fo:leader leader-length="0pt" />
                                    <fo:page-number />
                                </fo:inline>
                            </fo:block>
                        </fo:marker>
                        <fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="even-page-footer" />
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:leader />
                        </fo:block>
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:inline>
                                <fo:leader leader-length="0pt" />
                                Client name:
                                <xsl:value-of select="client_name" />
                            </fo:inline>
                        </fo:block>
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:inline>
                                <fo:leader leader-length="0pt" />
                                Client location:
                                <xsl:value-of select="client_location" />
                            </fo:inline>
                        </fo:block>
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:leader />
                        </fo:block>
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:inline>
                                <fo:leader leader-length="0pt" />
                                Users list
                            </fo:inline>
                        </fo:block>
                        <fo:table xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Calibri" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
                            <fo:table-column column-number="1" column-width="230.3pt" />
                            <fo:table-column column-number="2" column-width="230.3pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.5pt" background-color="white">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR">
                                            <fo:inline>
                                                <fo:leader leader-length="0pt" />
                                                Name
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.5pt" background-color="white">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR">
                                            <fo:inline>
                                                <fo:leader leader-length="0pt" />
                                                Age
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:apply-templates select="users_array" />
                            </fo:table-body>
                        </fo:table>
                        <fo:block xmlns:st1="urn:schemas-microsoft-com:office:smarttags" space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR">
                            <fo:leader />
                        </fo:block>
                    </fo:block>
                    <fo:block id="IDACAZEC" />
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
    <!-- ============== -->
    <!-- CHILD TEMPLATE -->
    <!-- ============== -->
    <xsl:template match="users_array">
        <fo:table-row>
            <fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
                <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR">
                    <fo:inline>
                        <fo:leader leader-length="0pt" />
                        <xsl:value-of select="name" />
                    </fo:inline>
                </fo:block>
            </fo:table-cell>
            <fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
                <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR">
                    <fo:inline>
                        <fo:leader leader-length="0pt" />
                        <xsl:value-of select="age" />
                    </fo:inline>
                </fo:block>
            </fo:table-cell>
        </fo:table-row>
    </xsl:template>
</xsl:stylesheet>