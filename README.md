# Introduction

Screen capture commands:

* capturejs --uri `<url>`
* cd `DeckTape Installation` && phantomjs decktape.js --screenshots `<url>`
* pageres `<url>` `<resolution>`

References:

* http://phantomjs.org/screen-capture.html
* http://phantomjs.org/related-projects.html
* https://github.com/superbrothers/capturejs
* https://github.com/astefanutti/decktape
* https://github.com/sindresorhus/pageres-cli

---

Install screen capture commands:

* npm install -g capturejs
* curl -L https://github.com/astefanutti/decktape/archive/v1.0.0.tar.gz | tar -xz --exclude phantomjs
* npm install -g pageres-cli

NOTE:

* Use NodeJS v4.8.0
* Use PhantomJS v1.9.8 (v2.1.1 causes `capturejs` to fail)
* To build the forked version of PhantomJS for DeckTape, see https://github.com/astefanutti/decktape#build

---

Examples

`capturejs --uri https://www.google.com --output google.com.png` throws NETWORK_ERR: XMLHttpRequest Exception 101: A network error occurred in synchronous requests

`phantomjs decktape.js --screenshots www.google.com` throws Error: Cannot find module 'printer'

`pageres www.google.com 1024x768` generates google.com-1024x768.png

---

Troubleshooting

Problem: ETWORK_ERR: XMLHttpRequest Exception 101: A network error occurred in synchronous requests

Solution: use PhantomJS v1.9.8

Reference: http://stackoverflow.com/questions/34210455/node-4-2-0-phantom-stdout-network-err-xmlhttprequest-exception-101-a-network
