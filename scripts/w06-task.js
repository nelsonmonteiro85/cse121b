/* Function to fetch weather data */
async function fetchWeather(location) {
    const apiKey = '5e2383d42104288b4745132157c02b09';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
    }
}

/* Function to display weather information */
function displayWeather(weatherData) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <h2>Weather for ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}

/* Function to show loading spinner */
function showLoadingSpinner() {
    document.getElementById('loader').style.display = 'block';
}

/* Function to hide loading spinner */
function hideLoadingSpinner() {
    document.getElementById('loader').style.display = 'none';
}

/* Event listener for the button click */
document.getElementById('getWeatherButton').addEventListener('click', async function() {
    const location = document.getElementById('locationInput').value.trim();
    if (location) {
        try {
            showLoadingSpinner(); /* Show spinner when fetching data */
            const weatherData = await fetchWeather(location);
            displayWeather(weatherData);
            document.title = `Weather for ${location}`;
        } catch (error) {
            console.error(error.message);
            alert('Failed to fetch weather data. Please try again later.');
        } finally {
            hideLoadingSpinner(); /* Hide spinner after data is fetched */
        }
    } else {
        alert('Please enter a location.');
    }
});

/* Call the function to hide loading spinner on page load */
window.addEventListener('DOMContentLoaded', hideLoadingSpinner);
