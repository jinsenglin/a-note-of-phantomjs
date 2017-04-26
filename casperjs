# Navigate and Capture

Install

```
npm install -g casperjs
```

Quick Start

```
var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
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
