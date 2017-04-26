# Navigate and Capture

Install

```
npm install -g casperjs
```

[quick-start.js](examples/casperjs/quick-start.js)

```
var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
	this.echo('First Page: ' + this.getTitle());
	this.capture('page1.png', {
		     top: 0,
		     left: 0,
		     width: 1024,
		     height: 768
	});
});

casper.thenOpen('http://phantomjs.org', function() {
	this.echo('Second Page: ' + this.getTitle());
	this.capture('page2.png', {
		top: 0,
		left: 0,
		width: 1024,
		height: 768
	});
});

casper.run();
```

Run

```
casperjs quick-start.js
```

My Versions
* nodejs 4.8.0
* phantomjs 2.1.1
* casperjs 1.1.3

Methods
* start http://docs.casperjs.org/en/latest/modules/casper.html#start
* open http://docs.casperjs.org/en/latest/modules/casper.html#open
* capture http://docs.casperjs.org/en/latest/modules/casper.html#capture
* run http://docs.casperjs.org/en/latest/modules/casper.html#run
