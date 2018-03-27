# check-val

## a small function to check values on an object

```js
  const check = require('./lib/core');

  let r = { one: 'demo', two: 'foo', three: 'bar' }

  let q = {one: 'demo'};

  console.log(check(r, q)); 
  // returns true; 
```
