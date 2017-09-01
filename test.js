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
    
    if (siteName.includes("pl-pl.facebook.com"));
        window.location.replace("http://stackoverflow.com");
}
block();


