window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  }, 3000);
});
