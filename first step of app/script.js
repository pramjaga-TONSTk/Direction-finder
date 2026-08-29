// Get the button from HTML
const button = document.getElementById("locationBtn");

// Get the message area from HTML
const message = document.getElementById("message");

// Run this code when the button is clicked
button.addEventListener("click", function () {

    message.textContent = "Getting your location...";

    // Check whether the browser supports location
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            // SUCCESS
            function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log("Your latitude:", latitude);
                console.log("Your longitude:", longitude);

                // =================================
                // YOUR SHOP LOCATION
                // CHANGE THESE LATER
                // =================================

                const shopLatitude = 16.49552981096975 
                const shopLongitude = 80.6545121541047;

                // Create Google Maps directions URL
                const mapsURL =
                    "https://www.google.com/maps/dir/?api=1" +
                    "&origin=" + latitude + "," + longitude +
                    "&destination=" +
                    shopLatitude + "," + shopLongitude;

                message.textContent =
                    "Location found! Opening Google Maps...";

                // Open Google Maps
                window.open(mapsURL, "_blank");
            },

            // ERROR
            function (error) {

                if (error.code === 1) {
                    message.textContent =
                        "Location permission was denied.";
                }
                else if (error.code === 2) {
                    message.textContent =
                        "Your location could not be found.";
                }
                else if (error.code === 3) {
                    message.textContent =
                        "Location request timed out.";
                }
                else {
                    message.textContent =
                        "Unable to get your location.";
                }

                console.log("Location error:", error);
            }

        );

    } else {

        message.textContent =
            "Your browser does not support location.";
    }

});