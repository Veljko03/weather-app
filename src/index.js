import "./style.css";
import fetchData from "./fetch";

const btnConfirm = document.querySelector("#btnConfirm");

btnConfirm.addEventListener("click", () => {
  fetchData();
});
