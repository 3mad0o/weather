let notification= document.querySelector('.notification'),
    tempval= document.querySelector('.tempvalue'),
    theimg =document.querySelector('.theimg'),
    tempdesc= document.querySelector('.tempdescription'),
    tempdescp= document.querySelector('.tempdescp'),
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
            weather.loc =data.name +'/'+data.sys.country;
            weather.image=data.weather[0].icon;
            
            
        })
        .then(function (){
            displayweather();
        })
}
function displayweather(){
    tempval.textContent=weather.temp +'c';
    tempdescp.textContent =weather.desc;
    locationn.textContent =weather.loc ;
    theimg.innerHTML='<img src=\'https://openweathermap.org/img/wn/'+weather.image+'@2x.png\'>';
   // https://openweathermap.org/img/wn/'+weather.image+'@2x.png
}
