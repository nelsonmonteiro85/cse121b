/* Function to fetch weather data from OpenWeatherMap API */
async function fetchWeather(location) {
    const apiKey = '5e2383d42104288b4745132157c02b09';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        // Check for successful HTTP status codes
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
        }

        // Parse the response JSON
        const weatherData = await response.json();

        // Check if the response contains the expected weather data properties
        if (!weatherData.main || !weatherData.wind) {
            throw new Error('Weather data format is invalid');
        }

        return weatherData;
    } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
    }
}

/* Function to display weather information */
function displayWeather(weatherData) {
    document.getElementById('temperature').textContent = `Temperature: ${weatherData.main.temp}°C`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    document.getElementById('precipitation').textContent = `Humidity: ${weatherData.main.humidity}%`;
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
            showLoadingSpinner(); // Show spinner when fetching data
            const weatherData = await fetchWeather(location);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error.message);
            alert('Failed to fetch weather data. Please try again later.');
        } finally {
            hideLoadingSpinner(); // Hide spinner after data is fetched
        }
    } else {
        alert('Please enter a location.');
    }
});

/* Event listener for Enter key press on the input field */
document.getElementById('locationInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default form submission
        document.getElementById('getWeatherButton').click(); // Simulate click on the button
    }
});
