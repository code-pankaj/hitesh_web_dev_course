import {API_KEY} from './api.js'

document.addEventListener("DOMContentLoaded", () => {


  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const errorMessage = document.getElementById("error-message");
  const cityNameDisplay = document.getElementById('city-name');
  const temperatureDisplay = document.getElementById('temperature')
  const descriptionDisplay = document.getElementById('description')

  getWeatherButton.addEventListener("click", async () => {
    const input = cityInput.value.trim();
    if (!input) return;
    try {
        const weatherData = await fetchWeatherData(input);
        displayWeatherData(weatherData);
    } catch (error) {
        showError();
    }
  });

  async function fetchWeatherData(input){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    // console.log(typeof response);
    // console.log(response);
    
    if(!response.ok){
        throw new Error("City not found!");
    }

    const data = await response.json(); // here we converted our response in a json so we can use it 
    return data;
  }

  function displayWeatherData(data){
    console.log(data);
    const {name, main, weather} = data; // here we retrive the important properties only we need
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${main.temp}`;
    descriptionDisplay.textContent = ` Weather: ${weather[0].description}`;

    weatherInfo.classList.remove('hidden')
    errorMessage.classList.add('hidden')
  }

  function showError(){
    weatherInfo.classList.add('hidden')
    errorMessage.classList.remove('hidden')
  }
});

