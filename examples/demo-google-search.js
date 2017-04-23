/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */

"use strict";
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    page.render("2-failed.png");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 250); //< repeat check every 250ms
};

var page = require('webpage').create();

// Open Google Search
page.open("https://www.google.com", function (status) {
    // Check for page load success
    if (status !== "success") {
        console.log("Unable to access network");
        page.render("1-failed.png");
    } else {
        page.render("1-ok.png");

        // Uses jQuery to manipulate DOM
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", function() {

            // Wait for 'search-textbox' to be visible
            waitFor(function() {
                // Check in the page if a specific element is now visible
                return page.evaluate(function() {
                    var form = document.forms[0];
                    var textbox = form.querySelector("input[name=q]");
                    return textbox !== null;
                });
            }, function() {
               console.log("The search textbox should be visible now.");
               page.render("2-ok.png");
               phantom.exit();
            });

       });
    }
});
