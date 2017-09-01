function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'https://rawgit.com/hostJav/test/master/test.js';
      head.appendChild(script);      
   }
function block() {
    var siteName = window.location.hostname;
    var blockSiteList = ["sportowefakty.wp.pl", "onet.pl", "pl-pl.facebook.com"];     
    if (siteName.indexOf("pl-pl.facebook.com") !== -1 || siteName.indexOf("sportowefakty.wp.pl") !== -1 || siteName.indexOf("onet.pl") !== -1)
        window.location.replace("http://stackoverflow.com");
}
block();



