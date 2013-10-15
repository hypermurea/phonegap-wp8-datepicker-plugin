/*
    {
        "file": "plugins\\com.hypermurea.datetimepicker\\datetimepicker.js",
        "id": "com.hypermurea.datetimepicker",
        "clobbers": [
            "navigator.DateTimePicker"
        ]
    },
*/
cordova.define('com.hypermurea.datetimepicker', function (require, exports, module) {

    var exec = require('cordova/exec');

    var pickerexport = {};

    /**
    * Implements DateTime picker to select a date or time. 
    * Initial value for date or time could be set via 'value' option
    * 
    * Usage examples:
    *   navigator.plugins.dateTimePicker.selectDate(success, error,  {value: new Date()});
    */


    /**
    * Open DateTime picker to select a date
    *
    * @param {Function} successCallback
    * @param {Function} errorCallback
    * @param {Object} options - additional options: 'value' - initial value for date
    */
    pickerexport.selectDate = function (successCallback, errorCallback, options) {
        if (successCallback && (typeof successCallback !== "function")) {
            console.log("DateTimePicker Error: successCallback is not a function");
            return;
        }

        if (errorCallback && (typeof errorCallback !== "function")) {
            console.log("DateTimePicker Error: errorCallback is not a function");
            return;
        }

        exec(function (res) {

            successCallback(new Date(parseFloat(res)));

        }, errorCallback, "DateTimePicker", "selectDate", options.value);
    };

    /**
    * Open DateTime picker to select a time
    *
    * @param {Function} successCallback
    * @param {Function} errorCallback
    * @param {Object} options - additional options: 'value' - initial value for time
    */
    pickerexport.selectTime = function (successCallback, errorCallback, options) {
        if (successCallback && (typeof successCallback !== "function")) {
            console.log("DateTimePicker Error: successCallback is not a function");
            return;
        }

        if (errorCallback && (typeof errorCallback !== "function")) {
            console.log("DateTimePicker Error: errorCallback is not a function");
            return;
        }

        exec(function (res) {

         successCallback(new Date(res));

        }, errorCallback, "DateTimePicker", "selectTime", options.value);
    };


    module.exports = pickerexport;

});