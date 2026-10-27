const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.blog-card');
const postCount = document.getElementById('post-count');
const emptyMessage = document.getElementById('empty-message');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.category;
    let visible = 0;

    cards.forEach((card) => {
      const show = category === 'All' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible++;
    });

    postCount.textContent = `${visible} ${visible === 1 ? 'story' : 'stories'}`;
    emptyMessage.hidden = visible !== 0;
  });
});

const dialog = document.getElementById('article-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogText = document.getElementById('dialog-text');

document.querySelectorAll('.read-more').forEach((button) => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.title;
    dialogText.textContent = button.dataset.text;
    dialog.showModal();
  });
});

document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.getElementById('subscribe-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  document.getElementById('form-message').textContent =
    `Thanks! The demo subscription form received ${email}.`;
  event.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
