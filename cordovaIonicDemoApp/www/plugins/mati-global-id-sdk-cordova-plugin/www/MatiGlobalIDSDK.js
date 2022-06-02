cordova.define("mati-global-id-sdk-cordova-plugin.MatiGlobalIDSDK", function(require, exports, module) {
   var exec = require("cordova/exec");

    exports.coolMethod = function(arg0, success, error) {
      exec(success, error, "MatiGlobalIDSDK", "coolMethod", [arg0]);
    };

    exports.showMatiFlow = function(arg0, success, error) {
      exec(success, error, "MatiGlobalIDSDK", "showMatiFlow", [arg0]);
    };
    
    exports.setMatiCallback = function(success, error) {
      exec(success, error, "MatiGlobalIDSDK", "setMatiCallback", []);
    };
});
