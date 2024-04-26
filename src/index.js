import "./style.css";
import fetchData from "./fetch";

const btnConfirm = document.querySelector("#btnConfirm");
const input = document.getElementById("currLocation");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnConfirm").click();
  }
});

btnConfirm.addEventListener("click", () => {
  fetchData();
});
