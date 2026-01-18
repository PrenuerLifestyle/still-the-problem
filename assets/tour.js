function filterTour(query) {
  query = query.toLowerCase();
  document.querySelectorAll('.tour-row').forEach(row => {
    row.style.display = row.dataset.search.includes(query) ? '' : 'none';
  });
}

function track(city) {
  console.log('Ticket click:', city);
  localStorage.setItem('lastClick', city);
}

function toggleTheme() {
  document.body.classList.toggle('light');
}
