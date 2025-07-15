document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove 'active' from all links
      navLinks.forEach(item => item.classList.remove("active"));

      // Add 'active' to the clicked link
      this.classList.add("active");
    });
  });

  document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = link.getAttribute("href");
      window.location.href = "index.html" + sectionId;
    });
  });
});
