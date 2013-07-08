// rbot1 interface for the RocketBot Rocket Base Arduino project
// Implements node.js API for the RocketBot's controller.

module.exports = function(reflecta, interfaceStart) {
  return {

    animation : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value,interfaceStart] );
    },

    fire : function() {
      reflecta.sendFrame( [interfaceStart + 1] );
    },

    light : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value, interfaceStart + 2] );
    },

    pan : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value,interfaceStart + 3] );
    },

    tilt : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value,interfaceStart + 4] );
    },

    compressor : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value,interfaceStart + 5] );
    },

    valve : function(value) {
      reflecta.sendFrame( [reflecta.FunctionIds.pushArray, 1, value,interfaceStart + 6] );
    }
  };
};