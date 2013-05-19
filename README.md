# Install

```
$ git clone git://github.com/can3p/selenium-bug
$ cd selenium-bug
$ make deps
$ npm install
```

Download chromedriver from the page https://code.google.com/p/chromedriver/downloads/list

# Use

Start node server:

```
node index.js
```

Start selenium:

```
java -jar selenium-server.jar
```

Launch webdriver script with different options:

```
node runner.js firefox xhr
node runner.js chrome xhr
node runner.js firefox script
node runner.js chrome script
```

See the difference between chrome and firefox while loading data with script tag (jsonp)
