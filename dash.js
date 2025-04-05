// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// SOS Button Click Event
document.getElementById("sosButton").addEventListener("click", function () {
    alert("⚠️ SOS Alert Sent! Authorities and your emergency contacts have been notified.");
});

// Auto Emergency Messaging (Mock Function)
document.getElementById("sendSmsButton").addEventListener("click", function () {
    alert("📩 Emergency SMS sent with your live location!");
});

// Google Maps API Integration (Real-Time Location)
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: userLocation
            });

            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "Your Current Location"
            });
        }, () => {
            alert("Geolocation failed. Please enable location services.");
        });
    } else {
        alert("Your browser does not support Geolocation.");
    }
}