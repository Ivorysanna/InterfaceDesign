import "./styles/main.scss";
import "./styles/progressbar.scss";
import "./styles/card.scss";
import "./styles/bg.scss";

// make onclick handler for arrowButton
const arrowButton = document.getElementById("arrowButton");
const arrowIcon = document.getElementById("arrow");
const topNavElement = document.getElementById("topNav");

arrowButton?.addEventListener("click", () => {
    console.debug("arrowButton clicked");
    arrowIcon?.classList.toggle("rotated");
    topNavElement?.classList.toggle("expanded");
});

const progressBar: HTMLElement | null = document.querySelector(".progress-bar");

// Function to update the progress bar
function setProgress(progress: number): void {
    if (!progressBar) return;

    progressBar.style.width = progress + "%";
}

// Example usage: set the progress to 50%
setProgress(20);
