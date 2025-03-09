
// Timetable Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the semester tabs functionality
  initSemesterTabs();
});

// Function to handle semester tab switching
function initSemesterTabs() {
  const tabs = document.querySelectorAll('#semester-tabs button');
  
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
      
      // Get the semester number
      const semesterNum = tab.getAttribute('data-semester');
      
      // Here you would normally load data for the selected semester
      console.log(`Loading data for semester ${semesterNum}`);
      
      // For demonstration, we'll just show a message
      if (semesterNum !== '1') {
        // This would be replaced with actual data loading in a real application
        alert(`Timetable for Semester ${semesterNum} would be loaded here.`);
      }
    });
  });
}
