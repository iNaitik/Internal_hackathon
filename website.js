document.getElementById('enter-button').addEventListener('click', function() {
  const district = document.getElementById('district-filter').value;
  const mandi = document.getElementById('mandi-filter').value;
  const crop = document.getElementById('crop-filter').value;
  const date = document.getElementById('date-filter').value;

  // Construct the URL with query parameters
  let url = 'report.html?';
  if (district !== 'all') url += 'district=' + district + '&';
  if (mandi !== 'all') url += 'mandi=' + mandi + '&';
  if (crop !== 'all') url += 'crop=' + crop + '&';
  if (date) url += 'date=' + date;

  // Redirect to the report page
  window.location.href = url;
});

document.getElementById('district-filter').addEventListener('change', function() {
  const district = this.value;
  const mandiFilter = document.getElementById('mandi-filter');
  mandiFilter.innerHTML = '<option value="all">All Mandis</option>';

  if (district !== 'all') {
    const mandiMapping = {
      'Bhopal': ['Bhopal'],
      'Indore': ['Indore','Mhow','Sanwer','Gautampura'],
      'Ujjain': ['Ujjain','Badnagar'],
      'Gwalior': ['Gwalior','Dabra', 'Lashkar'],
      'Jabalpur': ['Jabalpur','Paatan','Shahpura','Sehora'],
    };
    
    mandiMapping[district].forEach(mandi => {
      const option = document.createElement('option');
      option.value = mandi;
      option.textContent = mandi;
      mandiFilter.appendChild(option);
    });
  }
});

// Search bar functionality
function handleSearch() {
  const searchTerm = document.querySelector('.search-input').value.trim();
  if (searchTerm) {
    // Redirect to the search results page with the search term as a parameter
    window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
  } else {
    alert('Please enter a search term');
  }
}

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for search button click
  document.querySelector('.search-button').addEventListener('click', handleSearch);
  
  // Add event listener for Enter key press in the search input
  document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
});

// District filter functionality (keep this as is)
document.getElementById('district-filter').addEventListener('change', function() {
  const district = this.value;
  const mandiFilter = document.getElementById('mandi-filter');
  mandiFilter.innerHTML = '<option value="all">All Mandis</option>';

  if (district !== 'all') {
    const mandiMapping = {
      'Bhopal': ['Bhopal'],
      'Indore': ['Indore','Mhow','Sanwer','Gautampura'],
      'Ujjain': ['Ujjain','Badnagar'],
      'Gwalior': ['Gwalior','Dabra', 'Lashkar'],
      'Jabalpur': ['Jabalpur','Paatan','Shahpura','Sehora'],
    };
    
    mandiMapping[district].forEach(mandi => {
      const option = document.createElement('option');
      option.value = mandi;
      option.textContent = mandi;
      mandiFilter.appendChild(option);
    });
  }
});

// Filter button functionality 
document.getElementById('enter-button').addEventListener('click', function() {
  const district = document.getElementById('district-filter').value;
  const mandi = document.getElementById('mandi-filter').value;
  const crop = document.getElementById('crop-filter').value;
  const date = document.getElementById('date-filter').value;

  let url = 'report.html?';
  if (district !== 'all') url += 'district=' + district + '&';
  if (mandi !== 'all') url += 'mandi=' + mandi + '&';
  if (crop !== 'all') url += 'crop=' + crop + '&';
  if (date) url += 'date=' + date;

  window.location.href = url;
});
document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('.card-link');
      if (link) {
        window.location.href = link.getAttribute('href');
      }
    });
  });
});