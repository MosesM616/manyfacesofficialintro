// Wait for the page to load
window.onload = function() {
  var audio = document.getElementById('audioPlayer'); // Get the audio element

  // Ensure the audio is set to loop
  audio.loop = true;

  // Handle starting the audio on user click
  document.body.addEventListener('click', function() {
    if (audio.paused) { // Only play if the audio is paused
      var playPromise = audio.play(); // Start playing the audio when the user clicks anywhere on the page

      // If autoplay is blocked, we handle the error
      if (playPromise !== undefined) {
        playPromise.then(function() {
          console.log("Audio is playing");
        }).catch(function(error) {
          console.log("Autoplay was blocked, waiting for user interaction");
        });
      }
    }
  });
};
