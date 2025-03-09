
// Course Registration Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the semester tabs functionality
  initSemesterTabs();
  
  // Initialize course selection checkboxes
  initCourseSelection();
  
  // Initialize next button
  document.getElementById('next-btn').addEventListener('click', function() {
    showToast("Course registration in progress", "Your selected courses are being registered");
  });
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
      
      // For demonstration, we'll just show a message
      if (semesterNum !== '1') {
        // This would be replaced with actual data loading in a real application
        showToast(`Loading semester ${semesterNum}`, "This would load courses for the selected semester");
      }
    });
  });
}

// Function to handle course selection
function initCourseSelection() {
  const selectButtons = document.querySelectorAll('.course-select-btn');
  
  selectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isSelected = button.getAttribute('data-selected') === 'true';
      
      if (isSelected) {
        // Deselect
        button.setAttribute('data-selected', 'false');
        button.classList.remove('bg-green-600', 'border-green-600');
        button.innerHTML = '';
        button.setAttribute('aria-label', 'Select');
        
        // Get subject name (2nd column in the row)
        const subject = button.closest('.grid').querySelector('div:nth-child(2)').textContent;
        showToast(`Deselected ${subject}`, "");
      } else {
        // Select
        button.setAttribute('data-selected', 'true');
        button.classList.add('bg-green-600', 'border-green-600');
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-white"><polyline points="20 6 9 17 4 12"/></svg>`;
        button.setAttribute('aria-label', 'Deselect');
        
        // Get subject name (2nd column in the row)
        const subject = button.closest('.grid').querySelector('div:nth-child(2)').textContent;
        showToast(`Selected ${subject}`, "");
      }
    });
  });
}

// Function to show toast notifications
function showToast(title, message = "", duration = 3000) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = 'bg-white shadow-lg rounded-lg p-4 mb-3 flex items-start transform translate-x-full transition-transform duration-300 max-w-md';
  toast.innerHTML = `
    <div class="flex-1">
      <h3 class="font-medium">${title}</h3>
      ${message ? `<p class="text-sm text-gray-600 mt-1">${message}</p>` : ''}
    </div>
    <button class="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.replace('translate-x-full', 'translate-x-0');
  }, 10);
  
  // Close button functionality
  const closeButton = toast.querySelector('button');
  closeButton.addEventListener('click', () => {
    toast.classList.replace('translate-x-0', 'translate-x-full');
    setTimeout(() => {
      toast.remove();
    }, 300);
  });
  
  // Auto remove after duration
  setTimeout(() => {
    toast.classList.replace('translate-x-0', 'translate-x-full');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}
