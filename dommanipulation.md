# DOM Manipulation

[Example 1](examples/example1.js)

```
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
```
[Example 2 : Use jQuery](examples/example2.js)

```
var page = require('webpage').create();
page.open('https://www.google.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
    phantom.exit();
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
```

[Example 3 : Form Submit](examples/example3.js)

```
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
```

References:

* http://phantomjs.org/page-automation.html
* http://stackoverflow.com/questions/9246438/how-to-submit-a-form-using-phantomjs
* http://stackoverflow.com/questions/28500775/how-to-submit-a-form-with-phantomjs
