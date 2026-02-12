document.addEventListener('DOMContentLoaded', function () {

  const stationLiteUseCases = [
    {
      id: 0,
      tag: 'Use Cases',
      img: 'images/products/stationlite_usecase1.jpg',
      title: 'Inclusiveness in Civil Service Access',
      description: [
        "SignAvatar Station Lite bridges the gap at governmental or civil service counters by interpreting  bureaucratic procedures and  instructions into sign language instantly.",

        "When it comes to applying for permits, renewing identification, or handling tax inquiries, an installation of the Lite  model ensures DHH citizens can navigate government systems with full independence and confidence."
      ]

    },
    {
      id: 1,
      tag: 'Use Cases',
      img: 'images/products/stationlite_usecase2.jpg',
      title: 'Clinical Consultations',
      description: [
        "At hospitals and clinics, SignAvatar Station Lite facilitates direct interaction between physicians and DHH patients by interpreting medical diagnoses and treatment plans in real-time.",
        "Importantly, Installation of the Lite model enables patients to discuss sensitive medical conditions privately, without having to rely on a human interpreter."
      ]

    },
    {
      id: 2,
      tag: 'Use Cases',
      img: 'images/products/stationlite_usecase3.jpg',
      title: 'Inclusive Hospitality',
      description: [
        "In the fast-paced hospitality industry, diversity drives creativity and excellence. ",
        "For hospitality establishments, such as restaurants or boutique stores, SignAvatar Station Lite empowers DHH employees to manage guest interactions efficiently. "
      ]

    },
    {
      id: 3,
      tag: 'Use Cases',
      img: 'images/products/stationlite_usecase4.jpg',
      title: 'Public Transportation',
      description: [
        "One-on-one interactions at check-in counters and security checkpoints are  time-sensitive.",
        "SignAvatar Station Lite streamlines the pre-flight experience by interpreting agent instructions and security questions for DHH travelers immediately. Whether verifying travel documents, discussing baggage regulations, or navigating security protocols, installing our Lite model could effectively ensure  clear compliance."
      ]

    },


  ];

  const stationProUseCases = [
    {
      id: 0,
      tag: 'Use Cases',
      img: 'images/products/stationpro_usecase1.jpg',
      title: 'Public Announcements',
      description: [
        "At venues of public transportation,  where traffic information  broadcasts in real-time, it is imperative to not miss out on any information.",
        "SignAvatar Station Pro interprets  audio announcements into sign language simultaneously. At airports, subway stations, or railway stations, an installation of the Pro model  ensures DHH passengers are informed with schedule delay, lost-and-found, or instructional announcements."

      ]

    },
    {
      id: 1,
      tag: 'Use Cases',
      img: 'images/products/stationpro_usecase2.jpg',
      title: "Customer Service",
      description: ["Customer service shouldn't come with a loading bar. At information desks, our high-speed processing removes the awkward moments of waiting for manual interpretation. ",
        "At receptions of shopping  malls, tax return counters, reception and information counters, SignAvatar Station Pro enables seamless conversation for all customers."
      ]

    },
    {
      id: 2,
      tag: 'Use Cases',
      img: 'images/products/stationpro_usecase3.jpg',
      title: 'Museums and Exhibitions',
      description: ["SignAvatar Station Pro functions as a standalone unit that adds immediate sign language support to any exhibit.",
        "No matter  being historical, technological, or business conventions, SignAvatar Station Pro provides intuitive and professional interpretations for DHH participants."
      ]

    },
    {
      id: 3,
      tag: 'Use Cases',
      img: 'images/products/stationpro_usecase4.jpg',
      title: 'Campuses and Events',
      description: ["Designed for modern institutions, SignAvatar Station Pro is the standard for accessible and inclusive education.",
        "Whether in student service centers, lecture halls, or auditoriums, an installation of the Pro model ensures DHH students remain fully informed regarding class cancellations, administrative deadlines, emergency alerts, or complex academic instruction."
      ]

    },

  ];

  // code here

});


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
