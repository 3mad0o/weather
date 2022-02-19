let notification= document.querySelector('.notification'),
    tempval= document.querySelector('.tempvalue'),
    tempdesc= document.querySelector('.tempdescription'),
    locationn= document.querySelector('.location');
let key ='503efd8a4fccbbcdf9883e8d6ea1deac';
let weather = {};
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setposition,showerror);

}else{
    notification.innerHTML = '<p>no geolocation in your browser</p>';

}



function setposition(position){
    let latitude =position.coords.latitude;
    
    //let latitude=-4.0468;
    //let longitude =40.8682;
    let longitude =position.coords.longitude;
    
    getweather(latitude,longitude);

    
}
function showerror(err){
    notification.innerHTML = '<p>error in your browser</p>';
}

 function getweather(latitude,longitude){
    let api ='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=503efd8a4fccbbcdf9883e8d6ea1deac';
    console.log(api);
    fetch(api)
        .then(function(response){
            let data=response.json();
            return data;
        })
        .then(function(data){
            console.log(data);
            weather.temp =Math.floor(data.main.temp-273);
            weather.desc =data.weather[0].description;
            weather.loc =data.name;
            
            
        })
        .then(function (){
            displayweather();
        })
}
function displayweather(){
    tempval.textContent=weather.temp +'c';
    tempdesc.textContent =weather.desc;
    locationn.textContent =weather.loc;
}
