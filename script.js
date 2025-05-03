// document.addEventListener('DOMContentLoaded', () => {
//   const correctPassword = 'slaptazodis';  // Replace with your actual password
//   const passwordContainer = document.querySelector('.passwordContainer');
//   const passwordInput = document.querySelector('.passwordInput');
//   const passwordSubmit = document.querySelector('.passwordSubmit');
//   const errorMessage = document.querySelector('.errorMessage');
//   const pageContent = document.querySelector('.pageContent');

//   // When the 'Submit' button is clicked
//   passwordSubmit.addEventListener('click', () => {
//     const enteredPassword = passwordInput.value;
    
//     // Check the entered password
//     if (enteredPassword === correctPassword) {
//       // If correct, hide the password form and show the page content
//       passwordContainer.classList.add('hidden');  // Hide password form
//       pageContent.classList.remove('hidden');    // Show content
//     } else {
//       // If incorrect, show the error message
//       errorMessage.classList.remove('hidden');
//     }
//   });
  
//   // When the Enter key is pressed while typing the password
//   passwordInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       passwordSubmit.click();
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tabSwitch');
  const dayContents = document.querySelectorAll('.programmeBg');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedDay = button.getAttribute('data-day');

      // Remove active from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      dayContents.forEach(content => content.classList.remove('active'));

      // Activate selected
      document.querySelectorAll(`.tabSwitch[data-day="${selectedDay}"]`).forEach(btn => btn.classList.add('active'));
      document.querySelector(`.programmeBg.${selectedDay}`).classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tabButton');
  const tabContents = document.querySelectorAll('.tabContent');

  // Initial setup: show only the must-visit tab
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
  document.querySelector('.tabButton[data-category="must-visit"]').classList.add('active');
  document.querySelector('.tabContent.must-visit').classList.add('active');

  // Tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active to clicked button and corresponding content
      const category = button.getAttribute('data-category');
      button.classList.add('active');
      const targetContent = document.querySelector(`.tabContent.${category}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburgerMenu');
  const navMenu = document.querySelector('.heroHeader nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});