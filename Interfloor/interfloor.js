
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
  document.addEventListener("DOMContentLoaded", function () {
    // Select all filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
  
    // Select all project items
    const projectItems = document.querySelectorAll(".project-item");
  
    // Add event listener to each filter button
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Get the data-filter value of the clicked button
        const filter = this.getAttribute("data-filter").trim(); // Trim in case of any extra spaces
  
        // If the filter is 'all', display all projects
        if (filter === "all") {
          projectItems.forEach((item) => {
            item.style.display = "block"; // Show all projects
          });
        } else {
          // Otherwise, display the matching projects and hide others
          projectItems.forEach((item) => {
            // Check if the project item's data-category matches the filter
            if (item.getAttribute("data-category") === filter) {
              item.style.display = "block"; // Show matching project
            } else {
              item.style.display = "none"; // Hide non-matching projects
            }
          });
        }
  
        // Update button active state
        filterButtons.forEach((btn) => btn.classList.remove("btn-primary"));
        this.classList.add("btn-primary");
      });
    });
  });
  