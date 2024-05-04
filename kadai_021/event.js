const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
  let text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
  },2000);
});