<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" exclude-result-prefixes="fo">
    <xsl:output method="xml" version="1.0" omit-xml-declaration="no" indent="yes"/>
    <xsl:template match="my_var_main">
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml" font-family="Arial">
<fo:layout-master-set xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
<fo:simple-page-master master-name="section1-first-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="10pt" margin-bottom="20pt" margin-right="20pt" margin-left="20pt">
<fo:region-body margin-top="15pt" margin-bottom="25pt"/>
<fo:region-before region-name="first-page-header" extent="11in"/>
<fo:region-after region-name="first-page-footer" extent="11in" display-align="after"/>
</fo:simple-page-master>
<fo:simple-page-master master-name="section1-odd-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="10pt" margin-bottom="10pt" margin-right="20pt" margin-left="20pt">
<fo:region-body margin-top="15pt" margin-bottom="25pt"/>
<fo:region-before region-name="odd-page-header" extent="11in"/>
<fo:region-after region-name="odd-page-footer" extent="11in" display-align="after"/>
</fo:simple-page-master>
<fo:simple-page-master master-name="section1-even-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="10pt" margin-bottom="10pt" margin-right="20pt" margin-left="20pt">
<fo:region-body margin-top="15pt" margin-bottom="25pt"/>
<fo:region-before region-name="even-page-header" extent="11in"/>
<fo:region-after region-name="even-page-footer" extent="11in" display-align="after"/>
</fo:simple-page-master>
<fo:page-sequence-master master-name="section1-page-sequence-master">
<fo:repeatable-page-master-alternatives>
<fo:conditional-page-master-reference odd-or-even="odd" master-reference="section1-odd-page"/>
<fo:conditional-page-master-reference odd-or-even="even" master-reference="section1-even-page"/>
</fo:repeatable-page-master-alternatives>
</fo:page-sequence-master>
</fo:layout-master-set>
<fo:page-sequence xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" master-reference="section1-page-sequence-master" format="1">
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
<fo:retrieve-marker retrieve-class-name="odd-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
</fo:static-content>
<fo:static-content flow-name="even-page-footer">
<fo:retrieve-marker retrieve-class-name="odd-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page"/>
</fo:static-content>
<fo:static-content flow-name="xsl-footnote-separator">
<fo:block>
<fo:leader leader-pattern="rule" leader-length="144pt" rule-thickness="0.5pt" rule-style="solid" color="gray"/>
</fo:block>
</fo:static-content>
<fo:flow flow-name="xsl-region-body">
<fo:block widows="2" orphans="2" font-size="10pt" line-height="1.147" white-space-collapse="false">
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="first-page-header"/>
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="first-page-footer"/>
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="odd-page-header"/>
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="odd-page-footer"/>
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="even-page-header"/>
<fo:marker xmlns:st1="urn:schemas-microsoft-com:office:smarttags" marker-class-name="even-page-footer"/>



<fo:table  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="white" border-top-width="0.5pt" border-left-style="solid" border-left-color="white" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="white" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="white" border-right-width="0.5pt">

<fo:table-column column-width="185px"/>
<fo:table-column column-width="185px"/>
<fo:table-column column-width="185px"/>

<fo:table-body start-indent="0pt">
<fo:table-row>

<fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="white" border-left-width="0.25pt" border-right-width="0pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0pt" border-bottom-width="0pt" background-color="white">
<fo:block>
        <fo:external-graphic content-height="80pt" content-width="50pt" padding-left="2pt" src="url(https://live.runmyprocess.com/pub/112501412000161590/upload/6e716860-fa4d-11e5-858c-0619bd984419/total_logo.png?method=GET)"></fo:external-graphic>
</fo:block>
</fo:table-cell>

<fo:table-cell  padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="white" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
	<fo:block  text-align="center" space-after="0pt" space-after.conditionality="retain" line-height="2" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="black" font-size="11pt" >
	<fo:leader leader-length="0pt"/>
	CAMPAGNE TLS 
	</fo:inline>
	</fo:block>
	<fo:block  text-align="center" space-after="0pt" space-after.conditionality="retain" line-height="2" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="black" font-size="11pt" >
	<fo:leader leader-length="0pt"/>
	DOSSIER DE FIN DE TRAVAUX 
	</fo:inline>
	</fo:block>
	<fo:block  text-align="center" space-after="0pt" space-after.conditionality="retain" line-height="2" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="black" font-size="11pt" >
	<fo:leader leader-length="0pt"/>
	LOT TÉLÉSURVEILLANCE
	</fo:inline>
	</fo:block>
</fo:table-cell>
<fo:table-cell text-align="right" padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="white" border-left-width="0.25pt" border-right-width="0pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0pt" border-bottom-width="0pt" background-color="white">
<fo:block>
        <fo:external-graphic content-height="160pt" content-width="100pt" padding-left="2pt" src="url(https://live.runmyprocess.com/pub/112501412000161590/upload/fb2a2840-02e1-11e6-a4be-02b3a23437c9/logofujitsu.png?method=GET)"></fo:external-graphic>
</fo:block>
</fo:table-cell>
</fo:table-row>
</fo:table-body>
</fo:table>





<fo:table margin-top="1cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E20031">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
<fo:inline font-weight="bold" color="white" >
<fo:leader leader-length="0pt"/>
Informations relatives aux travaux
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</fo:table-body>
</fo:table>
<fo:table margin-top="" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="white" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="white" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="318px"/>
<fo:table-column column-width="238px"/>
<fo:table-body start-indent="0pt">
<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="white" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="WHITE">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" >
<fo:inline color="BLACK" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Personne en charge : </fo:inline><xsl:value-of select="nom_personne"/>
</fo:inline>
</fo:block>
</fo:table-cell>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="WHITE">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR">
<fo:inline color="BLACK" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Date de réalisation : </fo:inline><xsl:value-of select="date_realisation"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</fo:table-body>
</fo:table>
<fo:table margin-bottom="0.7cm" padding-bottom="0pt" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="white" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="white" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" >
<fo:inline color="black" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Nature des travaux : </fo:inline><xsl:value-of select="nature_traveaux"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</fo:table-body>
</fo:table>





<fo:table margin-top="1cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E20031">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
<fo:inline font-weight="bold" color="white" >
<fo:leader leader-length="0pt"/>
Informations de la station concernée
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</fo:table-body>
</fo:table>


<fo:table background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="white" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="150px"/>
<fo:table-column column-width="406px"/>
<fo:table-body start-indent="0pt">

<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="white" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR"  >
<fo:inline color="black" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Code d'implant : </fo:inline><xsl:value-of select="code_implant"/>
</fo:inline>
</fo:block>
</fo:table-cell>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" >
<fo:inline color="black" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Nom de la station : </fo:inline><xsl:value-of select="nom_station"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

</fo:table-body>
</fo:table>

<fo:table margin-bottom="0.7cm" padding-bottom="0pt" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="white" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="400px"/>
<fo:table-column column-width="156px"/>
<fo:table-body start-indent="0pt">

<fo:table-row>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="white" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" >
<fo:inline color="black" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Adresse : </fo:inline><xsl:value-of select="adresse"/>
</fo:inline>
</fo:block>
</fo:table-cell>
<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="white" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" >
<fo:inline color="black" >
<fo:leader leader-length="0pt"/>
<fo:inline font-weight="bold">Téléphone : </fo:inline><xsl:value-of select="telservice"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

</fo:table-body>
</fo:table>








<xsl:variable name="users_array"><xsl:value-of select="users_array"/></xsl:variable>
<xsl:if test="$users_array != ''">
<fo:table background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Centrale d'alarme
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
</fo:table-body>
</fo:table>
<xsl:apply-templates select="users_array"/>
</xsl:if>

<xsl:variable name="images_clavier_principal"><xsl:value-of select="images_clavier_principal"/></xsl:variable>
<xsl:if test="$images_clavier_principal != ''">
<fo:table margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Clavier principal de la centrale d'alarme
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_clavier_principal"/>
</fo:table-body>
</fo:table>
</xsl:if>



<xsl:variable name="images_antenne"><xsl:value-of select="images_antenne"/></xsl:variable>
<xsl:if test="$images_antenne != ''">
<fo:table margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Antenne externe
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_antenne"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_detecteur_irp"><xsl:value-of select="images_detecteur_irp"/></xsl:variable>
<xsl:if test="$images_detecteur_irp != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur IRP Double Technologie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_irp"/>
</fo:table-body>
</fo:table>
</xsl:if>



<xsl:variable name="images_detecteur_irp_simple"><xsl:value-of select="images_detecteur_irp_simple"/></xsl:variable>
<xsl:if test="$images_detecteur_irp_simple != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur IRP Simple Technologie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_irp_simple"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_detecteur_mouvement"><xsl:value-of select="images_detecteur_mouvement"/></xsl:variable>
<xsl:if test="$images_detecteur_mouvement != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur de mouvement avec vidéo IRVPI
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_mouvement"/>
</fo:table-body>
</fo:table>
</xsl:if>

<xsl:variable name="images_detecteur_ouverture"><xsl:value-of select="images_detecteur_ouverture"/></xsl:variable>
<xsl:if test="$images_detecteur_ouverture != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur d'ouverture
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_ouverture"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_bouton_huf"><xsl:value-of select="images_bouton_huf"/></xsl:variable>
<xsl:if test="$images_bouton_huf != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Bouton agression HUF
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_bouton_huf"/>
</fo:table-body>
</fo:table>
</xsl:if>

<xsl:variable name="images_medaillon_alerte"><xsl:value-of select="images_medaillon_alerte"/></xsl:variable>
<xsl:if test="$images_medaillon_alerte != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Médaillon d'alerte mobile
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_medaillon_alerte"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_pedale"><xsl:value-of select="images_pedale"/></xsl:variable>
<xsl:if test="$images_pedale != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Pédale de caisse
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_pedale"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_sirene_interieure"><xsl:value-of select="images_sirene_interieure"/></xsl:variable>
<xsl:if test="$images_sirene_interieure != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Sirène intérieure
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_sirene_interieure"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_sirene_exterieure"><xsl:value-of select="images_sirene_exterieure"/></xsl:variable>
<xsl:if test="$images_sirene_exterieure != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Sirène extérieure
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_sirene_exterieure"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_sabot"><xsl:value-of select="images_sabot"/></xsl:variable>
<xsl:if test="$images_sabot != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Sabot
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_sabot"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_detecteur_choc"><xsl:value-of select="images_detecteur_choc"/></xsl:variable>
<xsl:if test="$images_detecteur_choc != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur de choc
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_choc"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_dac"><xsl:value-of select="images_dac"/></xsl:variable>
<xsl:if test="$images_dac != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Info DAC
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_dac"/>
</fo:table-body>
</fo:table>
</xsl:if>



<xsl:variable name="images_camera_interieure"><xsl:value-of select="images_camera_interieure"/></xsl:variable>
<xsl:if test="$images_camera_interieure != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Caméra intérieure
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_camera_interieure"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_camera_exterieure"><xsl:value-of select="images_camera_exterieure"/></xsl:variable>
<xsl:if test="$images_camera_exterieure != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Caméra extérieure
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_camera_exterieure"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_moniteur_bureau"><xsl:value-of select="images_moniteur_bureau"/></xsl:variable>
<xsl:if test="$images_moniteur_bureau != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Moniteur vidéo de bureau
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_moniteur_bureau"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_moniteur_caisse"><xsl:value-of select="images_moniteur_caisse"/></xsl:variable>
<xsl:if test="$images_moniteur_caisse != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Moniteur vidéo de caisse
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_moniteur_caisse"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_uc_tls"><xsl:value-of select="images_uc_tls"/></xsl:variable>
<xsl:if test="$images_uc_tls != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	UC TLS dans la baie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_uc_tls"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_nas"><xsl:value-of select="images_nas"/></xsl:variable>
<xsl:if test="$images_nas != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	NAS dans la baie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_nas"/>
</fo:table-body>
</fo:table>
</xsl:if>

<xsl:variable name="images_switch_tls"><xsl:value-of select="images_switch_tls"/></xsl:variable>
<xsl:if test="$images_switch_tls != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Switch TLS dans la baie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_switch_tls"/>
</fo:table-body>
</fo:table>
</xsl:if>



<xsl:variable name="images_boitier_plexo"><xsl:value-of select="images_boitier_plexo"/></xsl:variable>
<xsl:if test="$images_boitier_plexo != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Boîtier Plexo ADAM
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_boitier_plexo"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_injecteur_rackable"><xsl:value-of select="images_injecteur_rackable"/></xsl:variable>
<xsl:if test="$images_injecteur_rackable != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Injecteurs rackabke
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_injecteur_rackable"/>
</fo:table-body>
</fo:table>
</xsl:if>



<xsl:variable name="images_injecteur_unitaires"><xsl:value-of select="images_injecteur_unitaires"/></xsl:variable>
<xsl:if test="$images_injecteur_unitaires != ''">
<fo:table   margin-bottom="0.7cm" background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Injecteurs unitaires
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_injecteur_unitaires"/>
</fo:table-body>
</fo:table>
</xsl:if>


<xsl:variable name="images_adhesifs"><xsl:value-of select="images_adhesifs"/></xsl:variable>
<xsl:if test="$images_adhesifs != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Adhesifs réglementaires
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_adhesifs"/>
</fo:table-body>
</fo:table>
</xsl:if>	




<xsl:variable name="images_detecteur_fumee"><xsl:value-of select="images_detecteur_fumee"/></xsl:variable>
<xsl:if test="$images_detecteur_fumee != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Détecteur de fumée
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_detecteur_fumee"/>
</fo:table-body>
</fo:table>
</xsl:if>	


<xsl:variable name="images_controleur"><xsl:value-of select="images_controleur"/></xsl:variable>
<xsl:if test="$images_controleur != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Contrôleur d'accès
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_controleur"/>
</fo:table-body>
</fo:table>
</xsl:if>	


<xsl:variable name="images_digicode"><xsl:value-of select="images_digicode"/></xsl:variable>
<xsl:if test="$images_digicode != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Digicode
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_digicode"/>
</fo:table-body>
</fo:table>
</xsl:if>	


<xsl:variable name="images_interphone"><xsl:value-of select="images_interphone"/></xsl:variable>
<xsl:if test="$images_interphone != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Interphone
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_interphone"/>
</fo:table-body>
</fo:table>
</xsl:if>	

<xsl:variable name="images_hp"><xsl:value-of select="images_hp"/></xsl:variable>
<xsl:if test="$images_hp != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	HP
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_hp"/>
</fo:table-body>
</fo:table>
</xsl:if>	



<xsl:variable name="images_amplificateur"><xsl:value-of select="images_amplificateur"/></xsl:variable>
<xsl:if test="$images_amplificateur != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Amplificateur
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_amplificateur"/>
</fo:table-body>
</fo:table>
</xsl:if>	



<xsl:variable name="images_centrale_interphonie"><xsl:value-of select="images_centrale_interphonie"/></xsl:variable>
<xsl:if test="$images_centrale_interphonie != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#034EA2">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Centrale d'interphonie
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="images_centrale_interphonie"/>
</fo:table-body>
</fo:table>
</xsl:if>	


<xsl:variable name="numeros_serie"><xsl:value-of select="numeros_serie"/></xsl:variable>
<xsl:if test="$numeros_serie != ''">
<fo:table   margin-bottom="0.7cm"  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-column column-width="556px"/>
<fo:table-body start-indent="0pt">
	<fo:table-row  keep-with-next="always">
	<fo:table-cell  padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#4596D1">
	<fo:block  space-after="0pt" space-after.conditionality="retain" line-height="3" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" >
	<fo:inline font-weight="bold" color="white" >
	<fo:leader leader-length="0pt"/>
	Numéro de série des équipements
	</fo:inline>
	</fo:block>
	</fo:table-cell>
	</fo:table-row>
	<xsl:apply-templates select="numeros_serie"/>
</fo:table-body>
</fo:table>
</xsl:if>	





</fo:block>
<fo:block id="IDHHIXQZ10UHIJMNYMAHKVUOVNMNXJ5QFVUIOHCPPUSRQNVFKTESTO"/>
</fo:flow>
</fo:page-sequence>
</fo:root>
</xsl:template>  








<xsl:template match="users_array">

<fo:table  background-color="#FFFFFF" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt">
<fo:table-body start-indent="0pt">

<fo:table-row keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell   text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >

			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
					 
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</fo:table-body>
</fo:table>

</xsl:template>




<xsl:template match="images_clavier_principal">


<fo:table-row keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR">
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row >
<fo:table-cell   text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>





<xsl:template match="images_detecteur_irp">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>





<xsl:template match="images_detecteur_irp_simple">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>




<xsl:template match="images_detecteur_mouvement">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row >
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue de l'IRV
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_vu_irv"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_detecteur_ouverture">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_bouton_huf">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>

<xsl:template match="images_medaillon_alerte">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_pedale">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_sirene_interieure">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_sirene_exterieure">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_sabot">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_detecteur_choc">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline >
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>

<xsl:template match="images_camera_interieure">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row >
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue de jour
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_jour"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue de nuit
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_nuit"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

</xsl:template>



<xsl:template match="images_camera_exterieure">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row >
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue de jour
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_jour"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue de nuit
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_nuit"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

</xsl:template>



<xsl:template match="images_moniteur_bureau">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_jour"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_moniteur_caisse">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Vue
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>

<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url_jour"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_uc_tls">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_nas">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_switch_tls">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_boitier_plexo">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>


<xsl:template match="images_injecteur_rackable">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_injecteur_unitaires">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt"  >
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>


</xsl:template>



<xsl:template match="images_adhesifs">


<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>




<xsl:template match="images_antenne">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>



<xsl:template match="images_dac">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>




<xsl:template match="images_detecteur_fumee">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>





<xsl:template match="images_controleur">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>




<xsl:template match="images_digicode">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>




<xsl:template match="images_interphone">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>



<xsl:template match="images_hp">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>





<xsl:template match="images_amplificateur">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>




<xsl:template match="images_centrale_interphonie">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="dispositif"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row keep-with-next="always">
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="white" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial"  font-size="11pt" language="FR" >
<fo:inline color="black">
<fo:leader leader-length="0pt"/>
Plan large
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row>
<fo:table-cell  text-align="center" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="white" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>


		<xsl:variable name="image"><xsl:value-of select="url"/></xsl:variable>
		<fo:external-graphic content-height="300pt" content-width="700pt">
			  <xsl:attribute name="src">
					 <xsl:value-of select="$image" />
			   </xsl:attribute>
		</fo:external-graphic>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>





<xsl:template match="numeros_serie">
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid"  border-top-color="black"  border-top-width="0.25pt"  background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="description"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
<fo:table-row  keep-with-next="always">
<fo:table-cell padding-top="5pt" padding-left="5.4pt" padding-bottom="5pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-bottom-style="solid" border-bottom-color="white" border-bottom-width="0.25pt" background-color="white">
<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" >
<fo:inline>
<fo:leader leader-length="0pt"/>
<xsl:value-of select="numero"/>
</fo:inline>
</fo:block>
</fo:table-cell>
</fo:table-row>
</xsl:template>


</xsl:stylesheet>
