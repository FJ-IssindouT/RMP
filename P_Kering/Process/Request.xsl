<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" exclude-result-prefixes="fo">
    <xsl:output method="xml" version="1.0" omit-xml-declaration="no" indent="yes"/>
    <xsl:template match="my_var_main">
<fo:root font-family="Calibri" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml">
	<fo:layout-master-set xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
		<fo:simple-page-master master-name="section1-first-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="14.2pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
			<fo:region-body margin-top="19.4pt" margin-bottom="35.45pt"></fo:region-body>
			<fo:region-before region-name="first-page-header" extent="11in"></fo:region-before>
			<fo:region-after region-name="first-page-footer" extent="11in" display-align="after"></fo:region-after>
		</fo:simple-page-master>
		<fo:simple-page-master master-name="section1-odd-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="14.2pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
			<fo:region-body margin-top="19.4pt" margin-bottom="35.45pt"></fo:region-body>
			<fo:region-before region-name="odd-page-header" extent="11in"></fo:region-before>
			<fo:region-after region-name="odd-page-footer" extent="11in" display-align="after"></fo:region-after>
		</fo:simple-page-master>
		<fo:simple-page-master master-name="section1-even-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="14.2pt" margin-bottom="35.4pt" margin-right="70.85pt" margin-left="70.85pt">
			<fo:region-body margin-top="19.4pt" margin-bottom="35.45pt"></fo:region-body>
			<fo:region-before region-name="even-page-header" extent="11in"></fo:region-before>
			<fo:region-after region-name="even-page-footer" extent="11in" display-align="after"></fo:region-after>
		</fo:simple-page-master>
		<fo:page-sequence-master master-name="section1-page-sequence-master">
			<fo:repeatable-page-master-alternatives>
				<fo:conditional-page-master-reference odd-or-even="odd" master-reference="section1-odd-page" />
				<fo:conditional-page-master-reference odd-or-even="even" master-reference="section1-even-page" />
			</fo:repeatable-page-master-alternatives>
		</fo:page-sequence-master>
	</fo:layout-master-set>
	<fo:page-sequence master-reference="section1-page-sequence-master" format="1" xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
		<fo:static-content flow-name="first-page-header">
			<fo:retrieve-marker retrieve-class-name="first-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page" />
		</fo:static-content>
		<fo:static-content flow-name="first-page-footer">
			<fo:retrieve-marker retrieve-class-name="first-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page" />
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
				<fo:marker marker-class-name="first-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
				<fo:marker marker-class-name="first-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
				<fo:marker marker-class-name="odd-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="18pt" language="FR" start-indent="-42.55pt" text-indent="-14.15pt">
						<fo:leader />
					</fo:block>
				</fo:marker>
				<fo:marker marker-class-name="odd-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
				<fo:marker marker-class-name="even-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
				<fo:marker marker-class-name="even-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:leader />
				</fo:block>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="EN-US" end-indent="-28.35pt" text-indent="-14.2pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:inline font-size="18pt" language="">
						<fo:external-graphic content-width="123.9pt" content-height="76.2pt" src="url(&quot;data:image/auto;base64,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&#xA;0wqtJwAAAABJRU5ErkJggk==&#xA;&quot;)" />
					</fo:inline>
					<fo:inline language="EN-US">
						<fo:leader leader-length="0pt" />
					</fo:inline>
					<fo:inline language="EN-US">
						<fo:leader leader-pattern="space" leader-length="NaNpt" />
					</fo:inline>
					<fo:inline color="#FFFFFF" language="EN-US">
						<fo:leader leader-length="0pt" />xxxxx
					</fo:inline>
					<fo:inline color="#FFFFFF" language="EN-US">
						<fo:leader leader-length="0pt" />xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
					</fo:inline>
					<fo:inline language="">
						<fo:external-graphic content-width="128.95pt" content-height="61.95pt" src="url(&quot;data:image/auto;base64,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&#xA;&quot;)" />
					</fo:inline>
				</fo:block>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="EN-US" text-align="center" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:inline font-size="18pt" language="EN-US">
						<fo:leader leader-length="0pt" />Kering - Project Request
					</fo:inline>
				</fo:block>
				<fo:block border-after-style="solid" border-after-color="#4F81BD" border-after-width="1pt" border-after-width.conditionality="retain" padding-after="4pt" padding-after.conditionality="retain" letter-spacing="0.25pt" space-after="15pt" space-after.conditionality="retain" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Cambria" font-size="16pt" language="EN-US" color="#17365D" letter-spacing="0.25pt" space-before="0pt">
						<fo:inline font-size="16pt" language="EN-US">
							<fo:leader leader-length="0pt" />Project informations
						</fo:inline>
					</fo:block>
				</fo:block>
				<fo:table font-family="Calibri" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:table-column column-number="1" column-width="147.15pt" />
					<fo:table-column column-number="2" column-width="313.45pt" />
					<fo:table-body start-indent="0pt" end-indent="0pt">
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />Project Code
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Project_code"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />FTS Project Manager
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Manager_Name"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />Kering Project Lead
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Kering_Manager_Name"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />Kick off Date
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" /><xsl:value-of select="kickoff_date"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />Kick off Hour
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" /><xsl:value-of select="kickoff_hour"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
					</fo:table-body>
				</fo:table>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="11pt" language="EN-US" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:leader />
				</fo:block>
				<fo:block border-after-style="solid" border-after-color="#4F81BD" border-after-width="1pt" border-after-width.conditionality="retain" padding-after="4pt" padding-after.conditionality="retain" letter-spacing="0.25pt" space-after="15pt" space-after.conditionality="retain" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Cambria" font-size="16pt" language="FR" color="#17365D" letter-spacing="0.25pt" space-before="0pt">
						<fo:inline font-size="16pt" language="EN-US">
							<fo:leader leader-length="0pt" />Identification
						</fo:inline>
					</fo:block>
				</fo:block>
				<fo:table font-family="Calibri" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:table-column column-number="1" column-width="145.25pt" />
					<fo:table-column column-number="2" column-width="315.35pt" />
					<fo:table-body start-indent="0pt" end-indent="0pt">
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Request ID
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Request_id"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Request Name
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Request_name"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Requested By
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Requested_by"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Creation Date
									</fo:inline>
									<fo:inline>
										<fo:leader leader-length="0pt" />
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Creation_date"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Organizational Unit
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Organizational_unit"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Position
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Position"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Phone
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Phone"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Expected Delivery Date:
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Expected_delivery_date"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Expected GO Live date
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Expected_go_live"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Submission Date
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Submission_date"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Last Submission Date
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Last_date_sub"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Location
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Location"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Project Description
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" /><xsl:value-of select="Description"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Attachement
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
										<xsl:value-of select="Attachment" />
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Type
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Type"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Project Complexity - Pre Qualification
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Project_Complexity"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Invoicing Type
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Invoicing_type"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>	
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="2pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Target Brand
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" space-before="2pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" /><xsl:value-of select="Target_brand"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>							
					</fo:table-body>
				</fo:table>
				<fo:block border-after-style="solid" border-after-color="#4F81BD" border-after-width="1pt" border-after-width.conditionality="retain" padding-after="4pt" padding-after.conditionality="retain" letter-spacing="0.25pt" space-after="15pt" space-after.conditionality="retain" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:block space-after="15pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="11pt" language="FR" color="black" letter-spacing="0pt" space-before="0pt">
						<fo:leader />
					</fo:block>
					<fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Cambria" font-size="16pt" language="EN-US" color="#17365D" letter-spacing="0.25pt">
						<fo:inline font-size="16pt" language="EN-US">
							<fo:leader leader-length="0pt" />Scope of the request
						</fo:inline>
					</fo:block>
				</fo:block>
				<fo:table font-family="Calibri" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:table-column column-number="1" column-width="147.15pt" />
					<fo:table-column column-number="2" column-width="317.25pt" />
					<fo:table-body start-indent="0pt" end-indent="0pt">
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />Documentation to deliver
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt" language="EN-US">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Document_to_deliver"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Server Installation
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Server_installation"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Networking Configuration 
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Networking_configuration"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:leader />
								</fo:block>
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="14pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="14pt">
										<fo:leader leader-length="0pt" />Service Level
									</fo:inline>
								</fo:block>
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:leader />
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:leader />
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Full management and monitoring
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Full_management"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Basic monitoring and back-up
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Basic_monitoring"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Backup configuration\failover solution
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Backup"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
					</fo:table-body>
				</fo:table>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="12pt" language="EN-US" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:leader />
				</fo:block>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="12pt" language="EN-US" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:leader />
				</fo:block>
				<fo:table font-family="Calibri" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:table-column column-number="1" column-width="147.15pt" />
					<fo:table-column column-number="2" column-width="313.45pt" />
					<fo:table-body start-indent="0pt" end-indent="0pt">
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Affected components
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Affected_components"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold" font-size="12pt">
										<fo:leader leader-length="0pt" />Impacts and Risks
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline font-size="12pt">
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Impacts"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
						<fo:table-row>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="FR" space-before="6pt" space-before.conditionality="retain" font-weight="bold">
									<fo:inline font-weight="bold">
										<fo:leader leader-length="0pt" />Benefits
									</fo:inline>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="0pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
								<fo:block space-after="2pt" space-after.conditionality="retain" line-height="1.147" font-family="Calibri" font-size="12pt" language="EN-US" space-before="6pt" space-before.conditionality="retain">
									<fo:inline>
										<fo:leader leader-length="0pt" />
											<xsl:value-of select="Benefits"/>
									</fo:inline>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
					</fo:table-body>
				</fo:table>
				<fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.3190500000000002" font-family="Calibri" font-size="12pt" language="EN-US" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
					<fo:leader />
				</fo:block>
			</fo:block>
			<fo:block id="IDZVGYUTPXKP5PDMHIME5LCPKD1J04AKOF0SMQYKJZ2DKPG5FUJQB" />
		</fo:flow>
	</fo:page-sequence>
</fo:root>
 </xsl:template>  
</xsl:stylesheet>