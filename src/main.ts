import "./styles.css";

// make onclick handler for arrowButton
const arrowButton = document.getElementById("arrowButton");
const arrowIcon = document.getElementById("arrow");
const topNavElement = document.getElementById("topNav");

arrowButton?.addEventListener("click", () => {
    console.debug("arrowButton clicked");
    arrowIcon?.classList.toggle("rotated");
    topNavElement?.classList.toggle("expanded");
});
