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
