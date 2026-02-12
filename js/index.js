(function () {
  let autoplaying = false;
  let scrollTimer = null;

  function startAutoplay() {
    autoplaying = true;
    updateButton();
    smoothScrollDown();
  }

  function stopAutoplay() {
    if (localStorage.getItem('autoplay') === 'true') {
      localStorage.removeItem('autoplay');
    }

    autoplaying = false;
    clearInterval(scrollTimer);
    scrollTimer = null;
    updateButton();
  }

  // function to update the icon of the button
  function updateButton() {
    const playIcon = document.getElementById('playIcon');
    if (!playIcon) {
      return;
    }

    if (autoplaying) {
      playIcon.outerHTML = '<svg id="playIcon" width="40px" height="40px" viewBox="0 0 24 24" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><circle class="cls-1" cx="12" cy="12" r="10.5"></circle><line class="cls-1" x1="9.14" y1="7.23" x2="9.14" y2="16.77"></line><line class="cls-1" x1="14.86" y1="7.23" x2="14.86" y2="16.77"></line></g></svg>';
    } else {
      playIcon.outerHTML = '<svg id="playIcon" height="40px" width="40px" viewBox="0 0 142.448 142.448" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path style="fill:#1D1D1B;" d="M142.411,68.9C141.216,31.48,110.968,1.233,73.549,0.038c-20.361-0.646-39.41,7.104-53.488,21.639C6.527,35.65-0.584,54.071,0.038,73.549c1.194,37.419,31.442,67.667,68.861,68.861c0.779,0.025,1.551,0.037,2.325,0.037c19.454,0,37.624-7.698,51.163-21.676C135.921,106.799,143.033,88.377,142.411,68.9zM111.613,110.336c-10.688,11.035-25.032,17.112-40.389,17.112c-0.614,0-1.228-0.01-1.847-0.029c-29.532-0.943-53.404-24.815-54.348-54.348c-0.491-15.382,5.122-29.928,15.806-40.958c10.688-11.035,25.032-17.112,40.389-17.112c0.614,0,1.228,0.01,1.847,0.029c29.532,0.943,53.404,24.815,54.348,54.348C127.91,84.76,122.296,99.306,111.613,110.336z"></path><path style="fill:#1D1D1B;" d="M94.585,67.086L63.001,44.44c-3.369-2.416-8.059-0.008-8.059,4.138v45.293c0,4.146,4.69,6.554,8.059,4.138l31.583-22.647C97.418,73.331,97.418,69.118,94.585,67.086z"></path></g></svg>';
    }
  }

  function smoothScrollDown() {
    const scrollStep = 100; // pixels per step
    const scrollInterval = 50; // ms per step

    clearInterval(scrollTimer);

    scrollTimer = setInterval(function () {
      if (!autoplaying) {
        clearInterval(scrollTimer);
        scrollTimer = null;
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(scrollTimer);
        scrollTimer = null;
        goToFAQ();
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, scrollInterval);
  }

  function continueAutoPlay() {
    if (localStorage.getItem('autoplay') !== 'true') {
      return;
    }

    startAutoplay();
  }

  function goToFAQ() {
    localStorage.setItem('autoplay', 'true');
    window.location.href = 'faq.html';
  }

  const playPauseButton = document.getElementById('playPauseButton');
  if (!playPauseButton) {
    return;
  }

  playPauseButton.addEventListener('click', function () {
    if (autoplaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // for autoplay after coming from news
  continueAutoPlay();
})();
