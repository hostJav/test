console.log(window.location.hostname);
function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'https://raw.githubusercontent.com/hostJav/test/master/test.js';
      head.appendChild(script);
      console.log("load");
   }
   load_js();
