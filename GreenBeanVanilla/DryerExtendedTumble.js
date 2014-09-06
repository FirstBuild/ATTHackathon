var gea = require("gea-sdk");
var adapter = require("gea-adapter-usb");

var app = gea.configure({
    address: 0xcb
});

app.bind(adapter, function(bus){

    // Subscribe to the "End of Cycle" event
	bus.subscribe({
		source: 0xcb,
        destination: 0x24,
        erd: 0x2002
	});
	
	bus.on("publish", function(erd) {
		// Enable the "remote start" feature
		bus.write({
			source: 0xcb,
			destination: 0x24,
			erd: 0x201E
			data: [0x01]
		});
		
		// Turn on the "extended tumble" feature
		bus.write({
			source: 0xcb,
			destination: 0x24,
			erd: 0x201B
			data: [0x01]
		});
	});
});
