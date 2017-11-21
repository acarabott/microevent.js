import { MicroEvent } from '../microevent.js';

class Foo {
  constructor() {}
}

MicroEvent.mixin(Foo);
const foo = new Foo();
const bar = new Foo();
foo.bind('blerg', val => console.log(`foo got blerg ${val}`));

console.log('1. You should see "foo got blerg yes" and nothing more:');

foo.trigger('blerg', 'yes');
bar.trigger('bar', 'no');

console.log('');

const c = {};
MicroEvent.mixin(c);

console.log('2. Now you should see "bar"');

c.bind('foo', bar => console.log(bar));
c.trigger('foo', 'bar');
