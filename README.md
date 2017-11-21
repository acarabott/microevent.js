# MicroEvent.js

_MicroEvent.js_ is a event emitter library which provides the
[observer pattern](http://en.wikipedia.org/wiki/Observer_pattern) to javascript objects.

This is an ES2015 class + module fork of Jerome Etienne's [original project](https://github.com/jeromeetienne/microevent.js). Props to Jerome!

## How to Use It

You need a single file [microevent.js](https://github.com/acarabott/microevent.js/raw/master/microevent.js).
Include it as a module

```js
import { MicroEvent } from './MicroEvent.js';
```

Now suppose you got a class `Foobar`, and you wish it to support the observer partern. do

```js
MicroEvent.mixin(Foobar)
```

Node.js requires you to remove the ES2015 `export` and add this add the bottom of the file to export

```
// export in common js
if(module !== undefined && ('exports' in module)) {
    module.exports  = MicroEvent;
}
```

The repository contains an [example in browser](https://github.com/acarabott/microevent.js/blob/master/examples/example.html)

## Example

First we define the class which will use MicroEvent.js. This is a ticker, it
triggers 'tick' event every second, passing the current date as an argument.

```js
class Ticker {
    constructor() {
        setInterval(() => {
            this.trigger('tick', new Date());
        }, 1000);
    }
}
```

We mixin `MicroEvent` into `Ticker` and we are all set.

```
MicroEvent.mixin(Ticker);
```

Now lets actually use the `Ticker` Class. First, create the object.

```js
const ticker = new Ticker();
```

then bind our `tick` event with its date parameter

```js
ticker.bind('tick', (date) => {
    console.log('notified date', date);
});
```

And you will see this output:

```
notified date Tue, 22 Mar 2011 14:43:41 GMT
notified date Tue, 22 Mar 2011 14:43:42 GMT
...
```

### Running the example

At the time of writing only Chrome supports modules natively. You will want to use a transpiler such as Babel or Webpack to support other browsers.

You will also need to use a web server to avoid CORS issues, I like [live-server](https://github.com/tapio/live-server)

## Conclusion

MicroEvent.js is available on github <a href='https://github.com/acarabott/microevent.js'>here</a>
under <a href='https://github.com/acarabott/microevent.js/blob/master/MIT-LICENSE.txt'>MIT license</a>.
If you hit bugs, fill issues on github.
Feel free to fork, modify and have fun with it :)
