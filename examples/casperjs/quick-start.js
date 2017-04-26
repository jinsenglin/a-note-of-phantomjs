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
