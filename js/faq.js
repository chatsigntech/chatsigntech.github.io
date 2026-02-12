document.addEventListener('DOMContentLoaded', function () {
  // for collapse
  const coll = document.getElementsByClassName('faqcollapsible');

  for (let i = 0; i < coll.length; i += 1) {
    const faqItmcontent = coll[i].nextElementSibling;

    if (coll[i].classList.contains('faqactive')) {
      faqItmcontent.style.maxHeight = faqItmcontent.scrollHeight + 'px';
    }

    coll[i].addEventListener('click', function () {
      this.classList.toggle('faqactive');

      if (faqItmcontent.style.maxHeight) {
        faqItmcontent.style.maxHeight = null;
      } else {
        faqItmcontent.style.maxHeight = faqItmcontent.scrollHeight + 'px';
      }
    });
  }
});

(function () {
  if (localStorage.getItem('autoplay') !== 'true') {
    return;
  }

  const scrollStep = 80;
  const scrollInterval = 50;

  const scrollTimer = setInterval(function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      clearInterval(scrollTimer);
      goToNews();
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, scrollInterval);

  function goToNews() {
    window.location.href = 'news.html';
  }
})();
