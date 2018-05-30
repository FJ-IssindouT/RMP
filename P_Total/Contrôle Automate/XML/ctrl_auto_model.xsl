<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" exclude-result-prefixes="fo">
    <xsl:output method="xml" version="1.0" omit-xml-declaration="no" indent="yes"/>
    <xsl:template match="my_var_main">
        <fo:root font-family="Arial" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml">
            <fo:layout-master-set xmlns:rx="http://www.renderx.com/XSL/Extensions" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
                <fo:simple-page-master master-name="section1-first-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="21.25pt" margin-bottom="35.45pt" margin-right="56.7pt" margin-left="56.7pt">
                    <fo:region-body margin-top="56.7pt" margin-bottom="21.25pt"></fo:region-body>
                    <fo:region-before region-name="first-page-header" extent="11in"></fo:region-before>
                    <fo:region-after region-name="first-page-footer" extent="11in" display-align="after"></fo:region-after>
                </fo:simple-page-master>
                <fo:simple-page-master master-name="section1-odd-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="21.25pt" margin-bottom="35.45pt" margin-right="56.7pt" margin-left="56.7pt">
                    <fo:region-body margin-top="56.7pt" margin-bottom="21.25pt"></fo:region-body>
                    <fo:region-before region-name="odd-page-header" extent="11in"></fo:region-before>
                    <fo:region-after region-name="odd-page-footer" extent="11in" display-align="after"></fo:region-after>
                </fo:simple-page-master>
                <fo:simple-page-master master-name="section1-even-page" page-width="8.268055555555555in" page-height="11.693055555555556in" margin-top="21.25pt" margin-bottom="35.45pt" margin-right="56.7pt" margin-left="56.7pt">
                    <fo:region-body margin-top="56.7pt" margin-bottom="21.25pt"></fo:region-body>
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
                    <fo:retrieve-marker retrieve-class-name="even-page-header" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="even-page-footer">
                    <fo:retrieve-marker retrieve-class-name="even-page-footer" retrieve-position="first-including-carryover" retrieve-boundary="page" />
                </fo:static-content>
                <fo:static-content flow-name="xsl-footnote-separator">
                    <fo:block>
                        <fo:leader leader-pattern="rule" leader-length="144pt" rule-thickness="0.5pt" rule-style="solid" color="gray" />
                    </fo:block>
                </fo:static-content>
                <fo:flow flow-name="xsl-region-body">
                    <fo:block widows="2" orphans="2" font-size="10pt" line-height="1.147" white-space-collapse="false">
                        <fo:marker marker-class-name="first-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" text-align="center">
                                <fo:inline language="">
                                    <fo:external-graphic content-width="138.1pt" content-height="55.35pt" src="url(&quot;data:image/auto;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAB4CAMAAACQCVQsAAAAAXNSR0IArs4c6QAAAARnQU1BAACx&#xA;jwv8YQUAAAMAUExURWs1eXs1dVxje3lqYQNEngZJng5Cmg5NnxlMmgRKoAxMoQlTpxFNoRNRpBRW&#xA;qBJfrhlUphhXqBxYpxpaqiFJmyFRkzxBjzhFkjxaizVXkiBXpyBZpyJbqStXqSpfqyJhrSlhrCRo&#xA;sipyuTFjpjFlrTNorzNlsDRpsD1ssjZ1uit9wUU6hmk8gkhCjEdEkEhdikpRmFJBi1JfhUNqrEJu&#xA;skRytUJ3uEt1tk94t017ulJ8ulh+uS2KyzKJyjSQzjuT0E+QvFWAvV+Du3yElmSGvWqVqE+KxUeU&#xA;y0CV0V+Mw1SVwlKe1Vei1meKwWaQxWebwGuRxnSTxHKXyHWayXmWxXuYx3mbymeq2Xii0Hex3Iku&#xA;aoowa4g2dJgqZa8kXbMlW6MvaLx/NopxXJJzXYlyaZl2Yd4IOd4TP+wAEu0HLO0LM+4ZOu8iPPA5&#xA;NskVSdIOQdQVRMMlVcE5Zu8cQO4lRfAsTPAtUPAyTfA2VPE8YPFIMvNZLfJQMPRoJfZ7OtNFaPFB&#xA;XPFGZPFVa/Jbc/RpSfNmevNrgPR3ivV+kKWATrGGVK+SZrucc8uHOs+WP9KHKtOJNNmSJ96TM+GL&#xA;GO+TD+iUH/aBC/eJH/eTB/eXGvebIfihKPikN8qIRsmVRMOVWNSTT/msR/ipVPqwSPq0WPq6Z/q+&#xA;dPvDeYWUnImaoLKUtoGcyoWgzIujzYil0IK335CmzpSs05qu0pWz2JO43Jux1Ie74ZK/4qm6xaG1&#xA;1qC22Ky92pfE5K7A3LTE3qjL563Q6rfI4bbU7Ni3ks63pPWHlvaSnuGSpfeYp/eirfiqtPi1vfm7&#xA;w/vHifvMlPzSnO/VvPzPofzUpPzbt/3gvsDO5MTR5cHb78vV58nV6M3b7Mbd8NDX59Td7Mvg8dfg&#xA;7dri7tTj8tXo9drk8drq9frCyvvN0/vW2vzd4f3jx/3r1/7w3ufl6+Dm8ePr9OPu+Oru9ubw+Ozw&#xA;9+zy+Pzl6P3u8P7z6PL2+vb4/P7z9P72+P758/7+/gAAAAAAAAAAACvJb4oAAAEAdFJOU///////&#xA;////////////////////////////////////////////////////////////////////////////&#xA;////////////////////////////////////////////////////////////////////////////&#xA;////////////////////////////////////////////////////////////////////////////&#xA;////////////////////////////////////////////////////////////////////////////&#xA;/////////////////////////////wBT9wclAAAACXBIWXMAABJ0AAASdAHeZh94AAAAGXRFWHRT&#xA;b2Z0d2FyZQBwYWludC5uZXQgNC4wLjE3M26fYwAADaVJREFUeF7tnX9wHFUdwFEj5jYXLQNOUKI0&#xA;tSP1B+KPRqBDcoI4BJuOdGAaYaiM4qi3kYLmQg8Y9S7n5arI+AOVS3KiwYSoWFCUCDY0JLr1crmU&#xA;MdFqraktJHdJCgWbSy6X7B++t+/79sft273dxD/oZj+h7d177zZ3n3y/333v3V44R3SxjmvLDq4t&#xA;O7i27ODasoNryw6uLTu4tuzg2rKDa8sOri07uLbs4Nqyg2vLDq4tO7i27ODassPqbZ15efLokSNH&#xA;jk6+PA8tzmeVtk48s+Pq2ks2VldXb9xce82O3x45DR3OZjW2lp796Du8ZQgPB1RWv3vXCeh1Mquw&#xA;NVm7+drfHDx48MmdW7kyL8Bx3mtfhAHOxb6t/AElik7v3+ABXV6vp+wmp1ew1Vd5wpnHqjmw5fWW&#xA;bTy4BO3OZFW2CoUcYqFQwHeOXq3o4t7+mKPDy6atXCYlRMPhcCgUDqF/IvuS6exL11eALKSr4kon&#xA;nx3t2MocCgdamotoCQS+ceuHvBU0wDzVr8JwB2LZVjYW8PNgqBieD+z+QAVEmOc98AgHYs1WLhU0&#xA;VEXg+T23VoGuT8OjnIcFWwvp2F5zVQS++bZzqrwoI6uH4JGOo7StdCQAOiyw55YqzsvVOrXSl7KV&#xA;i9lwhblz9wUc9xQ82mmUsJVpBQnW4e+61FPh0FmXua0UGLAHf075k3AAh2Fmq5DUza4s8pkP5uEY&#xA;zsLEViEGr90+/F1/gYM4C2Nby1F46auiRYDDOApjW2uShUjCcZyEoS3ByoTUjJY0HMlBGNlKF02z&#xA;UL23W/JbMnAs52BgKxcir7g1GI4IyVSakEoK+yKRcBCZtBJ5AcfpMrAV49E6OdienM5KO35qCrns&#xA;dEpoD7fwJY3tzcFjnALb1jRyFUllF+Aug4VcNhUrtTHR3AajnQLbVtAfHDVRRSlkhRLCRmGkQ2Da&#xA;OuRvs5xDWSFg4itiwflZBMvWTKt2armyuLg4R0C3oFFFOhI0Ol+2OCu4WLYE5SWuzM0+39fb09Od&#xA;IHT39PT2HZ6YK3I2M/LVL4KfIiKOKvQMWzPyiX92rDvR1dmBiOO/MPhGZ2dXoufwLAwifOR9u9kJ&#xA;6ag5KsNWjkwaVv6aIIKYYGuPzkkDJTze8qrbGL746DKMcALMKo8ZV+KpmHi8A4XWqRUYiTmNL4jw&#xA;VO1h+HJSKhrYmu3WuZIyEv3d1fO8KqaAIXL5SPmtd4IjGX8KhqjITVtANy1+DcC0lR8jajDoFvkP&#xA;g8rVBOOkKIo7iS3OU7X7rqL4CsIQFclmf0m+lIXBryVYtub/RANLkYbyL9E7PqfOPjVw6UhlJVd+&#xA;6W2gCfDrUzFl4Z0R/9li6+kfgSAsCwIr3m2sShRPKBeOeLkLbtFEFyMVrWz3ny22hr/TSR1R4om/&#xA;GatCHHgjqMJw3OvUuvgYDFJwUGzlb34YHCFIdHVr51Z6rlWuecN43v8FeM2YMAxSGIEeM84SW8c/&#xA;9X1ZE6azZwJ6DMm/EzQRKis9l+6BF40I6GZc6UhYQV40BaCBEHotzjz0tgY+hm1hTfgvVK+YJ0EN&#xA;QxvAkwxX9RVwgNC/7mX0BRSCMKo5qNo8VLqz6REhFmtv3yck09rNNnzFnTEwiJIbHUmxJyWFzGgq&#xA;NW3tZ6OztXRz/cMQVYjE86VdieIuVZEHuF/JFvgZGMaGaQvICOG78SVjqA7yzYFAa7A9rbzi2N6g&#xA;CdpEzoQC6OHtDCfZe1pRVyBkafmvs5XfXn+/nIY9+nkoi8sZtv49Sks5b16BFFvF49Jh6FETlBee&#xA;bYyFg4x2lzsL6R7V6wrDUSztUelsTTXU/+KH2BTKwh4rgSWKkxtBkZq8/K4Rb749bxRbywbvOvlj&#xA;kKZt0MAkoFafkY/UrktG+u3D5hlA0Nk6Xt/QgOdbnUgWNJXiKV3Z8nouRwUBQsNybGls5aJ+aC/G&#xA;30oOaG5LdbA0tCH8uuham61j9Q2+X0pz+cPQUor8Dn0ilj2DOmZILq4qE7MhJbJ4+JIhb1W2+XkK&#xA;tKOhcN+vsqWd3bUVWVmbrWEUW76fxjstyxJPXMKw9TLuSZHwMK8IzNjKqUpWOCYkk0lBaFOEBfFL&#xA;SwmH4CtKO0LQIAhJ+ZtO3w2dQFGB+j/Y+uQP4n3WahZiCAyp8GyRepbJUzHfm2faEqCtmY9Ow35b&#xA;IZeJybrIVjheX+A/o5C0PD7pkUWHPAXJycenD45patfabKFMRHwiUWr6rrBLvewhePZLPSvfxM8j&#xA;IN02RLGlZCJ98xctmzRT2xFay7SvTbGln1HRuAtkYvTBmoXr2mydlGxd97T0IypYCLD8RYxEnMQ9&#xA;i4kf4+dR4k1FVmzJ1xUUr5pGaIBMQ4OEiS2BKkKlThanLpBrs3Xah235Go5J9ybMdh4IB+TPkcl4&#xA;avMosMa7Oh76MjoNlbg2iWXrEDTxupIHQcdrruAxtpWksvD4QoTc5kMqXWuztYRlIV2Nw9Ldid7e&#xA;WVNfS5sZofVHUTz1KJ7f3lt6eazYkgcut5MWXh+WSRIfvKb4GNpKwayUF6SO7D1wN6SU0jXaagJd&#xA;DUTXXC9aVpv4GtJXLW7jpIgCC4NsNeuyQwsjtgpw7RivD8tpIoaPWLGVhWPLo2mGq3aR1mZL7JdS&#xA;EenyEV2LPfF4x5jhLOAK7WYNhts5Ib1dhILrPnRSg4FGmNjy66+Yy4IYzfuURrbopaCt8mB5fSCv&#xA;n9ZoaxBsKbp64x3xeDc7wP4DhjR8S96pvq/Zr6nHDBRbcibKsbUPGhTk2FJPSwxsZem5QjU1oQuA&#xA;MB25RlvHQZaUjOTDmYdRWqEA6x2fWyxWxpjHey/8LsjCsRXU/rj1MGJLhLrF2Ei0U7foOTAoxGTk&#xA;60NHYNAabb3SRIML6foD+ZgAKl7opcfjnd19YxPqs+TRajCkgnsDMYUysfNenj4rQ1i2ktCkW5DT&#xA;3TAr50RYSSDwWgj+gxYlkmmwtRZ/KxZ6W2I/uML4mo5LbSvjCZpdicTP+8ZnibKlG8CQmvIH8DBp&#xA;x6fjjrBhwaMotpSTZ5p+BCRY9HBad1pKz7dymuWhDnoGkSuZlauKGbb+AaYkfA2DpPUUql7EgGSi&#xA;K9HdOzb253fpE9HzYRiCeMjCc2DFVoHO5Zs1tgvy0ke72GPaUpZJBpDUS9MIDJQqsAiGraVGORUR&#xA;Pl8/fK5iVg4vIB7/HKNqlf0EupGwr5UOLVFeP6tsqd5D2ztCD1FItcoCtD8Elq0caaJpKP0h0HYS&#xA;XMtwF4GWpFKTMQxb4iCIAnxNU9BxGDxQHnwbI7Quw04hCu+wsH8LdVuTiSqHzX4+GI0JsWhYVXSK&#xA;3uJg2aLr8oAgCDH4Q4jSKSs5rSoxyPvxdrYCr3v2LFuiUucxPp9v4CTpmOvTXHfzef1cy1v+PdKH&#xA;fd1XYtEjkdsLT1YdW+IC3QHGqCJCQjMSQbNJZYtuPTAmuLQLZnO5oh0dBb/uaiqmrSmNLVS7fI0D&#xA;r5CuufEefPENctHZ8UA5I7Rup6pQHpL1Riky8Oy1DnL7SKsevk0dhBhGbI3SN94YySVPWsnoUaNP&#xA;FfqtxZa0yaXF1zgInzlcnH0ULla6UC+Lu+xBqQvz9VHNbosxGbJPqslEbZlSwe9VNvoosq2obIsa&#xA;YW2ATNNUJN9weToEjy/Cqi20/NGGF07HhmEo9yunxh+Jx+O3vwkUqfk29oRDK/5IcQQYkxNQddLl&#xA;lzhzqPjXBKDKIjBmkTlIVGWltBCBFsb1UGKBrhbp8MJoBB1Zm+0Iy7amtoMlNXXbYW6PODX2s3IQ&#xA;pIJ7PQmteLxrHAZaI5eKMj+6kYkFeD/sv/v5QHSUndvZKK5toZTcO9MGhZo5Q4+QzhbVFRqF6ZFY&#xA;NBQMIJGkE6HdRMMY2BKHwZAGX33j4AuQkPNXgiE1b/0sDqyu7j5r70NqYYsQF7LToyMjI6nRjNn5&#xA;fTmXs5j3a8HIFlsXrvhNA8eQsPyvK8GQCu7jvfiKZ91i0jEY2jLQhc6PDQ1N/YODql8lRfFc8ZJz&#xA;RUkY2xJfBEE6UMH3XXfVey+u9GhOip5K5Rdz5emE1lmY2EK6ik6MCliYr+GqTTXnIUsgrewoPO7k&#xA;QGMT3HQYZrbEKe2knk1d3aZNm2pqaip2nfzX8ODAzY2+q3z9Dv2lZaa2xFf6t5f0BQPQP/U+9IVu&#xA;NT7n1N/wZmJrHs8VjvXXW4gvCh5a3wSLSgdiFlv7cYjMDxtXLwb1vudgQuZEzGwN3SD9c3qgeBlk&#xA;jK8JVt/OxMzW/JYbSZy88IQlXWjQoFMrFsG0yg95Lx+SLi1C8dUISoxA8dfY/19psHMxtZV/jPNu&#xA;vfHA5PzSUv7k76+v0+3jyPh8jf3DTndVwpb46k0cx523eUttbe2WzRsq3lJTV6fPSTRv2P7E8JSz&#xA;c5BgbkvM36S5gqay4s3n12xSGauv8zU+MTg1vx5UIUrYEsWDZdod0srKCk9l5XkX1+AZ/MU3vrhO&#xA;PBFK2hInt3L6HWWMx3sJXRmuF0rbEs/8bls1Kl/gSALdvaj2hn+uq7jCWLCFiv3fH9+2oexcDyd9&#xA;nes59/xtjw+tj/9bgRZLthCnJ5/dv2Pb1s1btl6z86mhyfWoCmHVFiZPWHf5p2DHlotryw6uLTu4&#xA;tuzg2rKDa8sOri07uLbs4Nqyg2vLDq4tO7i27ODasoNryw6uLTu4tuzg2rKOKP4PMJNjMwWv+1MA&#xA;AAAASUVORK5CYIJ=&#xA;&quot;)"></fo:external-graphic>
                                </fo:inline>
                            </fo:block>
                        </fo:marker>
                        <fo:marker marker-class-name="first-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
                        <fo:marker marker-class-name="odd-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
                        <fo:marker marker-class-name="odd-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" text-align="center">
                                <fo:inline>
                                    <fo:leader leader-length="0pt" />
                                    <fo:page-number /> / <fo:page-number-citation ref-id="IDSR3JLZDKTWW0JJJ45DOYJQZMHM0VSP3ONBQLLYKTDHDTA0ADZEDD" />
                                </fo:inline>
                            </fo:block>
                        </fo:marker>
                        <fo:marker marker-class-name="even-page-header" xmlns:st1="urn:schemas-microsoft-com:office:smarttags" />
                        <fo:marker marker-class-name="even-page-footer" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="11pt" language="FR" text-align="center">
                                <fo:inline>
                                    <fo:leader leader-length="0pt" />
                                    <fo:page-number /> / <fo:page-number-citation ref-id="IDSR3JLZDKTWW0JJJ45DOYJQZMHM0VSP3ONBQLLYKTDHDTA0ADZEDD" />
                                </fo:inline>
                            </fo:block>
                        </fo:marker>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="16pt" language="FR" text-align="center" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="16pt" language="FR" text-align="center" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline font-weight="bold" font-size="16pt">
                                <fo:leader leader-length="0pt" />FICHE DE VALIDATION 
                            </fo:inline>
                        </fo:block>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="16pt" language="FR" text-align="center" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline font-weight="bold" font-size="16pt">
                                <fo:leader leader-length="0pt" />DES INSTALLATIONS CONNECTÉES
                            </fo:inline>
                        </fo:block>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="16pt" language="FR" text-align="center" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline font-weight="bold" font-size="16pt">
                                <fo:leader leader-length="0pt" />À UN AUTOMATE CROUZET
                            </fo:inline>
                        </fo:block>
                        <fo:block space-after="30pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="13pt" language="FR" text-align="center" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
<!-- Statut -->                         
                        <fo:block text-align="right">
                            <fo:table font-family="Arial" language="FR" start-indent="0pt" text-align="right" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                                <fo:table-column column-number="1" column-width="96.25pt" />
                                <fo:table-body start-indent="0pt" end-indent="0pt">
                                    <fo:table-row text-align="right">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="12pt" language="FR" text-align="center" font-weight="bold">
                                                <fo:inline font-weight="bold" font-size="12pt">
                                                    <fo:leader leader-length="0pt" />Statut</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <fo:table-row text-align="right">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FF0000">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="36pt" language="FR" text-align="center" font-weight="bold">
                                                <fo:inline font-weight="bold" color="#FFFFFF" font-size="36pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="other_statut_global"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </fo:table-body>
                            </fo:table>
                        </fo:block>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
<!-- Donneur d’ordre -->                          
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="255pt" />
                            <fo:table-column column-number="2" column-width="255.05pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Donneur d’ordre</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Donneur d’ordre : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_donneur_ordre"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Maitre d’oeuvre: </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_maitre_oeuvre"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Mail du donneur d’ordre : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_email_donneur_ordre"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
<!-- Informations relatives à l’intervention -->                        
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="233.65pt" />
                            <fo:table-column column-number="2" column-width="42.55pt" />
                            <fo:table-column column-number="3" column-width="134.65pt" />
                            <fo:table-column column-number="4" column-width="99.2pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="4" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Informations relatives à l’intervention</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Société intervenante : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_societe_inter"/>  
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" font-weight="bold">
                                            <fo:leader />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Date d’intervention :</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_date_realisation_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Technicien : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_technicien_intervenant"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:leader />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Délais d’intervention :</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="other_delai_ppj_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Mail du responsable : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="ident_email_resp_intervenant"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:leader />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Temps fermeture commerciale :</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="other_indispo_commerciale_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
<!-- Informations de la station concernée -->                        
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="318.7pt" />
                            <fo:table-column column-number="2" column-width="191.35pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Informations de la station concernée
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Code d’implant : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="station_code_implant"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Surveillance TPI 24h/24 : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="station_site_tpi_24h_24"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Nom de la station : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="station_nom_station"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right" font-weight="bold">
                                            <fo:leader />
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Adresse : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="station_adresse_station"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" text-align="right">
                                            <fo:inline font-weight="bold" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Téléphone : </fo:inline>
                                            <fo:inline font-size="9pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="station_tel_station"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>
<!-- Résumé des anomalies non réparées -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="380.00pt" />
                            <fo:table-column column-number="2" column-width="42.55pt" />
                            <fo:table-column column-number="3" column-width="42.55pt" />
                            <fo:table-column column-number="4" column-width="42.55pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="4" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Résumé des anomalies NON réparées sur place (en cours de dévt...)
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Action
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Défaut majeur existant
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Réparé sur site
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Renvoi infos chez DO
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />"" Action concernée ""
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="cinit_ppj_ano_checked = 'OUI'">
                                                        <xsl:value-of select="cinit_ppj_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="cinit_ppj_ano_repare = 'OUI'">
                                                        <xsl:value-of select="cinit_ppj_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="cinit_ppj_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="cinit_ppj_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" font-weight="bold" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader />
                        </fo:block>

<!--#########################-->
<!-- FIN DE LA PREMIERE PAGE -->
<!--#########################-->

<!-- Report Contrôles initiaux -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="254.9pt" />
                            <fo:table-column column-number="2" column-width="42.55pt" />
                            <fo:table-column column-number="3" column-width="42.5pt" />
                            <fo:table-column column-number="4" column-width="42.55pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="4" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Actions et contrôles initiaux
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Action
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Début
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Fin
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Délai action
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />PPJ complété sur site
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ppj_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ppj_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ppj_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left" font-weight="bold">
                                            <fo:inline font-weight="bold" color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Fermeture commerciale piste et autres activités avec exploitant
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ferm_com_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ferm_com_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_ferm_com_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Repérage des AU du site et report pointage ci-dessous
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_au_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_au_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_au_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Repérage des DEPASS du site et report faces AD ci-dessous
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_depass_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_depass_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_depass_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Repérage au TGBT des dispositifs J/N minuterie et cellule crépusculaire
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_jn_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_jn_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_jn_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Repérage au TGBT du report TLS et du relais intrinsèque pour réactivation éclairage intérieur sur alarme intrusion
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_tls_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_tls_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_rep_tgbt_tls_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Appel CNTLS pour prévenir des tests en cours 
                                            </fo:inline>
                                            <fo:inline font-weight="bold" color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />(02 35 89 89 01)
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_appel_cntls_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_appel_cntls_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cinit_appel_cntls_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>


<!-- Report Arrêts d'urgence -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="127.35pt" />
                            <fo:table-column column-number="2" column-width="52.4pt" />
                            <fo:table-column column-number="3" column-width="45pt" />
                            <fo:table-column column-number="4" column-width="36pt" />
                            <fo:table-column column-number="5" column-width="54pt" />
                            <fo:table-column column-number="6" column-width="45pt" />
                            <fo:table-column column-number="7" column-width="45pt" />
                            <fo:table-column column-number="8" column-width="36pt" />
                            <fo:table-column column-number="9" column-width="36pt" />
                            <fo:table-column column-number="10" column-width="36pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="10" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Arrêts d’urgence</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Identification</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Désarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. extinction AD+TPI sur piste</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. absence tension au TGBT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Réarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. retour tension au TGBT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Défaut majeur existant</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Réparé sur site</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Renvoi infos chez DO</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU Caisse principale</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_princ_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_princ_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_princ_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_princ_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_princ_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_caisse_princ_start_time_str != ''">
                                                    <xsl:value-of select="au_caisse_princ_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_princ_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_caisse_princ_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_princ_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_caisse_princ_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_princ_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_caisse_princ_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_caisse_princ_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_caisse_princ_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_caisse_princ_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_caisse_princ_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="10" background-color="#C00000" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left" font-weight="bold">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Si test OK sur ARMEMENT AU Caisse Principale: </fo:inline>
                                        </fo:block>
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline color="#FFFFFF" font-size="8pt">
                                                <fo:leader leader-length="0pt" />=&gt; maintenir coupées toutes les alimentions des TPI pour éviter de perturber les phases de redémarrage des TPI avec les autres coupures AU à tester</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU Caisse secondaire 1</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec1_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec1_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec1_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec1_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec1_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_caisse_sec1_start_time_str != ''">
                                                    <xsl:value-of select="au_caisse_sec1_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec1_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec1_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec1_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec1_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec1_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec1_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_caisse_sec1_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="au_caisse_sec1_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_caisse_sec1_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_caisse_sec1_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU Caisse secondaire 2</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec2_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec2_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec2_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec2_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_caisse_sec2_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_caisse_sec2_start_time_str != ''">
                                                    <xsl:value-of select="au_caisse_sec2_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec2_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec2_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec2_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec2_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_caisse_sec2_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_caisse_sec2_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_caisse_sec2_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_caisse_sec2_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_caisse_sec2_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_caisse_sec2_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU Kiosque 1</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq1_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq1_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq1_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq1_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq1_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_kiosq1_start_time_str != ''">
                                                    <xsl:value-of select="au_kiosq1_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq1_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_kiosq1_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq1_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_kiosq1_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq1_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_kiosq1_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_kiosq1_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_kiosq1_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_kiosq1_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_kiosq1_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU Kiosque 2</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq2_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq2_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq2_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq2_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_kiosq2_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_kiosq2_start_time_str != ''">
                                                    <xsl:value-of select="au_kiosq2_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq2_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_kiosq2_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq2_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_kiosq2_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_kiosq2_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_kiosq2_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_kiosq2_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_kiosq2_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_kiosq2_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_kiosq2_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU piste VL</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_vl_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_vl_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_vl_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_vl_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_vl_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_piste_vl_start_time_str != ''">
                                                    <xsl:value-of select="au_piste_vl_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_vl_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_piste_vl_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_vl_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_piste_vl_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_vl_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_piste_vl_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_piste_vl_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_piste_vl_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_piste_vl_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_piste_vl_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU piste PL</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_pl_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_pl_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_pl_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_pl_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_piste_pl_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_piste_pl_start_time_str != ''">
                                                    <xsl:value-of select="au_piste_pl_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_pl_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_piste_pl_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_pl_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_piste_pl_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_piste_pl_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_piste_pl_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_piste_pl_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_piste_pl_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_piste_pl_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_piste_pl_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU armoire LAP</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_armoire_lap_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_armoire_lap_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_armoire_lap_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_armoire_lap_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_armoire_lap_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_armoire_lap_start_time_str != ''">
                                                    <xsl:value-of select="au_armoire_lap_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_armoire_lap_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_armoire_lap_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_armoire_lap_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_armoire_lap_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_armoire_lap_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_armoire_lap_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_armoire_lap_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_armoire_lap_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_armoire_lap_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_armoire_lap_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />AU GPL</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_gpl_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_gpl_ext_ad_tpi_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_gpl_abs_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_gpl_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="au_gpl_ret_tension_tgbt_chk"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="au_gpl_start_time_str != ''">
                                                    <xsl:value-of select="au_gpl_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_gpl_ano_checked = 'OUI'">
                                                        <xsl:value-of select="au_gpl_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_gpl_ano_repare = 'OUI'">
                                                        <xsl:value-of select="au_gpl_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="au_gpl_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="au_gpl_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="au_gpl_ano_checked = 'OUI'">
                                    <fo:table-row keep-together.within-page="always">
                                        <fo:table-cell padding-top="10pt" padding-left="5.4pt" padding-bottom="10pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="7" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="au_gpl_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="au_gpl_ano_photo_joined = 'OUI'">
                                                    <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                        <xsl:attribute name="src">
                                                            <xsl:text>url('</xsl:text>
                                                            <xsl:value-of select="au_gpl_ano_photo_url"/>
                                                            <xsl:text>')</xsl:text>
                                                        </xsl:attribute>
                                                    </fo:external-graphic>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>


<!-- Report DEPASS -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="80.75pt" />
                            <fo:table-column column-number="2" column-width="50.6pt" />
                            <fo:table-column column-number="3" column-width="52.4pt" />
                            <fo:table-column column-number="4" column-width="36pt" />
                            <fo:table-column column-number="5" column-width="53.6pt" />
                            <fo:table-column column-number="6" column-width="0.4pt" />
                            <fo:table-column column-number="7" column-width="45pt" />
                            <fo:table-column column-number="8" column-width="45pt" />
                            <fo:table-column column-number="9" column-width="36pt" />
                            <fo:table-column column-number="10" column-width="36pt" />
                            <fo:table-column column-number="11" column-width="36.05pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="5" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="9pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />DEPASS (bombonnes incendie sur pite TPI)</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="6" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" text-align="right" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="9pt">
                                                <fo:leader leader-length="0pt" />Nb de DEPASS sur site: </fo:inline>
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="depass_nb_depass_site"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Identification</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Face AD</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Désarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. absence tension au TGBT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Réarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. retour tension au TGBT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Défaut majeur existant</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Réparé sur site</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Renvoi infos chez DO</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Enlèvement des capotages</fo:inline>
                                        </fo:block>
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />pour accès contacteur</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_capots_out_checked = 'OUI'">
                                                    <xsl:value-of select="depass_capots_out_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 1</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n1_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n1_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n1_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n1_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n1_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n1_start_time_str != ''">
                                                    <xsl:value-of select="depass_n1_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n1_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n1_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n1_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n1_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n1_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n1_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n1_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n1_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n1_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n1_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 2</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n2_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n2_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n2_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n2_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n2_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n2_start_time_str != ''">
                                                    <xsl:value-of select="depass_n2_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n2_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n2_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n2_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n2_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n2_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n2_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n2_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n2_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n2_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n2_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 3</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n3_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n3_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n3_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n3_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n3_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n3_start_time_str != ''">
                                                    <xsl:value-of select="depass_n3_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n3_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n3_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n3_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n3_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n3_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n3_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n3_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n3_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n3_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n3_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 4</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n4_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n4_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n4_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n4_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n4_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n4_start_time_str != ''">
                                                    <xsl:value-of select="depass_n4_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n4_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n4_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n4_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n4_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n4_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n4_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n4_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n4_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n4_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n4_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 5</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n5_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n5_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n5_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n5_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n5_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n5_start_time_str != ''">
                                                    <xsl:value-of select="depass_n5_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n5_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n5_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n5_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n5_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n5_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n5_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n5_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n5_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n5_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n5_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 6</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n6_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n6_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n6_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n6_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n6_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n6_start_time_str != ''">
                                                    <xsl:value-of select="depass_n6_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n6_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n6_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n6_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n6_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n6_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n6_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n6_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n6_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n6_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n6_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                    </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 7</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n7_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n7_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n7_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n7_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n7_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n7_start_time_str != ''">
                                                    <xsl:value-of select="depass_n7_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n7_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n7_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n7_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n7_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n7_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n7_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n7_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n7_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n7_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n7_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 8</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n8_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n8_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n8_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n8_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n8_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n8_start_time_str != ''">
                                                    <xsl:value-of select="depass_n8_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n8_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n8_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n8_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n8_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n8_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n8_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n8_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n8_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n8_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n8_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 9</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n9_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n9_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n9_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n9_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n9_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n9_start_time_str != ''">
                                                    <xsl:value-of select="depass_n9_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n9_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n9_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n9_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n9_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n9_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n9_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n9_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n9_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n9_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">>
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n9_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />DEPASS 10</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n10_face_ad"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n10_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n10_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n10_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="depass_n10_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_n10_start_time_str != ''">
                                                    <xsl:value-of select="depass_n10_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n10_ano_checked = 'OUI'">
                                                        <xsl:value-of select="depass_n10_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n10_ano_repare = 'OUI'">
                                                        <xsl:value-of select="depass_n10_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="depass_n10_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="depass_n10_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="depass_n10_ano_checked = 'OUI'">
                                    <fo:table-row keep-with-previous="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="11" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="depass_n10_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="depass_n10_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="depass_n10_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Fermeture des capots</fo:inline>
                                        </fo:block>
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" /> et protections des DEPASS</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="2" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="depass_capots_in_checked = 'OUI'">
                                                    <xsl:value-of select="depass_capots_in_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BDC3C7" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>                        


<!-- Report Coupure Electrique Piste -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="169.85pt" />
                            <fo:table-column column-number="2" column-width="54.9pt" />
                            <fo:table-column column-number="3" column-width="36pt" />
                            <fo:table-column column-number="4" column-width="54pt" />
                            <fo:table-column column-number="5" column-width="45pt" />
                            <fo:table-column column-number="6" column-width="45pt" />
                            <fo:table-column column-number="7" column-width="36pt" />
                            <fo:table-column column-number="8" column-width="36pt" />
                            <fo:table-column column-number="9" column-width="36pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Coupure électrique piste
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Identification</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Désarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. absence tension au TGBT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Réarmement</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Vérif. retour tension sur chaque TPI</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Défaut majeur existant</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Réparé sur site</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Renvoi infos chez DO</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>

                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Action sur VIGI protection de tête « PISTE » pour simuler un arrêt de livraison électrique
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_vigi_desarm_checked = 'OUI'">
                                                    <xsl:value-of select="celec_vigi_start_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_vigi_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="celec_vigi_abs_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_vigi_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="celec_vigi_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_vigi_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="celec_vigi_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_vigi_start_time_str != ''">
                                                    <xsl:value-of select="celec_vigi_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_vigi_ano_checked = 'OUI'">
                                                        <xsl:value-of select="celec_vigi_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_vigi_ano_repare = 'OUI'">
                                                        <xsl:value-of select="celec_vigi_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_vigi_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="celec_vigi_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="celec_vigi_ano_checked = 'OUI'">
                                    <fo:table-row>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="celec_vigi_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="celec_vigi_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="celec_vigi_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>

                                <fo:table-row keep-with-next="always">
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#C00000" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" color="#FFFFFF" language="FR" text-align="left">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Remise sous tension des alimentations des TPI
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BFBFBF" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#BFBFBF" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:leader leader-length="0pt" />
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_tpi_rearm_checked = 'OUI'">
                                                    <xsl:value-of select="celec_tpi_end_time_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_tpi_key_step_checked = 'OUI'">
                                                    <xsl:value-of select="celec_tpi_ret_tension_tgbt_chk"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="celec_tpi_end_time_str != ''">
                                                    <xsl:value-of select="celec_tpi_delay_str"/>
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_tpi_ano_checked = 'OUI'">
                                                        <xsl:value-of select="celec_tpi_ano_checked"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_tpi_ano_repare = 'OUI'">
                                                        <xsl:value-of select="celec_tpi_ano_repare"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:choose>
                                                    <xsl:when test="celec_tpi_ano_renvoi_ordre = 'OUI'">
                                                        <xsl:value-of select="celec_tpi_ano_renvoi_ordre"/>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="celec_tpi_ano_checked = 'OUI'">
                                    <fo:table-row>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                            <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                    <xsl:value-of select="celec_tpi_ano_description"/>
                                                </fo:inline>
                                            </fo:block>
                                            <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <xsl:if test="celec_tpi_ano_photo_joined = 'OUI'">
                                                    <fo:inline font-size="8pt">
                                                        <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                            <xsl:attribute name="src">
                                                                <xsl:text>url('</xsl:text>
                                                                <xsl:value-of select="celec_tpi_ano_photo_url"/>
                                                                <xsl:text>')</xsl:text>
                                                            </xsl:attribute>
                                                        </fo:external-graphic>
                                                    </fo:inline>
                                                </xsl:if>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                </xsl:if>

                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>


<!-- Report Fonctionnement Bascule JOUR / NUIT -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="179.75pt" />
                            <fo:table-column column-number="2" column-width="45pt" />
                            <fo:table-column column-number="3" column-width="36pt" />
                            <fo:table-column column-number="4" column-width="54pt" />
                            <fo:table-column column-number="5" column-width="45pt" />
                            <fo:table-column column-number="6" column-width="45pt" />
                            <fo:table-column column-number="7" column-width="36pt" />
                            <fo:table-column column-number="8" column-width="36pt" />
                            <fo:table-column column-number="9" column-width="36pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="3" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Fonctionnement Bascule JOUR / NUIT</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="6" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" text-align="right" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="station_site_tpi_24h_24 = 'avec'">
                                                    &lt;Non-applicable car Site Surveillé 24h/24&gt;
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="station_site_tpi_24h_24 = 'sans'">
                                    <fo:table-row>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-weight="bold" font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Identification</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Lieu</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Début</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Fin</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />OK / KO / sans objet</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Défaut majeur existant</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Réparé sur site</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="7pt">
                                                    <fo:leader leader-length="0pt" />Renvoi infos chez DO</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Désactivation de la cellule crépusculaire pour simuler la nuit
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_desact_cell_crep_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_desact_cell_crep_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_desact_cell_crep_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_desact_cell_crep_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_desact_cell_crep_ano_checked = 'OUI'">
                                                            <xsl:value-of select="bjn_desact_cell_crep_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_desact_cell_crep_ano_repare = 'OUI'">
                                                            <xsl:value-of select="bjn_desact_cell_crep_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_desact_cell_crep_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="bjn_desact_cell_crep_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="bjn_desact_cell_crep_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="bjn_desact_cell_crep_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="bjn_desact_cell_crep_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="bjn_desact_cell_crep_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Action de bascule sur mode "Nuit" pour vérification des éclairages réglementaires
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_action_bascule_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_action_bascule_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_action_bascule_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_action_bascule_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_action_bascule_ano_checked = 'OUI'">
                                                            <xsl:value-of select="bjn_action_bascule_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_action_bascule_ano_repare = 'OUI'">
                                                            <xsl:value-of select="bjn_action_bascule_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_action_bascule_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="bjn_action_bascule_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="bjn_action_bascule_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="bjn_action_bascule_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="bjn_action_bascule_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="bjn_action_bascule_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Contrôle temporisation extinction éclairage boutique (30min)
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_ctrl_tempo_bascule_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_ctrl_tempo_bascule_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_ctrl_tempo_bascule_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_ctrl_tempo_bascule_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_ctrl_tempo_bascule_ano_checked = 'OUI'">
                                                            <xsl:value-of select="bjn_ctrl_tempo_bascule_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_ctrl_tempo_bascule_ano_repare = 'OUI'">
                                                            <xsl:value-of select="bjn_ctrl_tempo_bascule_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_ctrl_tempo_bascule_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="bjn_ctrl_tempo_bascule_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="bjn_ctrl_tempo_bascule_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="bjn_ctrl_tempo_bascule_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="bjn_ctrl_tempo_bascule_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="bjn_ctrl_tempo_bascule_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Remise en fonction de la cellule crépusculaire
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_remise_cell_crep_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_remise_cell_crep_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_remise_cell_crep_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="bjn_remise_cell_crep_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_remise_cell_crep_ano_checked = 'OUI'">
                                                            <xsl:value-of select="bjn_remise_cell_crep_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_remise_cell_crep_ano_repare = 'OUI'">
                                                            <xsl:value-of select="bjn_remise_cell_crep_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="bjn_remise_cell_crep_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="bjn_remise_cell_crep_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="bjn_remise_cell_crep_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="bjn_remise_cell_crep_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="bjn_remise_cell_crep_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="bjn_remise_cell_crep_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                </xsl:if>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>


<!-- Report Activation Eclairage boutique sur alarme intrusion -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="179.75pt" />
                            <fo:table-column column-number="2" column-width="45pt" />
                            <fo:table-column column-number="3" column-width="36pt" />
                            <fo:table-column column-number="4" column-width="54pt" />
                            <fo:table-column column-number="5" column-width="45pt" />
                            <fo:table-column column-number="6" column-width="45pt" />
                            <fo:table-column column-number="7" column-width="36pt" />
                            <fo:table-column column-number="8" column-width="36pt" />
                            <fo:table-column column-number="9" column-width="36pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="none" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="3" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Activation éclairage boutique sur alarme intrusion</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="none" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="6" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" text-align="right" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:if test="station_site_tpi_24h_24 = 'avec'">
                                                    &lt;Non-applicable car Site Surveillé 24h/24&gt;
                                                </xsl:if>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <xsl:if test="station_site_tpi_24h_24 = 'sans'">
                                    <fo:table-row>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-weight="bold" font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Identification</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Lieu</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Début</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Fin</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />OK / KO / sans objet</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Défaut majeur existant</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Réparé sur site</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="7pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Renvoi infos chez DO</fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Simulation d'intrusion sur ligne de report d'alarme
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_simu_intrus_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_simu_intrus_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_simu_intrus_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_simu_intrus_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_simu_intrus_ano_checked = 'OUI'">
                                                            <xsl:value-of select="aecl_simu_intrus_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_simu_intrus_ano_repare = 'OUI'">
                                                            <xsl:value-of select="aecl_simu_intrus_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_simu_intrus_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="aecl_simu_intrus_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="aecl_simu_intrus_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="aecl_simu_intrus_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="aecl_simu_intrus_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="aecl_simu_intrus_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                    <fo:table-row keep-with-next="always">
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />Contrôle temporisation extinction éclairage boutique (20min)
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_ctrl_tempo_eclair_start_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_ctrl_tempo_eclair_end_time_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#FFDDEB" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_ctrl_tempo_eclair_statut_step"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:value-of select="aecl_ctrl_tempo_eclair_delay_str"/>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_ctrl_tempo_eclair_ano_checked = 'OUI'">
                                                            <xsl:value-of select="aecl_ctrl_tempo_eclair_ano_checked"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_ctrl_tempo_eclair_ano_repare = 'OUI'">
                                                            <xsl:value-of select="aecl_ctrl_tempo_eclair_ano_repare"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                        <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#DEEAF6" display-align="center">
                                            <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                <fo:inline font-size="8pt">
                                                    <fo:leader leader-length="0pt" />
                                                    <xsl:choose>
                                                        <xsl:when test="aecl_ctrl_tempo_eclair_ano_renvoi_ordre = 'OUI'">
                                                            <xsl:value-of select="aecl_ctrl_tempo_eclair_ano_renvoi_ordre"/>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                </fo:inline>
                                            </fo:block>
                                        </fo:table-cell>
                                    </fo:table-row>
                                    <xsl:if test="aecl_ctrl_tempo_eclair_ano_checked = 'OUI'">
                                        <fo:table-row>
                                            <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="none" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="9" background-color="white" display-align="left">
                                                <fo:block keep-with-next="always" space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                                    <fo:inline font-size="8pt">
                                                        <fo:leader leader-length="0pt" />&#160;&#160;&#9658;&#160;Description du problème constaté&#160;&#9668;&#160;&#160; 
                                                        <xsl:value-of select="aecl_ctrl_tempo_eclair_ano_description"/>
                                                    </fo:inline>
                                                </fo:block>
                                                <fo:block space-after="10pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                                    <xsl:if test="aecl_ctrl_tempo_eclair_ano_photo_joined = 'OUI'">
                                                        <fo:inline font-size="8pt">
                                                            <fo:external-graphic margin-left="auto" margin-right="auto" content-width="scale-down-to-fit" height="100%" width="450px" scaling="uniform">
                                                                <xsl:attribute name="src">
                                                                    <xsl:text>url('</xsl:text>
                                                                    <xsl:value-of select="aecl_ctrl_tempo_eclair_ano_photo_url"/>
                                                                    <xsl:text>')</xsl:text>
                                                                </xsl:attribute>
                                                            </fo:external-graphic>
                                                        </fo:inline>
                                                    </xsl:if>
                                                </fo:block>
                                            </fo:table-cell>
                                        </fo:table-row>
                                    </xsl:if>
                                </xsl:if>
                            </fo:table-body>
                        </fo:table>
                        <fo:block page-break-before="always" space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="11pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:inline />
                        </fo:block>


<!-- Report Actions et contrôles finaux -->
                        <fo:table font-family="Arial" language="FR" start-indent="0pt" border-top-style="solid" border-top-color="black" border-top-width="0.5pt" border-left-style="solid" border-left-color="black" border-left-width="0.5pt" border-bottom-style="solid" border-bottom-color="black" border-bottom-width="0.5pt" border-right-style="solid" border-right-color="black" border-right-width="0.5pt" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:table-column column-number="1" column-width="254.9pt" />
                            <fo:table-column column-number="2" column-width="42.55pt" />
                            <fo:table-column column-number="3" column-width="42.5pt" />
                            <fo:table-column column-number="4" column-width="42.55pt" />
                            <fo:table-body start-indent="0pt" end-indent="0pt">
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="solid" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" number-columns-spanned="4" background-color="#FF0000" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="10pt" language="FR" font-weight="bold" color="#FFFFFF">
                                            <fo:inline font-weight="bold" color="#FFFFFF" font-size="10pt">
                                                <fo:leader leader-length="0pt" />Actions et contrôles finaux</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Action</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Début</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Heure Fin</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="solid" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center" font-weight="bold">
                                            <fo:inline font-weight="bold" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Délai action</fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Remise en place des plastrons sur TGBT et vérifications
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_remise_plastrons_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_remise_plastrons_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="dotted" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_remise_plastrons_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Appel CNTLS 
                                            </fo:inline>
                                            <fo:inline font-weight="bold" color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />(02 35 89 89 01) 
                                            </fo:inline>
                                            <fo:inline color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />pour demander le relevé des codes alarmes pendant le test et valider la remise en service commerciale normale du site
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_appel_fin_cntls_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_appel_fin_cntls_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_appel_fin_cntls_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" font-weight="bold" text-align="left">
                                            <fo:inline font-weight="bold" color="#FF0000" font-size="8pt">
                                                <fo:leader leader-length="0pt" />Réouverture commerciale de la station
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_reouv_com_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_reouv_com_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_reouv_com_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                                <fo:table-row>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="solid" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="none" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="white" display-align="left">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="left">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />Clôture PPJ
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_cloture_ppj_start_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_cloture_ppj_end_time_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding-top="1pt" padding-left="5.4pt" padding-bottom="0pt" padding-right="5.4pt" border-left-style="dotted" border-right-style="dotted" border-left-color="black" border-right-color="black" border-left-width="0.25pt" border-right-width="0.25pt" border-top-style="solid" border-bottom-style="dotted" border-top-color="black" border-bottom-color="black" border-top-width="0.25pt" border-bottom-width="0.25pt" background-color="#E2EFD9" display-align="center">
                                        <fo:block space-after="0pt" space-after.conditionality="retain" line-height="1.147" font-family="Arial" font-size="8pt" language="FR" text-align="center">
                                            <fo:inline font-size="8pt">
                                                <fo:leader leader-length="0pt" />
                                                <xsl:value-of select="cfin_cloture_ppj_delay_str"/>
                                            </fo:inline>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                        <fo:block space-after="8pt" space-after.conditionality="retain" line-height="1.2378041666666666" font-family="Arial" font-size="12pt" language="FR" xmlns:st1="urn:schemas-microsoft-com:office:smarttags">
                            <fo:leader leader-length="0pt" />
                        </fo:block>
                    
                        <fo:block id="IDSR3JLZDKTWW0JJJ45DOYJQZMHM0VSP3ONBQLLYKTDHDTA0ADZEDD" />

                    </fo:block>                    
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>  
</xsl:stylesheet>
