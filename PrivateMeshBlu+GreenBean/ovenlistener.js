var skynet = require('skynet');
var greenBean = require("green-bean");

var ovenuuid = "00efda00-33df-11e4-b97b-a71351dfe500";
var oventoken = "000tvfnx54gf83erk94uaeatbpvz33di";

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
    "server": "127.0.0.1",
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

