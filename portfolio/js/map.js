

let map = L.map('map').setView([51.2136, 4.43352], 16);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            var greenIcon = L.icon({
                iconUrl: 'assets/logo.png',
                iconSize: [70, 85],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76]
            });

            L.marker([51.2136, 4.43352], { icon: greenIcon })
                .addTo(map)
                .bindPopup('Moorkensplein 1, Borgerhout');