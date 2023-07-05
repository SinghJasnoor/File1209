window.onload = function() {
  const text = document.getElementById('text');
  const sound = document.getElementById('sound');

  // Play sound
  sound.play();

  // Fade-in effect
  text.style.opacity = 0;
  let opacity = 0;
  const fadeInterval = setInterval(function() {
    opacity += 0.01;
    text.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 10);
};