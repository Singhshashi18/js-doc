   // const Apikey = "8c3ab979a2a38ded1825ad7267449eac"
// const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector("#btn1");
// async function checkWeather(city) {
//     const response = await fetch(Apiurl + city+ `&appid=${Apikey}`);
//     let data = await response.json();
//     console.log(data); 
    
//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=data.main.temp + " C";
//     document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
//     document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
    
// }
// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// })

// const Apikey = "8c3ab979a2a38ded1825ad7267449eac";
// const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector("#btn1");

// async function checkWeather(city) {
//     try {
//         const response = await fetch(`${Apiurl}${city}&appid=${Apikey}`);
//         if (!response.ok) {
//             throw new Error("City not found!");
//         }

//         const data = await response.json();
//         console.log(data);

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = data.main.temp + " °C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
//     } catch (error) {
//         console.error("Error:", error.message);
//         alert(error.message);
//     }
// }

// searchBtn.addEventListener("click", () => {
//     const city = searchBox.value.trim();
//     if (!city) {
//         alert("Please enter a city name!");
//         return;
//     }
//     checkWeather(city);
// });



const Apikey = "8c3ab979a2a38ded1825ad7267449eac";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#btn1");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        // Fetch the weather data
        const response = await fetch(`${Apiurl}${encodeURIComponent(city)}&appid=${Apikey}`);
        
        // Check if the response is valid
        if (!response.ok) {
            throw new Error("City not found. Please check the spelling or try another city.");
        }

        // Parse the JSON response
        const data = await response.json();
        console.log(data);

        // Update the DOM with weather details
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main==="Clouds"){
            weathericon.src="Allimages/cloudy.jpg";
    
        }else if(data.weather[0].main==="Clear"){
            weathericon.src="Allimages/sunny.jpg";
    
        }else if(data.weather[0].main==="Rain"){
            weathericon.src="Allimages/rainy.jpg";
    
        }else if(data.weather[0].main==="Drizzle"){
            weathericon.src="Allimages/drizzle.jpg";
    
        }
    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
    
}

// Add event listener for search button
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    checkWeather(city);
});
