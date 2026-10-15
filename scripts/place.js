// Static course sample values for Porto-Novo; keep these aligned with the HTML.
const temperatureC = 29;
const windSpeedKmh = 12;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#wind-chill");

temperatureElement.textContent = `${temperatureC} °C`;
windSpeedElement.textContent = `${windSpeedKmh} km/h`;

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperatureC, windSpeedKmh).toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.querySelector("#last-modified").innerHTML = `Last modified: <time datetime="${lastModified.toISOString()}">${lastModified.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
})}</time>`;
