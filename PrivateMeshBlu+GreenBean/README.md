Demo of a private MeshBlu and the FirstBuild Green Bean
===

A demo of a webapp running on a local network that communicates with another device connected on a private meshblu network that is attached to a Green Bean

* start meshblu server on rpi
    * cd /meshblu; ./meshstart.sh
* Create two devices for communications in the public octoblu server and note the uuid and tokens to be used in the next example 
     * curl -X POST -d "type=oven" http://raspberrypi.local/devices
     * curl -X POST -d "type=ovenclient" http://raspberrypi.local/devices
* ensure http-server installed (npm install http-server -g)
* in webapp directory start the webserver which hosts a file to communicate with another node in meshblu public
    * cd webapp
    * http-server
* load index.html (<http://raspberrypi.local:8080/>)
* on pi start the ovenlistener to receive cook mode commands (sudo node ovenlistener.js)