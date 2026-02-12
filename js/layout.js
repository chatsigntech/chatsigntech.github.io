(function () {
  const HEADER_SELECTOR = '[data-include="site-header"]';
  const FOOTER_SELECTOR = '[data-include="site-footer"]';
  const LAYOUT_READY_EVENT = 'site-layout:ready';

  const normalizePage = () => {
    const path = window.location.pathname;
    const page = path.split('/').pop();

    if (!page) {
      return 'index.html';
    }

    return page.toLowerCase();
  };

  const setActiveNavItem = () => {
    const page = normalizePage();
    const activePage = ['faq.html', 'news.html', 'contactus.html', 'applynow.html'].includes(page)
      ? page
      : 'index.html';

    const navLinks = document.querySelectorAll('#header .nav-link[data-page]');
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.page === activePage);
    });
  };

  const injectPartial = async (selector, partialPath) => {
    const mountNode = document.querySelector(selector);

    if (!mountNode) {
      return;
    }

    const response = await fetch(partialPath, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Unable to load partial: ${partialPath}`);
    }

    mountNode.innerHTML = await response.text();
  };

  const initLayout = async () => {
    const results = await Promise.allSettled([
      injectPartial(HEADER_SELECTOR, 'partials/header.html'),
      injectPartial(FOOTER_SELECTOR, 'partials/footer.html')
    ]);

    results.forEach((result) => {
      if (result.status === 'rejected') {
        console.error(result.reason);
      }
    });

    setActiveNavItem();
    document.dispatchEvent(new CustomEvent(LAYOUT_READY_EVENT));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
