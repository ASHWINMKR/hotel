document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
      greeting.textContent = 'Good morning!';
    } else if (hours < 18) {
      greeting.textContent = 'Good afternoon!';
    } else {
      greeting.textContent = 'Good evening!';
    }
    document.querySelector('main').prepend(greeting);
  });
  