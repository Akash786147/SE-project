
// Group Evaluation Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the subject tabs functionality
  initSubjectTabs();
});

// Function to handle subject tab switching
function initSubjectTabs() {
  const tabs = document.querySelectorAll('#subject-tabs button');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => {
        t.classList.remove('bg-purple', 'text-white', 'shadow-lg');
        t.classList.add('text-purple', 'hover:bg-purple/10');
      });
      
      // Add active class to clicked tab
      tab.classList.remove('text-purple', 'hover:bg-purple/10');
      tab.classList.add('bg-purple', 'text-white', 'shadow-lg');
      
      // Get the subject code
      const subject = tab.getAttribute('data-subject');
      
      // For demonstration, we'll just show a message
      if (subject !== 'COA') {
        // This would be replaced with actual data loading in a real application
        alert(`Evaluation data for ${subject} would be loaded here.`);
      }
    });
  });
}
