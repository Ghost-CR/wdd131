// place.js - scripts for place.html
const temperature = 0;
const windSpeed = 15;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

const windChillOutput = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillOutput.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillOutput.textContent = "N/A";
}
