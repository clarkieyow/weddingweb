// Countdown Timer JavaScript
const countdownDate = new Date("Nov 2, 2025 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    // Time calculations
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "The Wedding has Happened!";
    }
}, 1000);

// Toggle the navigation menu for burger icon
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

const playButton = document.getElementById('play-btn');
const audio = document.getElementById('bg-music');
const progressBar = document.getElementById('progress-bar');
const currentTimeLabel = document.getElementById('current-time');
const totalTimeLabel = document.getElementById('total-time');
const volumeBar = document.getElementById('volume-bar');

// Play/Pause Button
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '&#10074;&#10074;'; // Change to pause icon (⏸)
  } else {
    audio.pause();
    playButton.innerHTML = '&#9654;'; // Change to play icon (►)
  }
});

// Update Progress Bar
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Update progress bar and current time label
  const progress = (currentTime / duration) * 100;
  progressBar.value = progress;
  currentTimeLabel.textContent = formatTime(currentTime);
  totalTimeLabel.textContent = formatTime(duration);
});

// Format time (convert seconds to minutes:seconds)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Change Progress when slider is moved
function changeProgress() {
  const duration = audio.duration;
  const value = progressBar.value;
  audio.currentTime = (value / 100) * duration;
}

// Volume Control
volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
});

// Wait until the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  let image1 = document.getElementById('image1');
  let image2 = document.getElementById('image2');

  // Set initial opacity for images
  image1.style.opacity = 1;
  image2.style.opacity = 0;

  // Add scroll event listener
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY; // Get current scroll position
    let windowHeight = window.innerHeight; // Height of the viewport

    // Check if scroll is past half of the window height
    if (scrollPosition > windowHeight / 2) {
      // When user scrolls down, show second image and hide the first one
      image1.style.opacity = 0;
      image2.style.opacity = 1;
    } else {
      // When user scrolls back up, show first image and hide the second one
      image1.style.opacity = 1;
      image2.style.opacity = 0;
    }
  });
});

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

// Move to the next or previous image
function moveSlide(direction) {
    currentIndex += direction;

    // Loop through the images (circular behavior)
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Calculate the position of the slider
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.qna-question'); // Select all the questions

  questions.forEach((question) => {
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling; // Get the next sibling (the answer div)
          // Toggle the display of the answer
          if (answer.style.display === "block") {
              answer.style.display = "none"; // Hide the answer
          } else {
              answer.style.display = "block"; // Show the answer
          }
      });
  });
});

window.onload = function() {
  let currentIndex = 0;  // Start with the first image
  const images = document.querySelectorAll('.carousel-image');  // Get all images in the carousel

  // Function to change the image
  function changeImage() {
      // Remove the 'active' class from all images
      images.forEach((img) => {
          img.classList.remove('active');
      });

      // Add the 'active' class to the current image
      images[currentIndex].classList.add('active');

      // Update the index to toggle between the two images
      currentIndex = (currentIndex + 1) % images.length;  // Loop back to 0 when we reach the last image
  }

  // Change the image every 4seconds
  setInterval(changeImage, 4000);

  // Initialize the slideshow by showing the first image
  changeImage();
};


