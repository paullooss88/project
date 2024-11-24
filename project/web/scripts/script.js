alert('hi!');

  function performSearch() {
    var input = document.getElementById('searchInput').value;
    if (input) {
      alert('Ви шукаєте: ' + input);
    } else {
      alert('Введіть пошуковий запит.');
    }
  }
