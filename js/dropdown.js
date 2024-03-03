document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', function(event) {
      if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  });