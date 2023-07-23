document.addEventListener("DOMContentLoaded", function() {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    const nextButton = document.getElementById("nextButton");
  
    nextButton.addEventListener("click", function() {
      video1.classList.add("hidden");
      video2.classList.remove("hidden");
      video2.querySelector("iframe").src = "tj.mp4";
    });
  });
  