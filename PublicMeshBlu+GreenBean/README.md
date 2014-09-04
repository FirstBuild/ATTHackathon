Demo of MeshBlu and the FirstBuild Green Bean
===

A demo of a webapp running anywhere that communicates with another device connected on the meshblu network that is attached to a Green Bean

* ensure http-server installed (npm install http-server -g)
* in webapp directory start the webserver which hosts a file to communicate with another node in meshblu public
    * cd webapp
    * http-server
* load index.html (<http://raspberrypi.local:8080/>)
* on pi start 