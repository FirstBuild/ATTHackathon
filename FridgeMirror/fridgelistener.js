var skynet = require('skynet');
var greenBean = require("green-bean");

var fridgeuuid = "52885d81-31f3-11e4-805c-a33b31204b7a";
var fridgetoken = "4x8opql2wzq9qkt9y709jvbgwgclerk9";

//curl -X GET http://skynet.im/devices/52885d81-31f3-11e4-805c-a33b31204b7a --header "skynet_auth_uuid: 52885d81-31f3-11e4-805c-a33b31204b7a" --header "skynet_auth_token: 4x8opql2wzq9qkt9y709jvbgwgclerk9"

greenBean.connect("refrigerator", function(refrigerator) {

    var conn = skynet.createConnection({
        "uuid": fridgeuuid,
        "token": fridgetoken,
        "server": "skynet.im",
        "port": 80
    });

    conn.on('ready', function(data){
        console.log('ready');
        console.log(data);

        refrigerator.doorState.subscribe(function (value) {
            console.log("door:", value);
            conn.update({
                "uuid": fridgeuuid,
                "token": fridgetoken,
                "payload": {
                    "doorstatus":value.doorState
                }
            });
        });

        conn.on('message', function(message){
            console.log('message received')
            console.log(message);
            console.log(message.payload.cook);
        });

        conn.whoami({"uuid":fridgeuuid}, function (data) {
            console.log("whoami status");
            console.log(data);
        });

    });

});


