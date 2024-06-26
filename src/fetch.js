export default async function fetchData() {
  try {
    const cityInput = document
      .querySelector("#currLocation")
      .value.toLowerCase();

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f4c412f72ca6495f9e1114320242404&q=${cityInput}&aqi=no`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error("Enter a valid city name");
    }
    const data = await response.json();
    const cityName = data.location.name;
    const countryName = data.location.country;
    const temperature = data.current.temp_c;
    const fl = data.current.feelslike_c;
    const wi = data.current.wind_kph;
    const cond = data.current.condition.text;
    const icon = data.current.condition.icon;

    console.log(data);
    makeHtmlForNewCity(cityName, countryName, temperature, fl, wi, cond, icon);
  } catch (error) {
    alert(error);
  }
}

function makeHtmlForNewCity(
  cityName,
  countryName,
  temperature,
  fl,
  wi,
  cond,
  icon
) {
  const displayCity = document.querySelector(".cityName");
  const temp = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feelsLike");
  const wind = document.querySelector(".wind");
  const weatherCondition = document.querySelector(".condition");
  const pic = document.querySelector("#conPic");

  displayCity.textContent = `${cityName}, ${countryName}`;
  temp.textContent = `${temperature}°C`;
  feelsLike.textContent = `Feels like ${fl}°C`;
  wind.textContent = "Wind: " + wi + "km/h";
  weatherCondition.textContent = cond;
  pic.src = icon;
  pic.style.display = "block";
}
