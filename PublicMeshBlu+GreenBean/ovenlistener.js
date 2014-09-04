var skynet = require('skynet');
var greenBean = require("green-bean");

var ovenuuid = "52885d81-31f3-11e4-805c-a33b31204b7a";
var oventoken = "4x8opql2wzq9qkt9y709jvbgwgclerk9";

greenBean.connect("range", function(range) {
    range.upperOven.cookMode.read(function(value) {
        console.log("upper oven cook mode is:", value);
    });

    range.upperOven.cookMode.subscribe(function(value) {
        console.log("upper oven cook mode changed:", value);
    });


});

var conn = skynet.createConnection({
    "uuid": ovenuuid,
    "token": oventoken,
    "server": "skynet.im",
    "port": 80
});

conn.on('ready', function(data){
    console.log('ready');
    console.log(data);

    // Send and receive messages
    conn.message({
        "devices": "*",
        "payload": {
            "status":"ready"
        }
    });

    conn.on('message', function(message){
        console.log('message received')
        console.log(message);
        console.log(message.payload.cook);
        range.upperOven.cookMode.write(message.payload.cook);
    });

    conn.whoami({"uuid":ovenuuid}, function (data) {
        console.log("whoami status");
        console.log(data);
    });

});

