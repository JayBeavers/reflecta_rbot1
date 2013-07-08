# reflecta_rbot1 #

reflecta_rbot1 binds the functions animation, fire, light, pan, tilt, compressor, and valve to the rbot1 interface.  This is the Arduino library for RocketBot, a pneumatic rocket launching robot.

> _Stability: Medium_

## Calling reflecta_rbot1 from NodeJS

Simply load reflecta using

```
npm install reflecta
```

```javascript
var reflecta = require('reflecta');

reflecta.detect(function(error, boards, ports) {

    board = boards[0];

    if (board.rbot1) {
        board.rbot1.animation('1'); // play animation 1, 'moving'
    }
});
```

Reflecta will use npm to install and load this library automatically if the Arduino exposes the 'rbot1' interface.

A [simple but complete example](https://github.com/JayBeavers/node-reflecta/blob/master/samples/simple.js) can be found in the node-reflecta project.

## Release History

- 0.1.0