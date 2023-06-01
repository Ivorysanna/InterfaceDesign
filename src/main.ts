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


// Function to update the progress bar
function setProgress(progress: number): void {
    const progressBar: HTMLElement | null = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }
  
  // Example usage: set the progress to 50%
  setProgress(20);