// Simple search functionality for the publications table
// Users can filter publications by typing keywords; rows that do not
// contain the search term are hidden from view. The search is case
// insensitive and scans the concatenated text of each row.

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const tableRows = document.querySelectorAll('#pubTable tbody tr');

  function filterRows() {
    const filter = searchInput.value.toLowerCase();
    tableRows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      row.style.display = rowText.includes(filter) ? '' : 'none';
    });
  }

  searchInput.addEventListener('keyup', filterRows);
});