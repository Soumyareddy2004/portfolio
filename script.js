var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Backend Development",
      "Machine Learning",
      "Data Science",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Projects-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".AboutMe").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Skills-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function blood() {
    open("");
  }
  function iris() {
    open("https://github.com/Soumyareddy2004/irisflowerdetectiion");
  }
  function irisLive() {
    open("");
  }
  function productify() {
    open("https://github.com/Soumyareddy2004/productify");
  }
  function noPovertyCode() {
    window.open("https://github.com/Soumyareddy2004/No-Poverty", "_blank");
  }
  function eduOrbitCode() {
    window.open("https://github.com/Soumyareddy2004/EduOrbit", "_blank");
  }
  
  function eduOrbitLive() {
    window.open("https://eduorbit-front.onrender.com/", "_blank"); 
  }
  
  function noPovertyLive() {
    window.open("https://no-poverty.onrender.com/tweet/", "_blank");
  }
  function geoVisionCode() {
    window.open("https://github.com/YourUsername/geovision", "_blank");
  }
  
  function geoVisionLive() {
    window.open("https://your-live-link.com/geovision", "_blank");
  }
 function resume() {
    // open("https://drive.google.com/file/d/1z8xWH8bqZRC793IJaqV7FufLixMWcUoj/view?usp=sharing");
    window.location.href='SoumyaReddy-resume.pdf';
  }
  
