document.addEventListener('click', function (event) {
  const navLink = event.target.closest('.nav-link[data-page]');

  if (!navLink) {
    return;
  }

  // Remove 'active' from all links
  document.querySelectorAll('.nav-link[data-page]').forEach((item) => item.classList.remove('active'));

  // Add 'active' to the clicked link
  navLink.classList.add('active');
});

document.addEventListener('site-layout:ready', function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const activePage = ['faq.html', 'news.html', 'contactus.html', 'applynow.html'].includes(page)
    ? page
    : 'index.html';

  document.querySelectorAll('#header .nav-link[data-page]').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === activePage);
  });
});
