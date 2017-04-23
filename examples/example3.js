var page = require('webpage').create();
page.open('https://www.google.com', function(status) {
  page.onLoadFinished = function(){
      page.render("example3-search-result.png");
      phantom.exit();
  };

  if (status !== 'success') {
    console.log('Unable to access network');
    phantom.exit();
  } else {
    page.evaluate(function() {
      document.forms[0].querySelector("input[name=q]").value = "phantomjs";
      document.forms[0].submit();
    });
  }
});
