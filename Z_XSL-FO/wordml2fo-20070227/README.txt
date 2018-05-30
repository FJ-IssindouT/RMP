WordML2Fo -- WordML to XSLFO converter

1. Introduction

WordML is an XML application defined by Microsoft which gives an opportunity to represent MS Word documents as XML documents. WordML is a shorthand for WordprocessingML. Latest MS Word versions allow to "save as" documents in XML formats. 

WordML2FO is a XSLT stylesheet which you can use to transform WordML documents into XSLFO.

WordML2FO contains two stylesheets: Word2FO.xsl and Word2FO_ext.xsl. The first one is an ordinary stylesheet without any extensions. The second one contains some RenderX extensions to XSL-FO for WordML conversion.

2. Package content

examples    - WordML examples
stylesheets - WordML2FO stylesheets
README.txt  - this readme

3. Usage

To convert WordML to XSLFO you need simply make XSLT transformation.

For example:
    msxsl examples/certificate.xml stylesheets/Word2FO.xsl -o certificate.fo