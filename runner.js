var wd = require('wd');
var browser = wd.remote();

if (process.argv.length < 4) {
  console.log('Run like this: node runner.js [browser] [xhr_type]');
  console.log(' - browser: firefox, chrome, etc');
  console.log(' - xhr_type: script, xhr');
  process.exit(1);
}

var browser_type = process.argv[2],
    type = process.argv[3];

if (['script', 'xhr'].indexOf(type) === -1) {
  console.log('unknown xhr type');
  process.exit(2);
}

browser.chain()
  .init({
    browserName: browser_type
  })
  .get('http://localhost:3000/')
  .elementById(type, function(err, el) {
    browser.next('clickElement', el, function() {
      browser.next('title', function(err, title) {
        if (err) {
          console.log('error when fetching title', err);
          return;
        }

        console.log('title', title);
        browser.next('waitForElementByClassName', 'loading', 3000, function(err, el) {
          if (err) { 
            console.log(err);
          } else {
            console.log('element exists!');
          }
        });
      });
    });
  })
  .quit();
