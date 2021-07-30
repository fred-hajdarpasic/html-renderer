import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

const Render: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div ref={ref}>
        <div>
        <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name='viewport' content='width=device-width, initial-scale=1.0' />
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<link rel="profile" href="https://gmpg.org/xfn/11" />
<meta name="facebook-domain-verification" content="62ipxthiyuyvakpaxi3ak3t7s1btex" />
<!-- script.crazyegg.com -->
<script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0025/9116.js" async="async" ></script>

<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- This site is optimized with the Yoast SEO plugin v16.6 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Email Marketing Services - Benchmark Email</title>
	<meta name="description" content="Build beautiful, responsive emails with Benchmark&#039;s email marketing platform to engage subscribers, nurture leads, and track results." />
	<link rel="canonical" href="https://www.benchmarkemail.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Email Marketing Services - Benchmark Email" />
	<meta property="og:description" content="Build beautiful, responsive emails with Benchmark&#039;s email marketing platform to engage subscribers, nurture leads, and track results." />
	<meta property="og:url" content="https://www.benchmarkemail.com/" />
	<meta property="og:site_name" content="Benchmark Email" />
	<meta property="article:modified_time" content="2021-07-19T21:25:59+00:00" />
	<meta property="og:image" content="https://fast.wistia.com/embed/medias/fzfui2ccxh/swatch" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="1 minute" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.benchmarkemail.com/#organization","name":"Benchmark Internet Group, LLC","url":"https://www.benchmarkemail.com/","sameAs":[],"logo":{"@type":"ImageObject","@id":"https://www.benchmarkemail.com/#logo","inLanguage":"en-US","url":"https://www.benchmarkemail.com/wp-content/uploads/2019/09/benchmark-logo.svg","contentUrl":"https://www.benchmarkemail.com/wp-content/uploads/2019/09/benchmark-logo.svg","caption":"Benchmark Internet Group, LLC"},"image":{"@id":"https://www.benchmarkemail.com/#logo"}},{"@type":"WebSite","@id":"https://www.benchmarkemail.com/#website","url":"https://www.benchmarkemail.com/","name":"Benchmark Email","description":"Email Marketing Software","publisher":{"@id":"https://www.benchmarkemail.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.benchmarkemail.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"ImageObject","@id":"https://www.benchmarkemail.com/#primaryimage","inLanguage":"en-US","url":"https://fast.wistia.com/embed/medias/fzfui2ccxh/swatch","contentUrl":"https://fast.wistia.com/embed/medias/fzfui2ccxh/swatch"},{"@type":"WebPage","@id":"https://www.benchmarkemail.com/#webpage","url":"https://www.benchmarkemail.com/","name":"Email Marketing Services - Benchmark Email","isPartOf":{"@id":"https://www.benchmarkemail.com/#website"},"about":{"@id":"https://www.benchmarkemail.com/#organization"},"primaryImageOfPage":{"@id":"https://www.benchmarkemail.com/#primaryimage"},"datePublished":"2019-09-13T16:15:14+00:00","dateModified":"2021-07-19T21:25:59+00:00","description":"Build beautiful, responsive emails with Benchmark's email marketing platform to engage subscribers, nurture leads, and track results.","breadcrumb":{"@id":"https://www.benchmarkemail.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://www.benchmarkemail.com/"]}]},{"@type":"BreadcrumbList","@id":"https://www.benchmarkemail.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//cdn.jsdelivr.net' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Benchmark Email &raquo; Feed" href="https://www.benchmarkemail.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Benchmark Email &raquo; Comments Feed" href="https://www.benchmarkemail.com/comments/feed/" />
		<script>
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.benchmarkemail.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5a139abc4a6c9ff6b79fae9f5b991c83"}};
			!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style>
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='wp-block-library-css'  href='https://www.benchmarkemail.com/wp-includes/css/dist/block-library/style.min.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<link rel='stylesheet' id='wp-block-library-theme-css'  href='https://www.benchmarkemail.com/wp-includes/css/dist/block-library/theme.min.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<link rel='stylesheet' id='simple-sitemap-css-css'  href='https://www.benchmarkemail.com/wp-content/plugins/simple-sitemap/lib/assets/css/simple-sitemap.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<link rel='stylesheet' id='fl-builder-layout-13-css'  href='https://www.benchmarkemail.com/wp-content/uploads/bb-plugin/cache/13-layout.css?ver=60824e5210b628a72b923d6591f4dfb5' media='all' />
<link rel='stylesheet' id='ppress-frontend-css'  href='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/css/frontend.min.css?ver=3.1.8' media='all' />
<link rel='stylesheet' id='ppress-flatpickr-css'  href='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/flatpickr/flatpickr.min.css?ver=3.1.8' media='all' />
<link rel='stylesheet' id='ppress-select2-css'  href='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/select2/select2.min.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<link rel='stylesheet' id='blog-styles-css'  href='https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/style/blog.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<link rel='stylesheet' id='font-awesome-5-css'  href='https://www.benchmarkemail.com/wp-content/plugins/bb-plugin/fonts/fontawesome/5.13.0/css/all.min.css?ver=2.3.2.5' media='all' />
<link rel='stylesheet' id='jquery-magnificpopup-css'  href='https://www.benchmarkemail.com/wp-content/plugins/bb-plugin/css/jquery.magnificpopup.min.css?ver=2.3.2.5' media='all' />
<link rel='stylesheet' id='base-4-css'  href='https://www.benchmarkemail.com/wp-content/themes/bb-theme/css/base-4.min.css?ver=1.7.8' media='all' />
<link rel='stylesheet' id='fl-automator-skin-css'  href='https://www.benchmarkemail.com/wp-content/uploads/bb-theme/skin-609bc3c631689.css?ver=1.7.8' media='all' />
<link rel='stylesheet' id='fl-child-theme-css'  href='https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/style.css?ver=5a139abc4a6c9ff6b79fae9f5b991c83' media='all' />
<script src='https://www.benchmarkemail.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1' id='jquery-core-js'></script>
<script src='https://www.benchmarkemail.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/flatpickr/flatpickr.min.js?ver=5a139abc4a6c9ff6b79fae9f5b991c83' id='ppress-flatpickr-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/select2/select2.min.js?ver=5a139abc4a6c9ff6b79fae9f5b991c83' id='ppress-select2-js'></script>
<script type="text/javascript">
  window.Attribution=window.Attribution||[];window.Attribution.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];window.Attribution.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);window.Attribution.push(t);return window.Attribution}};for(var i=0;i<window.Attribution.methods.length;i++){var key=window.Attribution.methods[i];window.Attribution[key]=window.Attribution.factory(key)}window.Attribution.load=function(e){if(document.getElementById("attribution-js"))return;var t=document.createElement("script");t.type="text/javascript";t.id="attribution-js";t.async=true;t.src="//scripts.attributionapp.com/attribution.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)};window.Attribution.load();
      window.Attribution.projectId="QVukpufb";
    window.Attribution.page();
  </script> 
<link rel="https://api.w.org/" href="https://www.benchmarkemail.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.benchmarkemail.com/wp-json/wp/v2/pages/13" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.benchmarkemail.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.benchmarkemail.com/wp-includes/wlwmanifest.xml" /> 

<link rel='shortlink' href='https://www.benchmarkemail.com/' />
<link rel="alternate" type="application/json+oembed" href="https://www.benchmarkemail.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.benchmarkemail.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.benchmarkemail.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.benchmarkemail.com%2F&#038;format=xml" />
<link rel="icon" href="https://www.benchmarkemail.com/wp-content/uploads/2020/04/index.png" sizes="32x32" />
<link rel="icon" href="https://www.benchmarkemail.com/wp-content/uploads/2020/04/index.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.benchmarkemail.com/wp-content/uploads/2020/04/index.png" />
<meta name="msapplication-TileImage" content="https://www.benchmarkemail.com/wp-content/uploads/2020/04/index.png" />
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{577676562409309}');
  fbq('track', 'ViewContent');
</script>
<noscript>
  <img height="1" width="1" style="display:none" 
       src="https://www.facebook.com/tr?id={577676562409309}&ev=ViewContent&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
</head>
<body class="home page-template-default page page-id-13 fl-builder fl-framework-base-4 fl-preset-default fl-full-width fl-search-active fl-submenu-indicator fl-submenu-toggle" itemscope="itemscope" itemtype="https://schema.org/WebPage">
<a aria-label="Skip to content" class="fl-screen-reader-text" href="#fl-main-content">Skip to content</a><link href="https://fonts.googleapis.com/css?family=Zilla+Slab:300,400,500,700" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/style/bb-customs.css?ver=1.1" >

<script src="https://cdn.cookielaw.org/consent/a83308ea-33b2-4665-8959-48a7e4c748ec.js" type="text/javascript" charset="UTF-8"></script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '494216487421763'); // Insert your pixel ID here.
fbq('track', 'ViewContent');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=494216487421763&ev=ViewContent&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->

<!-- Start Google Optimize Code -->
<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-TQCLQQ':true});</script>	
<!-- End Google Optimize Code -->

<!-- End Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQCLQQ');</script>
<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ND8HZ5G3VK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ND8HZ5G3VK');
</script>
<!-- Start Live Chat Script  -->

<!-- *BME Script:  -->
<script type="text/javascript">
_linkedin_partner_id = "2550161";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=2550161&fmt=gif" />
</noscript>

<script>
var bmeLanguage = "";
var liveChatGroup = 47;
var liveChatText = "Live Chat";

var __lc = {};
__lc.license = 1067033;
__lc.skill = liveChatGroup;
(function() {

    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = true;
    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(lc, s);
})();

</script>
<!-- End Live Chat Script  -->

<div class="fl-page">
	<header class="fl-page-header fl-page-header-fixed fl-page-nav-right fl-page-nav-toggle-button fl-page-nav-toggle-visible-mobile">
	<div class="fl-page-header-wrap">
		<div class="fl-page-header-container container">
			<div class="fl-page-header-row row">
				<div class="col-md-12 col-lg-2 fl-page-logo-wrap">
					<div class="fl-page-header-logo">
						<a href="https://www.benchmarkemail.com/"><img loading="false" data-no-lazy="1" class="fl-logo-img" itemscope itemtype="https://schema.org/ImageObject" src="https://www.benchmarkemail.com/wp-content/uploads/2019/09/benchmark-logo.svg" data-retina="" title="" alt="Benchmark Email" /><meta itemprop="name" content="Benchmark Email" /></a>
					</div>
				</div>
				<div class="col-md-12 col-lg-10 fl-page-fixed-nav-wrap">
					<div class="fl-page-nav-wrap">
						<nav class="fl-page-nav fl-nav navbar navbar-default navbar-expand-md" aria-label="Header Menu">
							<button type="button" class="navbar-toggle navbar-toggler" data-toggle="collapse" data-target=".fl-page-nav-collapse">
								<span>Menu</span>
							</button>
							<div class="fl-page-nav-collapse collapse navbar-collapse">
								<ul id="menu-main-nav-left" class="nav navbar-nav navbar-right menu fl-theme-menu"><li id="menu-item-21263" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21263 nav-item"><a href="https://www.benchmarkemail.com/pricing/" class="nav-link">Pricing</a></li>
<li id="menu-item-43" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43 nav-item"><a href="https://www.benchmarkemail.com/features/" class="nav-link">Features</a><div class="fl-submenu-icon-wrap"><span class="fl-submenu-toggle-icon"></span></div>
<ul class="sub-menu">
	<li id="menu-item-9025" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9025 nav-item"><a href="https://www.benchmarkemail.com/features/email-builder/" class="nav-link">Email Builder</a></li>
	<li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50 nav-item"><a href="https://www.benchmarkemail.com/features/marketing-automation/" class="nav-link">Marketing Automation</a></li>
	<li id="menu-item-286" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-286 nav-item"><a href="https://www.benchmarkemail.com/features/lead-generation/" class="nav-link">Lead Generation</a></li>
	<li id="menu-item-18673" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18673 nav-item"><a href="https://www.benchmarkemail.com/features/landing-pages/" class="nav-link">Landing Pages</a></li>
	<li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47 nav-item"><a href="https://www.benchmarkemail.com/features/reporting/" class="nav-link">Reporting</a></li>
	<li id="menu-item-46" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46 nav-item"><a href="https://www.benchmarkemail.com/features/integrations/" class="nav-link">Integrations</a></li>
</ul>
</li>
<li id="menu-item-45" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45 nav-item"><a href="https://www.benchmarkemail.com/resources/" class="nav-link">Resources</a><div class="fl-submenu-icon-wrap"><span class="fl-submenu-toggle-icon"></span></div>
<ul class="sub-menu">
	<li id="menu-item-8658" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8658 nav-item"><a href="https://www.benchmarkemail.com/resources/" class="nav-link">Guides &#038; Downloads</a></li>
	<li id="menu-item-11130" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11130 nav-item"><a href="https://www.benchmarkemail.com/email-marketing/" class="nav-link">Email Marketing Guide</a></li>
	<li id="menu-item-51" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51 nav-item"><a href="https://www.benchmarkemail.com/blog/" class="nav-link">Blog</a></li>
	<li id="menu-item-151" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151 nav-item"><a href="https://www.benchmarkemail.com/customers/" class="nav-link">Customers</a></li>
	<li id="menu-item-421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-421 nav-item"><a href="https://www.benchmarkemail.com/developers/" class="nav-link">Developers</a></li>
</ul>
</li>
<li id="menu-item-232" class="for-mb menu-item menu-item-type-custom menu-item-object-custom menu-item-232 nav-item"><a href="https://ui.benchmarkemail.com/login" class="nav-link">Login</a></li>
<li id="menu-item-233" class="for-mb menu-item menu-item-type-custom menu-item-object-custom menu-item-233 nav-item"><a href="https://ui.benchmarkemail.com/register" class="nav-link">Sign Up Free</a></li>
<li id="menu-item-234" class="for-mb en-lang lang-switcher menu-item menu-item-type-custom menu-item-object-custom menu-item-234 nav-item"><a href="#" class="nav-link">EN</a></li>
</ul><div class="fl-page-nav-search">
	<a href="javascript:void(0);" class="fas fa-search" aria-label="Search" aria-expanded="false" aria-haspopup="true" id='flsearchform'></a>
	<form method="get" role="search" aria-label="Search" action="https://www.benchmarkemail.com/" title="Type and press Enter to search.">
		<input type="search" class="fl-search-input form-control" name="s" placeholder="Search" value="" aria-labelledby="flsearchform" />
	</form>
</div>
<ul id="menu-main-nav-right" class="nav navbar-nav navbar-left menu fl-theme-menu"><li id="menu-item-212" class="en-lang lang-switcher menu-item menu-item-type-custom menu-item-object-custom menu-item-212"><a href="#">EN</a></li>
<li id="menu-item-55" class="signup-btn btn linkupC menu-item menu-item-type-custom menu-item-object-custom menu-item-55"><a href="https://ui.benchmarkemail.com/register">Sign Up Free</a></li>
<li id="menu-item-56" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-56"><a href="https://ui.benchmarkemail.com/login">Login</a></li>
</ul>							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</header><!-- .fl-page-header-fixed -->
<header class="fl-page-header fl-page-header-primary fl-page-nav-right fl-page-nav-toggle-button fl-page-nav-toggle-visible-mobile" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
	<div class="fl-page-header-wrap">
		<div class="fl-page-header-container container">
			<div class="fl-page-header-row row">
				<div class="col-md-12 col-lg-2 fl-page-header-logo-col">
					<div class="fl-page-header-logo" itemscope="itemscope" itemtype="https://schema.org/Organization">
						<a href="https://www.benchmarkemail.com/" itemprop="url"><img loading="false" data-no-lazy="1" class="fl-logo-img" itemscope itemtype="https://schema.org/ImageObject" src="https://www.benchmarkemail.com/wp-content/uploads/2019/09/benchmark-logo.svg" data-retina="" title="" alt="Benchmark Email" /><meta itemprop="name" content="Benchmark Email" /></a>
											</div>
				</div>
				<div class="col-md-12 col-lg-10 fl-page-nav-col">
					<div class="fl-page-nav-wrap">
						<a href="https://ui.benchmarkemail.com/register" class="signup-link">SignUp </a>
						<nav class="fl-page-nav fl-nav navbar navbar-default navbar-expand-md" aria-label="Header Menu" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
							<button type="button" class="navbar-toggle navbar-toggler" data-toggle="collapse" data-target=".fl-page-nav-collapse">
								<span>Menu</span>
							</button>
							<div class="fl-page-nav-collapse collapse navbar-collapse">
								<ul id="menu-main-nav-left-1" class="nav navbar-nav navbar-right menu fl-theme-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21263 nav-item"><a href="https://www.benchmarkemail.com/pricing/" class="nav-link">Pricing</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-43 nav-item"><a href="https://www.benchmarkemail.com/features/" class="nav-link">Features</a><div class="fl-submenu-icon-wrap"><span class="fl-submenu-toggle-icon"></span></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9025 nav-item"><a href="https://www.benchmarkemail.com/features/email-builder/" class="nav-link">Email Builder</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50 nav-item"><a href="https://www.benchmarkemail.com/features/marketing-automation/" class="nav-link">Marketing Automation</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-286 nav-item"><a href="https://www.benchmarkemail.com/features/lead-generation/" class="nav-link">Lead Generation</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18673 nav-item"><a href="https://www.benchmarkemail.com/features/landing-pages/" class="nav-link">Landing Pages</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47 nav-item"><a href="https://www.benchmarkemail.com/features/reporting/" class="nav-link">Reporting</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46 nav-item"><a href="https://www.benchmarkemail.com/features/integrations/" class="nav-link">Integrations</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45 nav-item"><a href="https://www.benchmarkemail.com/resources/" class="nav-link">Resources</a><div class="fl-submenu-icon-wrap"><span class="fl-submenu-toggle-icon"></span></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8658 nav-item"><a href="https://www.benchmarkemail.com/resources/" class="nav-link">Guides &#038; Downloads</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11130 nav-item"><a href="https://www.benchmarkemail.com/email-marketing/" class="nav-link">Email Marketing Guide</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51 nav-item"><a href="https://www.benchmarkemail.com/blog/" class="nav-link">Blog</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151 nav-item"><a href="https://www.benchmarkemail.com/customers/" class="nav-link">Customers</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-421 nav-item"><a href="https://www.benchmarkemail.com/developers/" class="nav-link">Developers</a></li>
</ul>
</li>
<li class="for-mb menu-item menu-item-type-custom menu-item-object-custom menu-item-232 nav-item"><a href="https://ui.benchmarkemail.com/login" class="nav-link">Login</a></li>
<li class="for-mb menu-item menu-item-type-custom menu-item-object-custom menu-item-233 nav-item"><a href="https://ui.benchmarkemail.com/register" class="nav-link">Sign Up Free</a></li>
<li class="for-mb en-lang lang-switcher menu-item menu-item-type-custom menu-item-object-custom menu-item-234 nav-item"><a href="#" class="nav-link">EN</a></li>
</ul><div class="fl-page-nav-search">
	<a href="javascript:void(0);" class="fas fa-search" aria-label="Search" aria-expanded="false" aria-haspopup="true" id='flsearchform'></a>
	<form method="get" role="search" aria-label="Search" action="https://www.benchmarkemail.com/" title="Type and press Enter to search.">
		<input type="search" class="fl-search-input form-control" name="s" placeholder="Search" value="" aria-labelledby="flsearchform" />
	</form>
</div>
<ul id="menu-main-nav-right-1" class="nav navbar-nav navbar-left menu fl-theme-menu"><li class="en-lang lang-switcher menu-item menu-item-type-custom menu-item-object-custom menu-item-212"><a href="#">EN</a></li>
<li class="signup-btn btn linkupC menu-item menu-item-type-custom menu-item-object-custom menu-item-55"><a href="https://ui.benchmarkemail.com/register">Sign Up Free</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-56"><a href="https://ui.benchmarkemail.com/login">Login</a></li>
</ul>							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</header><!-- .fl-page-header -->
	<div class="fl-page-content" itemprop="mainContentOfPage">

		
<div class="fl-content-full container">
	<div class="row">
		<div class="fl-content col-md-12">
			<article class="fl-post post-13 page type-page status-publish hentry" id="fl-post-13" itemscope="itemscope" itemtype="https://schema.org/CreativeWork">

			<div class="fl-post-content clearfix" itemprop="text">
		<div class="fl-builder-content fl-builder-content-13 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="13"><div id="home" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a398" data-node="5d7ff79d8a398">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a399" data-node="5d7ff79d8a399">
			<div class="fl-col fl-node-5d7ff79d8a39a" data-node="5d7ff79d8a39a">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a39b" data-node="5d7ff79d8a39b">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h1 style="text-align: center;"><strong><span style="font-size: 48px;">Email marketing that won't slow you down</span></strong></h1>
<h3 style="text-align: center;"><span style="font-size: 30px;">Powerful tools streamlined for growth</span></h3>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ffcd0d22e5" data-node="5d7ffcd0d22e5">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ffcd10c053" data-node="5d7ffcd10c053">
			<div class="fl-col fl-node-5d7ffcd10c1be" data-node="5d7ffcd10c1be">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-html fl-node-5d805b0d37252" data-node="5d805b0d37252">
	<div class="fl-module-content fl-node-content">
		<div class="fl-html">
	<script src="https://fast.wistia.com/embed/medias/fzfui2ccxh.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div id="homepage-video" class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_fzfui2ccxh videoFoam=true autoPlay=true seo=true endVideoBehavior=loop"  style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/fzfui2ccxh/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div></div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="features" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a37f" data-node="5d7ff79d8a37f">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a387" data-node="5d7ff79d8a387">
			<div class="fl-col fl-node-5d7ff79d8a38a" data-node="5d7ff79d8a38a">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a38b" data-node="5d7ff79d8a38b">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: center;">We know time is your most precious resource. You shouldn't have to waste it fussing with complicated email platforms.</h2>
</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3f2" data-node="5d7ff79d8a3f2">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h6 style="text-align: center;">Benchmark Email makes the tools you need simple, so you can get back to building relationships, accelerating your business and raising the bar.</h6>
</div>
	</div>
</div>
	</div>
</div>
	</div>

<div class="fl-col-group fl-node-5d7ff79d8a3a0" data-node="5d7ff79d8a3a0">
			<div class="fl-col fl-node-5d7ff79d8a3a1" data-node="5d7ff79d8a3a1">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3a2 fl-animation fl-slide-in-up" data-node="5d7ff79d8a3a2" data-animation-delay="0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="1050" height="263" class="fl-photo-img wp-image-117" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-templates.png" alt="Benchmark Email Templates" itemprop="image" title="Benchmark Email Templates" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-templates.png 1050w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-templates-300x75.png 300w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-templates-768x192.png 768w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-templates-1024x256.png 1024w" sizes="(max-width: 1050px) 100vw, 1050px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a38d" data-node="5d7ff79d8a38d">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3a4" data-node="5d7ff79d8a3a4">
			<div class="fl-col fl-node-5d7ff79d8a3a5" data-node="5d7ff79d8a3a5">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3a3" data-node="5d7ff79d8a3a3">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: center;">By using Benchmark you will...</h2>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3c4" data-node="5d7ff79d8a3c4">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3c5 fl-col-group-equal-height fl-col-group-align-center fl-col-group-responsive-reversed" data-node="5d7ff79d8a3c5">
			<div class="fl-col fl-node-5d7ff79d8a3c6 fl-col-small" data-node="5d7ff79d8a3c6">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3c7" data-node="5d7ff79d8a3c7">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4 style="text-align: center;">More efficiently leverage your most valuable marketing assets: your growing audience.</h4>
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5d7ff79d8a3c8" data-node="5d7ff79d8a3c8">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start a free plan</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3c9" data-node="5d7ff79d8a3c9">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3ca fl-animation fl-fade-up audience" data-node="5d7ff79d8a3ca" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-118 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/grow-audience.png" alt="Benchmark grow audience" itemprop="image" height="1086" width="1200" title="Grow Audience" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/grow-audience.png 1200w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/grow-audience-300x272.png 300w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/grow-audience-768x695.png 768w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/grow-audience-1024x927.png 1024w" sizes="(max-width: 1200px) 100vw, 1200px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3cb" data-node="5d7ff79d8a3cb">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3d3 fl-col-group-equal-height fl-col-group-align-center" data-node="5d7ff79d8a3d3">
			<div class="fl-col fl-node-5d7ff79d8a3d4" data-node="5d7ff79d8a3d4">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3d7 fl-animation fl-fade-up time" data-node="5d7ff79d8a3d7" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-119 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/spend-less-time.png" alt="Benchmark Email Spend less time" itemprop="image" height="1066" width="1200" title="Spend less time" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/spend-less-time.png 1200w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/spend-less-time-300x267.png 300w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/spend-less-time-768x682.png 768w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/spend-less-time-1024x910.png 1024w" sizes="(max-width: 1200px) 100vw, 1200px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3d6 fl-col-small" data-node="5d7ff79d8a3d6">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3d5" data-node="5d7ff79d8a3d5">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4 style="text-align: center;">Spend less time on setup and customization.</h4>
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5d7ff79d8a3ea" data-node="5d7ff79d8a3ea">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start your automation</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3d8" data-node="5d7ff79d8a3d8">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3d9 fl-col-group-equal-height fl-col-group-align-center fl-col-group-responsive-reversed" data-node="5d7ff79d8a3d9">
			<div class="fl-col fl-node-5d7ff79d8a3da fl-col-small" data-node="5d7ff79d8a3da">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3db" data-node="5d7ff79d8a3db">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4 style="text-align: center;">Invest in stronger relationships with your contacts.</h4>
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5d7ff79d8a3eb" data-node="5d7ff79d8a3eb">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start your automation</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3dc" data-node="5d7ff79d8a3dc">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3dd fl-animation fl-fade-up relationship" data-node="5d7ff79d8a3dd" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-120 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/stronger-relationships.png" alt="Benchmark Email Stronger Relations" itemprop="image" height="1252" width="1200" title="Stronger Relations" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/stronger-relationships.png 1200w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/stronger-relationships-288x300.png 288w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/stronger-relationships-768x801.png 768w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/stronger-relationships-981x1024.png 981w" sizes="(max-width: 1200px) 100vw, 1200px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3de" data-node="5d7ff79d8a3de">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3df fl-col-group-equal-height fl-col-group-align-center" data-node="5d7ff79d8a3df">
			<div class="fl-col fl-node-5d7ff79d8a3e0" data-node="5d7ff79d8a3e0">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3e1 fl-animation fl-fade-up marketing" data-node="5d7ff79d8a3e1" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21414 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16.png" alt="robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16" itemprop="image" height="1050" width="1200" title="robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16" srcset="https://www.benchmarkemail.com/wp-content/uploads/2020/09/robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16.png 1200w, https://www.benchmarkemail.com/wp-content/uploads/2020/09/robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16-300x263.png 300w, https://www.benchmarkemail.com/wp-content/uploads/2020/09/robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16-1024x896.png 1024w, https://www.benchmarkemail.com/wp-content/uploads/2020/09/robust-email-marketing-tool_30b406c4a4421f958f8acd230975cd16-768x672.png 768w" sizes="(max-width: 1200px) 100vw, 1200px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3e2 fl-col-small" data-node="5d7ff79d8a3e2">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3e3" data-node="5d7ff79d8a3e3">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4 style="text-align: center;">Have access to a robust email marketing tool.</h4>
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5d7ff79d8a3ec" data-node="5d7ff79d8a3ec">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start a free plan</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3e4" data-node="5d7ff79d8a3e4">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3e5 fl-col-group-equal-height fl-col-group-align-center fl-col-group-responsive-reversed" data-node="5d7ff79d8a3e5">
			<div class="fl-col fl-node-5d7ff79d8a3e6 fl-col-small" data-node="5d7ff79d8a3e6">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3e7" data-node="5d7ff79d8a3e7">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4 style="text-align: center;">Reach your goals faster.</h4>
</div>
	</div>
</div>
<div class="fl-module fl-module-button fl-node-5d7ff79d8a3ed" data-node="5d7ff79d8a3ed">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start a free plan</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3e8" data-node="5d7ff79d8a3e8">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3e9 fl-animation fl-fade-up faster" data-node="5d7ff79d8a3e9" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-122 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/reach-goals-faster.png" alt="Benchmark Email Marketing" itemprop="image" height="1150" width="1200" title="Reach Goals Faster" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/reach-goals-faster.png 1200w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/reach-goals-faster-300x288.png 300w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/reach-goals-faster-768x736.png 768w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/reach-goals-faster-1024x981.png 1024w" sizes="(max-width: 1200px) 100vw, 1200px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="stats" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a38e" data-node="5d7ff79d8a38e">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a393" data-node="5d7ff79d8a393">
			<div class="fl-col fl-node-5d7ff79d8a394" data-node="5d7ff79d8a394">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a395" data-node="5d7ff79d8a395">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: center;">Stop wasting time on email marketing and get back to business in three steps:</h2>
</div>
	</div>
</div>
	</div>
</div>
	</div>

<div class="fl-col-group fl-node-5d7ff79d8a38f fl-col-group-equal-height fl-col-group-align-top" data-node="5d7ff79d8a38f">
			<div class="fl-col fl-node-5d7ff79d8a390 fl-col-small" data-node="5d7ff79d8a390">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3ef" data-node="5d7ff79d8a3ef">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="148" height="148" class="fl-photo-img wp-image-131" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-step-1.png" alt="Step 1" itemprop="image" title="Step 1"  />
					</div>
	</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a397" data-node="5d7ff79d8a397">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h5 style="text-align: center;">Sign up free</h5>
<p style="text-align: center;">Try out Benchmark for free to discover how simple effective email marketing can be.</p>
</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a391 fl-col-small" data-node="5d7ff79d8a391">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3a9" data-node="5d7ff79d8a3a9">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="148" height="148" class="fl-photo-img wp-image-132" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-step-2.png" alt="Step 2" itemprop="image" title="Step 2"  />
					</div>
	</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3a7" data-node="5d7ff79d8a3a7">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h5 style="text-align: center;">Explore your options</h5>
<p style="text-align: center;">Benchmark has a suite of tools designed to keep up with your drive, including contact management.</p>
</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a392 fl-col-small" data-node="5d7ff79d8a392">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3a8" data-node="5d7ff79d8a3a8">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="148" height="148" class="fl-photo-img wp-image-133" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/benchmark-step-3.png" alt="Step 3" itemprop="image" title="Step 3"  />
					</div>
	</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3a6" data-node="5d7ff79d8a3a6">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h5 style="text-align: center;">Expanding your business</h5>
<p style="text-align: center;">Take full advantage of Benchmark’s capabilities by upgrading to Pro and see just how much using the right tools can impact your company’s growth.</p>
</div>
	</div>
</div>
	</div>
</div>
	</div>

<div class="fl-col-group fl-node-5d7ff79d8a3ac" data-node="5d7ff79d8a3ac">
			<div class="fl-col fl-node-5d7ff79d8a3ad" data-node="5d7ff79d8a3ad">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-button fl-node-5d7ff79d8a3ee" data-node="5d7ff79d8a3ee">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start a free plan</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="clients" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a396" data-node="5d7ff79d8a396">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3b7" data-node="5d7ff79d8a3b7">
			<div class="fl-col fl-node-5d7ff79d8a3b8 fl-col-small" data-node="5d7ff79d8a3b8">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3be" data-node="5d7ff79d8a3be">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="98" height="60" class="fl-photo-img wp-image-125" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/Audi.png" alt="Audi logo" itemprop="image" title="Audi"  />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3b9 fl-col-small" data-node="5d7ff79d8a3b9">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3bf remax" data-node="5d7ff79d8a3bf">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21418 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/remax_b39e0f74248fb4dd1f8cba2426d97585.png" alt="remax_b39e0f74248fb4dd1f8cba2426d97585" itemprop="image" height="40" width="220" title="remax_b39e0f74248fb4dd1f8cba2426d97585"  />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3ba fl-col-small" data-node="5d7ff79d8a3ba">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3c0 depot" data-node="5d7ff79d8a3c0">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21417 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/office-depot_5c23f74c58e9134fa5024d83b13997d7.png" alt="office-depot_5c23f74c58e9134fa5024d83b13997d7" itemprop="image" height="36" width="314" title="office-depot_5c23f74c58e9134fa5024d83b13997d7" srcset="https://www.benchmarkemail.com/wp-content/uploads/2020/09/office-depot_5c23f74c58e9134fa5024d83b13997d7.png 314w, https://www.benchmarkemail.com/wp-content/uploads/2020/09/office-depot_5c23f74c58e9134fa5024d83b13997d7-300x34.png 300w" sizes="(max-width: 314px) 100vw, 314px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3bb fl-col-small" data-node="5d7ff79d8a3bb">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3c1" data-node="5d7ff79d8a3c1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21415 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/marriott_885c3f9c86fe5b70db86bf3ebddd0bbc.png" alt="marriott_885c3f9c86fe5b70db86bf3ebddd0bbc" itemprop="image" height="60" width="216" title="marriott_885c3f9c86fe5b70db86bf3ebddd0bbc"  />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3bc fl-col-small" data-node="5d7ff79d8a3bc">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3c2" data-node="5d7ff79d8a3c2">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21419 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/bbva_a9b4ab09741880716817e7160aaa6ead.png" alt="bbva_a9b4ab09741880716817e7160aaa6ead" itemprop="image" height="48" width="160" title="bbva_a9b4ab09741880716817e7160aaa6ead"  />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3bd fl-col-small" data-node="5d7ff79d8a3bd">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3c3" data-node="5d7ff79d8a3c3">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" class="fl-photo-img wp-image-21416 size-full" src="https://www.benchmarkemail.com/wp-content/uploads/2020/09/curves_29fd77804de24a934f89cfb727425cf4.png" alt="curves_29fd77804de24a934f89cfb727425cf4" itemprop="image" height="60" width="172" title="curves_29fd77804de24a934f89cfb727425cf4"  />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div id="services" class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a3ae" data-node="5d7ff79d8a3ae">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a3af fl-col-group-equal-height fl-col-group-align-top" data-node="5d7ff79d8a3af">
			<div class="fl-col fl-node-5d7ff79d8a3b0 fl-col-small" data-node="5d7ff79d8a3b0">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5d7ff79d8a3b1" data-node="5d7ff79d8a3b1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-png">
				<img loading="lazy" width="443" height="448" class="fl-photo-img wp-image-123" src="https://www.benchmarkemail.com/wp-content/uploads/2019/08/profile-photo.png" alt="Benchmark Client testimonial" itemprop="image" title="Testimonial" srcset="https://www.benchmarkemail.com/wp-content/uploads/2019/08/profile-photo.png 443w, https://www.benchmarkemail.com/wp-content/uploads/2019/08/profile-photo-297x300.png 297w" sizes="(max-width: 443px) 100vw, 443px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5d7ff79d8a3b2 fl-col-small fl-col-has-cols" data-node="5d7ff79d8a3b2">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3b3" data-node="5d7ff79d8a3b3">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: center;"><span style="font-size: 30px;">Testimonials</span></h2>
</div>
	</div>
</div>

<div class="fl-col-group fl-node-5f32af5578a71 fl-col-group-nested" data-node="5f32af5578a71">
			<div class="fl-col fl-node-5f32af5578b3f fl-col-small fl-visible-desktop-medium" data-node="5f32af5578b3f">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-photo fl-node-5f32af659b327" data-node="5f32af659b327">
	<div class="fl-module-content fl-node-content">
		<div class="fl-photo fl-photo-align-center" itemscope itemtype="https://schema.org/ImageObject">
	<div class="fl-photo-content fl-photo-img-svg">
				<img loading="lazy" class="fl-photo-img wp-image-21309 size-thumbnail" src="https://www.benchmarkemail.com/wp-content/uploads/2020/08/quote-icon.svg" alt="quote-icon" itemprop="image" height="150" width="150" height="300" width="300" height="1024" width="1024" height="33" width="46" title="quote-icon" srcset="https://www.benchmarkemail.com/wp-content/uploads//2020/08/quote-icon.svg 150w, https://www.benchmarkemail.com/wp-content/uploads//2020/08/quote-icon.svg 300w, https://www.benchmarkemail.com/wp-content/uploads//2020/08/quote-icon.svg 1024w" sizes="(max-width: 150px) 100vw, 150px" />
					</div>
	</div>
	</div>
</div>
	</div>
</div>
			<div class="fl-col fl-node-5f32af5578b43" data-node="5f32af5578b43">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3f1" data-node="5d7ff79d8a3f1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h4><span style="font-size: 24px;">Benchmark has made it a quick and easy process for us to create professional-looking emails to keep our customers and interested parties engaged.”</span></h4>
<p>— Gavin Wieske, Marketing Manager | <a href="https://www.runsandbox.com/">Sandbox</a></p>
</div>
	</div>
</div>
	</div>
</div>
	</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
<div class="fl-row fl-row-full-width fl-row-bg-color fl-node-5d7ff79d8a38c" data-node="5d7ff79d8a38c">
	<div class="fl-row-content-wrap">
						<div class="fl-row-content fl-row-fixed-width fl-node-content">
		
<div class="fl-col-group fl-node-5d7ff79d8a39c" data-node="5d7ff79d8a39c">
			<div class="fl-col fl-node-5d7ff79d8a39d" data-node="5d7ff79d8a39d">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a39e" data-node="5d7ff79d8a39e">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<h2 style="text-align: center;">Don't lose any more of your valuable time with setup and customization.</h2>
</div>
	</div>
</div>
<div class="fl-module fl-module-rich-text fl-node-5d7ff79d8a3b4" data-node="5d7ff79d8a3b4">
	<div class="fl-module-content fl-node-content">
		<div class="fl-rich-text">
	<p style="text-align: center;">Sign up for Benchmark today to stay focused on the reason you're using email marketing in the first place: bringing your vision to life.</p>
</div>
	</div>
</div>
	</div>
</div>
	</div>

<div class="fl-col-group fl-node-5d7ff79d8a3b5" data-node="5d7ff79d8a3b5">
			<div class="fl-col fl-node-5d7ff79d8a3b6" data-node="5d7ff79d8a3b6">
	<div class="fl-col-content fl-node-content">
	<div class="fl-module fl-module-button fl-node-5d7ff79d8a3f0 fl-animation fl-bounce" data-node="5d7ff79d8a3f0" data-animation-delay="0.0" data-animation-duration="1">
	<div class="fl-module-content fl-node-content">
		<div class="fl-button-wrap fl-button-width-auto fl-button-center">
			<a href="https://ui.benchmarkemail.com/register" target="_self" class="fl-button" role="button">
							<span class="fl-button-text">Start a free plan</span>
					</a>
</div>
	</div>
</div>
	</div>
</div>
	</div>
		</div>
	</div>
</div>
</div>	</div><!-- .fl-post-content -->
	
</article>

<!-- .fl-post -->
		</div>
	</div>
</div>

</div>

<!-- .fl-page-content -->
<footer class="fl-page-footer-wrap" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
  <div class="fl-page-footer-widgets">
	<div class="fl-page-footer-widgets-container container">
		<div class="fl-page-footer-widgets-row row">
		<div class="col-md-3 col-lg-3 fl-page-footer-widget-col fl-page-footer-widget-col-1"><aside id="text-2" class="fl-widget widget_text"><h4 class="fl-widget-title">GET IN TOUCH</h4>			<div class="textwidget"><p><a href="https://www.benchmarkemail.com/contact/">Contact Us</a></p>
<div class="button-lang">
<p><button class="buttonC">Call Us<img src="https://www.benchmarkemail.com/wp-content/uploads/2019/09/ButtonDropdownCaret.svg" alt="" /></button></p>
<ul class="bb-dd">
<li><strong>INTL</strong> 001.562.252.3789</li>
<li><strong>USA</strong> 800.430.4095</li>
<li><strong>UK</strong> (+44) 20 3695 2266</li>
</ul>
</div>
</div>
		</aside></div><div class="col-md-3 col-lg-3 fl-page-footer-widget-col fl-page-footer-widget-col-2"><aside id="nav_menu-4" class="fl-widget widget_nav_menu"><h4 class="fl-widget-title">Company</h4><div class="menu-footer-company-container"><ul id="menu-footer-company" class="menu"><li id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"><a href="https://www.benchmarkemail.com/about-us/">About</a></li>
<li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a href="https://www.benchmarkemail.com/partners/">Partners</a></li>
<li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="https://www.benchmarkemail.com/blog/">Blog</a></li>
<li id="menu-item-23082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23082"><a href="https://www.benchmarkemail.com/product-updates/">Product Updates</a></li>
</ul></div></aside></div><div class="col-md-3 col-lg-3 fl-page-footer-widget-col fl-page-footer-widget-col-3"><aside id="nav_menu-3" class="fl-widget widget_nav_menu"><h4 class="fl-widget-title">For Customers</h4><div class="menu-footer-customers-container"><ul id="menu-footer-customers" class="menu"><li id="menu-item-83" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83"><a href="https://www.benchmarkemail.com/features/integrations/">Integrations</a></li>
<li id="menu-item-9089" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9089"><a href="https://www.benchmarkemail.com/video-tutorials/">Video Tutorials</a></li>
<li id="menu-item-82" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-82"><a href="https://kb.benchmarkemail.com/">Get Help</a></li>
<li id="menu-item-84" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-84"><a href="https://ui.benchmarkemail.com/login">Login</a></li>
</ul></div></aside></div><div class="col-md-3 col-lg-3 fl-page-footer-widget-col fl-page-footer-widget-col-4">
		<aside id="recent-posts-3" class="fl-widget widget_recent_entries">
		<h4 class="fl-widget-title">Recent Posts</h4>
		<ul>
											<li>
					<a href="https://www.benchmarkemail.com/blog/wellness-brands-emails/">3 Wellness Brands Sending Great Emails</a>
									</li>
											<li>
					<a href="https://www.benchmarkemail.com/blog/why-having-an-email-marketing-strategy-is-important/">How To Implement an Effective and Seamless Email Marketing Strategy</a>
									</li>
											<li>
					<a href="https://www.benchmarkemail.com/blog/transactional-emails/">Everything You Need to Know About Transactional Emails</a>
									</li>
					</ul>

		</aside><aside id="text-4" class="fl-widget widget_text">			<div class="textwidget"><p><a href="/co-branded-marketing-opportunities/">Partner &#038; Contribute</a></p>
</div>
		</aside></div>		</div>
	</div>
</div><!-- .fl-page-footer-widgets -->
<div class="fl-page-footer">
	<div class="fl-page-footer-container container">
		<div class="fl-page-footer-row row">
			<div class="col-md-6 col-lg-6 text-left clearfix"><div class="fl-page-footer-text fl-page-footer-text-1"><img src="https://www.benchmarkemail.com/wp-content/uploads/2019/09/benchmarkisotype.svg" alt="" width="30px"><span  style="display: inline-block;vertical-align: middle;color: #AFB1B5;margin: 0 0 0 15px;"> <a href="https://www.benchmarkemail.com/sitemap/">Sitemap</a>. <a href="https://www.benchmarkemail.com/privacy-policy/">Privacy</a> &  <a href="https://www.benchmarkemail.com/terms-of-use/">Terms </a> © Benchmark Internet Group  </span> <span>   <a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action">      粤ICP备14001834号 </a></span>
<p style="display: inline-block;vertical-align: middle;color: #AFB1B5;margin: -40px 0 0 45px;">Benchmark Email® is a registered trademark of Benchmark Internet Group, LLC</p></div></div>			<div class="col-md-6 col-lg-6 text-right clearfix"><div class="fl-page-footer-text fl-page-footer-text-2"> <div class="social">
	<a href="https://twitter.com/benchmarkemail" class="bme_tw"></a>
	<a href="https://www.facebook.com/BenchmarkEmail" class="bme_fb" ></a>
	<a href="https://www.youtube.com/user/benchmarkemail" class="bme_yt"></a>
	<a href="https://www.instagram.com/benchmarkemail/" class="bme_ins"></a>
</div>
<div class="button-lang"><button class="buttonL">English <img src="https://www.benchmarkemail.com/wp-content/uploads/2019/09/ButtonDropdownCaret.svg" alt=""></button>
<ul class="bb-dd-lang">
<li><a href="/es/">Español</a></li>
                    <li><a href="/de/">Deutsch</a></li>
                    <li><a href="/tw/">繁體中文</a></li>
                    <li><a href="/cn/">简体中文</a></li>
                    <li><a href="/jp/">日本語</a></li>
                    <li><a href="/it/">Italiano</a></li>
                    <li><a href="/br/">Português (BR)</a></li>
                    <li><a href="/fr/">Français</a></li>
</ul>
</div></div></div>		</div>
	</div>
</div><!-- .fl-page-footer -->
</footer>
</div>
<div class="overlay overlay-scale overlay-langauges">
      <div class="row">
          <div class="overlay-container">
              <a class="right overlay-close"><img src="https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/images/close-icon.svg" alt=""></a>
              <div class="large-12 large-centered columns">
                  <div class="row">
                      <h3>Select your language</h3>
                  </div>
              </div>
              <ul class="more-lang">
                  <li><a href="#" class="current" style="background-image:url(https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/images/check-mark.svg)"
>English</a></li>
                  <li><a href="/es/">Español</a></li>
                  <li><a href="/de/">Deutsch</a></li>
                  <li><a href="/tw/">繁體中文</a></li>
                  <li><a href="/cn/">简体中文</a></li>
                  <li><a href="/jp/">日本語</a></li>
                  <li><a href="/it/">Italiano</a></li>
                  <li><a href="/br/">Português (BR)</a></li>
                  <li><a href="/fr/">Français</a></li>
              </ul>
          </div>
      </div>
  </div>

</body>
<!-- .fl-page -->
<script charset="ISO-8859-1" src="https://fast.wistia.com/static/popover-v1.js"></script>
 <script type="text/javascript">
  Attribution.track("Viewed Home Page", {"noninteraction":true}, {"library":"attribution-wordpress"});
    
</script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/bb-plugin/js/jquery.waypoints.min.js?ver=2.3.2.5' id='jquery-waypoints-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/uploads/bb-plugin/cache/13-layout.js?ver=60824e5210b628a72b923d6591f4dfb5' id='fl-builder-layout-13-js'></script>
<script id='geoip-detect-js-js-extra'>
var geoip_detect = {"options":{"ajaxurl":"https:\/\/www.benchmarkemail.com\/wp-admin\/admin-ajax.php","default_locales":["en","en"],"do_body_classes":false,"do_shortcodes":false,"cookie_name":"geoip-detect-result","cookie_duration_in_days":1}};
</script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/geoip-detect//js/dist/frontend.1115d690.js?ver=4.1.0' id='geoip-detect-js-js'></script>
<script id='ppress-frontend-script-js-extra'>
var pp_ajax_form = {"ajaxurl":"https:\/\/www.benchmarkemail.com\/wp-admin\/admin-ajax.php","confirm_delete":"Are you sure?","deleting_text":"Deleting...","deleting_error":"An error occurred. Please try again.","nonce":"b2fb3e5948","disable_ajax_form":"false"};
</script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/wp-user-avatar/assets/js/frontend.min.js?ver=3.1.8' id='ppress-frontend-script-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/js/jquery.validate.js?ver=1.0.3' id='jquery-validate-js'></script>
<script src='https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js?ver=1.0.1' id='additional-methods-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/themes/bb-theme-child/js/bme_custom.js?ver=1.1.1' id='bme_custom-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/bb-plugin/js/jquery.ba-throttle-debounce.min.js?ver=2.3.2.5' id='jquery-throttle-js'></script>
<script src='https://www.benchmarkemail.com/wp-content/plugins/bb-plugin/js/jquery.magnificpopup.min.js?ver=2.3.2.5' id='jquery-magnificpopup-js'></script>
<script id='fl-automator-js-extra'>
var themeopts = {"medium_breakpoint":"992","mobile_breakpoint":"768"};
</script>
<script src='https://www.benchmarkemail.com/wp-content/themes/bb-theme/js/theme.min.js?ver=1.7.8' id='fl-automator-js'></script>
<script src='https://www.benchmarkemail.com/wp-includes/js/wp-embed.min.js?ver=5a139abc4a6c9ff6b79fae9f5b991c83' id='wp-embed-js'></script>



<script >
  jQuery(".buttonC").click(function(){
  jQuery(".bb-dd").toggleClass("open");
});

jQuery(".buttonL").click(function(){
  jQuery(".bb-dd-lang").toggleClass("open");
});

jQuery( "#open-cat" ).click(function() {
  jQuery( "#category-dd-options" ).toggleClass('open');
});

jQuery('.lang-switcher').click(function(event) {
    jQuery('.overlay-langauges').addClass('open');
    jQuery('body').addClass('open-langmodal');
});

jQuery('.overlay-close').click(function(event) {
    jQuery('.overlay-langauges').removeClass('open');
    jQuery('body').removeClass('open-langmodal');
   
});
</script>


</html>
` }}/>
        
        </div>
      </div>
      <button onClick={onButtonClick}>Click me</button>
    </>
  );
};

export default Render;
