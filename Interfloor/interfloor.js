  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');

          projectItems.forEach(item => {
              if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Background image changing functionality
  const images = [
      '20.jpg', // Replace with your actual image paths
      'image12.jpg',
      'image18.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg',
      'image7.jpg'
  ];

  let currentIndex = 0;

  function changeBackground() {
      const heroSection = document.getElementById('hero');
      currentIndex = (currentIndex + 1) % images.length; // Cycle through images
      heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  // Change background every 5 seconds
  setInterval(changeBackground, 5000);

  // Initial background set
  document.addEventListener('DOMContentLoaded', function() {
      const heroSection = document.getElementById('hero');
      heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  });