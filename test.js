console.log(window.location.hostname);
function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'https://cdn.rawgit.com/hostJav/test/c0f5977a/test.js';
      head.appendChild(script);
      console.log("load");
      console.log("load2");
   }
   load_js();
