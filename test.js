function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'https://cdn.rawgit.com/hostJav/test/c0f5977a/test.js';
      head.appendChild(script);      
   }
function block() {
    var siteName = window.location.hostname;
    var blockSiteList = ["sportowefakty.wp.pl", "onet.pl", "pl-pl.facebook.com"];
    
    if (siteName.includes("sportowefakty.wp.pl"));
        window.location.replace("http://stackoverflow.com");
}

load_js();
