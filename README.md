ATTHackathon
============

Notes and more for the ATT Las Vegas Hackathon  

#Raspberry PI Image
The rpi image contains the following:  
    * home/pi/firstbuild/node_modules/green-bean - everything needed to connect to appliances via the green bean module     */home/pi/gateblu - Octoblu Gateway
    */home/pi/hardware_examples - Scripts on how to use Raspberry Pi GPIO with octoblu 
 
    * /home/pi/firstbuild/ATTHackathon - scripts related to GreenBean and AllJoyn|octoblu IoT stuffs  (enough to run demos in this repo)
    * samba for editing files directly from Mac and Linux hosts  
    * mdns to easily discover the rpi's ip (ping raspberrypi.local)  
    
#Setting up Raspberry Pi

[OctoBlu Tutorial for image set up](https://github.com/virgilvox/octoblu_tutorials/tree/master/meshblu/pi)

    

#Apps  


###AllJoynVanilla
A vanilla app that demos an android device communicating with a node.js device

###GreenBeanVanilla  
A vanilla app demoing a few examples of GreenBean communications

###PublicMeshBlu+GreenBean  
Demo of a client communicating with a node.js device connected to the internets and starting a cook mode 

###PrivateMeshBlu+GreenBean  
Demo of a node.js client communicating with a node.js device connected to a local meshblu server and starting a cook mode 

###AllJoyn+GreenBean
Discovery of GreenBean on network and sending a cook mode

#GreenBean Overview  
### FirstBuild GreenBean Project  
<https://firstbuild.com/mylescaley/greenbean-maker-module>

### Configuration
Raspberry PI's pre-configured with support for the Green Bean will be provided.

### Green Bean Links
Documentation for Main NPM Package* (already installed on preconfigured devices):  
<https://github.com/GEMakers/green-bean>

Documentation for Device Plugins for Hacakathon (already installed:  
<https://github.com/GEMakers/gea-plugin-range>  
<https://github.com/GEMakers/gea-plugin-refrigerator>  
<https://github.com/GEMakers/gea-plugin-laundry>  


* if installing the green-bean npm module manually on raspian then you may encounter a missing header file when trying to compile the node-hid package. Install the correct header with: sudo apt-get install libusb-1.0-0.dev
