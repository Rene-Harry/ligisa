const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// About

// Get all the about-heading elements
const aboutHeadings = document.querySelectorAll('.about-heading');

// Add click event listener to each about-heading element
aboutHeadings.forEach((heading) => {
  // Get the corresponding paragraph element and image element
  const paragraph = heading.nextElementSibling;
  const image = heading.querySelector('img');

  // Hide the paragraph initially
  paragraph.style.display = 'none';

  // Add click event listener to the about-heading element
  heading.addEventListener('click', () => {
    // Toggle the display of the paragraph when the about-heading is clicked
    if (paragraph.style.display === 'none') {
      // Change the image source to up-arrow.png
      image.src = '../images/up-arrow.png';
      // Show the paragraph with a smooth transition
      paragraph.style.display = 'block';
      paragraph.style.transition = 'opacity 2s ease';
      // Fade in the image with a smooth transition
      image.style.opacity = '0';
      image.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        image.style.opacity = '1';
      }, 0);
    } else {
      // Change the image source back to arrow-down.png
      image.src = '../images/arrow-down.png';
      // Hide the paragraph with a smooth transition
      paragraph.style.display = 'none';
      paragraph.style.transition = 'opacity 2s ease';
      // Fade out the image with a smooth transition
      image.style.opacity = '0';
      image.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        image.style.opacity = '1';
      }, 0);
    }
  });
});

var button = document.querySelector('.learn-more');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
    // Navigate to the about.html file
    window.location.href = 'about.html';
  });
