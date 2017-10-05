function block() {
      var siteName = window.location.hostname;     
     if (siteName.indexOf("pl-pl.facebook.com") !== -1 || siteName.indexOf("sportowefakty.wp.pl") !== -1 || siteName.indexOf("onet.pl") !== -1)
          window.location.replace("https://stackoverflow.com");
  }
 block();
