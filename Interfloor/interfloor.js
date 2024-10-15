
  // Background image changing functionality
  const images = [
      'back.png', // Replace with your actual image paths
      
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
  // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Get all project items
    const projectItems = document.querySelectorAll('.project-item');
  
    // Loop through all filter buttons and add event listeners
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
        filterButtons.forEach(btn => btn.classList.add('btn-secondary'));
  
        // Add active class to the clicked button
        button.classList.add('btn-primary');
  
        // Get the filter category from the clicked button's data attribute
        const filterValue = button.getAttribute('data-filter');
  
        // Show or hide project items based on the filter value
        projectItems.forEach(item => {
          if (filterValue === 'all') {
            item.style.display = 'block'; // Show all projects
          } else {
            if (item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block'; // Show matching projects
            } else {
              item.style.display = 'none'; // Hide non-matching projects
            }
          }
        });
      });
    });
  });
  