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

---

[form-post.js](examples/casperjs/form-post.js)

```
var casper = require('casper').create({
	verbose: true,
	logLevel: 'debug',
});

casper.start().thenOpen('http://localhost/form/handler/api', {
	method: 'post',
	headers: {
		'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
	},
	data: "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c1\"\r\n\r\nv1\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c2\"\r\n\r\nv2\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c3\"\r\n\r\nv3\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c4\"\r\n\r\nv4\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c5\"\r\n\r\nv5\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c6\"\r\n\r\nv6\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"c7\"\r\n\r\nv7\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--"
}, function(resp) {
	this.echo("POST request has been sent.");
	this.echo(resp.status);
	require('utils').dump(this.page.plainText);
});

casper.run();
```
