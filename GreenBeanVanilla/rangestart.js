var greenBean = require("green-bean");

greenBean.connect("range", function(range) {
    range.upperOven.cookMode.read(function(value) {
        console.log("upper oven cook mode is:", value);
    });

    range.upperOven.cookMode.subscribe(function(value) {
        console.log("upper oven cook mode changed:", value);
    });

    range.upperOven.cookMode.write({
        mode: 18,
        cookTemperature: 350,
        cookHours: 1,
        cookMinutes: 0
    });
});
