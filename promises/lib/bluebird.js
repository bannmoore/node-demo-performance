const PromiseToBenchmark = require('bluebird')
let promise = PromiseToBenchmark.resolve('done')

for (let i = 0; i < 1000000; i++) {
  promise = promise.then(res => new PromiseToBenchmark(resolve => resolve(res)))
}

promise.then(() => console.log)

