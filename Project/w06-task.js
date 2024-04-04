/* Function to fetch weather data */
async function fetchWeather(location) {
    const apiKey = 'personal_monteiro_nelsonjorge:5zLJE1Pb3h';
    const apiUrl = `https://api.meteomatics.com/weather?parameter=temperature_2m,wind_speed_10m,precipitation_sum&lat=${latitude}&lon=${longitude}&start=now&end=2022-01-01T00:00:00Z&interval=1h&model=icon-ep`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Basic ${btoa(apiKey)}`
            }
        });
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
    document.getElementById('temperature').textContent = `Temperature: ${weatherData.temperature_2m}°C`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${weatherData.wind_speed_10m} m/s`;
    document.getElementById('precipitation').textContent = `Precipitation: ${weatherData.precipitation_sum} mm`;
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

/* Event listener for Enter key press on the input field */
document.getElementById('locationInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); /* Prevent default form submission */
        document.getElementById('getWeatherButton').click(); /* Simulate click on the button */
    }
});
