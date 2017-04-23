var page = require('webpage').create();
page.open('https://www.google.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var doc = page.evaluate(function() {
      return document;
    });
    console.log(doc);
  }
  phantom.exit();
});
