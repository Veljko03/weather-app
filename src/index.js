import "./style.css";

console.log("hi here barrr");

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f4c412f72ca6495f9e1114320242404&q=London&aqi=no`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }
    const data = await response.json();
  } catch (error) {
    alert(error);
  }
}
