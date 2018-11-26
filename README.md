# Node Performance and Architecture Notes

## Promise Performance

The `promises` directory contains a benchmarking script that compares bluebird to native promises in the current running version of Node. The script can be customized to validate with multiple versions of node, if you're using `nvm`, `nodenv`, or something similar.

```
cd promises
npm run benchmark
```

Resources:
- [original source of benchmarking code](https://softwareengineering.stackexchange.com/questions/331991/are-native-promises-still-slower-in-node-vs-libraries-such-as-bluebird)
- [a GitHub discussion re. bluebird, async/await, and native promises](https://github.com/petkaantonov/bluebird/issues/1434)