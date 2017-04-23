var page = require('webpage').create();
page.open('https://www.google.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
      var doc = page.evaluate(function() {
        return $(document);
      });
      console.log(doc);
      phantom.exit();
    });
  }
});
