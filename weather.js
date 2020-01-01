
var search = document.getElementById("search");

//events
search.addEventListener("keyup",(e) => {
    if(e.keyCode === 13) {
        var getCityName = e.target.value;
    }
    getWeather(getCityName);//calling function
});

//keycodes value
//backspace-8  ,tab-9, enter-13, shift-16

function getWeather(getCityName) {
    console.log(getCityName);
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=dea7ed3385496111413ab4f73e00baae`;
    
    window
    .fetch(weatherapi)
    .then(data => {
        data
        .json()
        .then(weather => {
            var output= "";
            console.log(weather);
            console.log(weather.coord.lon);//longitude
            console.log(weather.coord.lat);//latitude
            //array here
            var weatherData = weather.weather;
            //console.log(weatherData);
            var date = new Date();

            for(let x of weatherData) {
               
                // console.log(x);
                // console.log(x.id);
                // console.log(x.name);
                // console.log(x.description);
                // console.log(x.icon);
                // console.log(x.main);

                output += `
                <div class="mt-4 weatherBlock">
                    <div class="card-body1">
                        <h1>${weather.name}</h1>
                        <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                        <p><span>temp:</span>
                        <span class="temp">${weather.main.temp}&deg;c</span></p>
                        <span class="des float-left">${x.description}</span>
                        <span class="des float-right">${x.main}</span>
                        
                        
                    </div>
                </div>
                    
                    
                `;
                document.getElementById("template").innerHTML = output;;
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
