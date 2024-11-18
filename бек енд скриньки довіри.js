  // Функція для перемикання видимості тексту
  function toggleInfo() {
    const info = document.getElementById('info');
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
  }

  function toggleTab() {
    const tab = document.getElementById('tab');
    tab.style.display = tab.style.display === 'none' ? 'block' : 'none';
  }
  function toggle2Tab() {
    const tab2 = document.getElementById('tab2');
    tab2.style.display = tab2.style.display === 'none' ? 'block' : 'none';
  }

  // Додаємо події для комп'ютерів і мобільних пристроїв
  const header1 = document.getElementById('header1');
  const header2 = document.getElementById('header2');

  header1.addEventListener('click', toggleInfo);
  header1.addEventListener('touchstart', toggleInfo);

  header2.addEventListener('click', toggleTab);
  header2.addEventListener('touchstart', toggleTab);