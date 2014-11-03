<?php

$header = '<head>
            <title>testing_ground</title>

            <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="author" content="thoroc">
            <meta name="description" content="">

            <!-- Dont forget to set your site up: http://google.com/webmasters -->
            <meta name="google-site-verification" content="" />

            <!-- Who owns the content of this site? -->
            <meta name="Copyright" content="" />

            <!--  Mobile Viewport
            http://j.mp/mobileviewport & http://davidbcalhoun.com/2010/viewport-metatag
            device-width : Occupy full width of the screen in its current orientation
            initial-scale = 1.0 retains dimensions instead of zooming out if page height > device height
            maximum-scale = 1.0 retains dimensions instead of zooming in if page width < device width (wrong for most sites)
            -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="icon/favicon.ico">

            <!-- concatenate and minify for production -->
            <link rel="stylesheet" href="../assets/css/reset.css" />
            <link rel="stylesheet" href="../assets/css/style.css" />

            <!-- Lea Verou Prefix Free, lets you use un-prefixed properties in your CSS files -->
            <script src="../assets/js/libs/prefixfree.min.js"></script>

            <!-- This is an un-minified, complete version of Modernizr.
                 Before you move to production, you should generate a custom build that only has the detects you need. -->
            <script src="../assets/js/libs/modernizr-2.7.1.dev.js"></script>

            <!-- Application-specific meta tags -->
            <!-- Windows 8: see http://msdn.microsoft.com/en-us/library/ie/dn255024%28v=vs.85%29.aspx for details -->
            <meta name="application-name" content="" />
            <meta name="msapplication-TileColor" content="" />
            <meta name="msapplication-TileImage" content="" />
            <meta name="msapplication-square150x150logo" content="" />
            <meta name="msapplication-square310x310logo" content="" />
            <meta name="msapplication-square70x70logo" content="" />
            <meta name="msapplication-wide310x150logo" content="" />
            <!-- Twitter: see https://dev.twitter.com/docs/cards/types/summary-card for details -->
            <meta name="twitter:card" content="">
            <meta name="twitter:site" content="">
            <meta name="twitter:title" content="">
            <meta name="twitter:description" content="">
            <meta name="twitter:url" content="">
            <!-- Facebook (and some others) use the Open Graph protocol: see http://ogp.me/ for details -->
            <meta property="og:title" content="" />
            <meta property="og:description" content="" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />

            <link rel="stylesheet" href="css/main.css" type="text/css">
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        </head>';

$body = '<body>
            <div class="wrapper"><!-- not needed? up to you: http://camendesign.com/code/developpeurs_sans_frontieres -->
                <article>
                    <h1>Article Header</h1>
                    <p data-lorem="2p"></p>
                    <p data-lorem="2p"></p>
                </article>
                <article>
                    <h2>Article Subhead</h2>
                    <p data-lorem="2p"></p>
                    <p data-lorem="2p"></p>
                </article>
                <footer>
                    <p><small>&copy; Copyright Your Name Here 2013. All Rights Reserved.</small></p>
                </footer>
            </div>

            <!-- Grab Google CDNs jQuery. fall back to local if necessary -->
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            <script>window.jQuery || document.write( "<script src=\'../assetsjs/libs/jquery-1.11.0.min.js\'>\x3C/script>" )</script>

            <!-- this is where we put our custom functions -->
            <!-- dont forget to concatenate and minify if needed -->
            <script src="../assets/js/functions.js"></script>
            <script src="../assets/js/lorem.min.js"></script>
            <script src="../assets/js/fonts.js"></script>

            <!-- Asynchronous google analytics; this is the official snippet.
                 Replace UA-XXXXXX-XX with your sites ID and uncomment to enable.

            <script>

              var _gaq = _gaq || [];
              _gaq.push(["_setAccount", "UA-XXXXXX-XX"]);
              _gaq.push(["_trackPageview"]);

              (function() {
                var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
                ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);
              })();

            </script>
            -->
        </body>';

$html = '<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<!--
    HTML5 Reset: https://github.com/murtaugh/HTML5-Reset
    Free to use
-->

<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
    <!-- the "no-js" class is for Modernizr. -->
    <html>
        ' . $header . $body . '

    </html>';



