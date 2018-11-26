const PromiseToBenchmark = require('bluebird')
let promise = PromiseToBenchmark.resolve('done')

async function execute() {
  for (let i = 0; i < 1000000; i++) {
    let res = await promise;
    promise = await new PromiseToBenchmark(resolve => resolve(res))
  }
  console.log(promise)
}

execute()