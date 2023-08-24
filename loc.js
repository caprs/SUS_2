var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();



    let h2 = document.querySelector('h2');
    var map;
    
    function success(pos){
        console.log(pos.coords.latitude, pos.coords.longitude);
        h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
    
        if (map === undefined) {
            map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 20);
        } else {
            map.remove();
            map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 20);
        }
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
            .bindPopup('Eu estou aqui!')
            .openPopup();
    }
    
    function error(err){
        console.log(err);
    }
    
    var watchID = navigator.geolocation.watchPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000
    });
    
    //navigator.geolocation.clearWatch(watchID);