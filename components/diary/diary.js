(function () {
  const book = document.getElementById('book');
  if (!book) return;

  const pages = Array.from(book.querySelectorAll('.page'));
  let current = 0; // number of pages flipped

  // set z-index ordering: first DOM page should render on top (cover front)
  pages.forEach((p, i) => {
    p.style.zIndex = String(pages.length - i);
    // ensure cover pages have slightly different transition timing (CSS handles most)
    if (p.classList.contains('cover')) {
      p.classList.add('is-cover');
    }
  });

  function flipTo(index) {
    pages.forEach((p, i) => {
      if (i < index) p.classList.add('flipped');
      else p.classList.remove('flipped');
    });
    current = index;
  }

  // controls
  const prev = document.getElementById('diary-prev');
  const next = document.getElementById('diary-next');

  prev?.addEventListener('click', () => flipTo(Math.max(0, current - 1)));
  next?.addEventListener('click', () => flipTo(Math.min(pages.length, current + 1)));

  // click-to-flip
  pages.forEach((p, i) => {
    p.addEventListener('click', (e) => {
      if (!p.classList.contains('flipped')) flipTo(i + 1);
      else flipTo(i);
      e.stopPropagation();
    });
  });

  window.diary = { flipTo, next: () => flipTo(Math.min(pages.length, current + 1)), prev: () => flipTo(Math.max(0, current - 1)) };
})();