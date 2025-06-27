var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Backend Development",
      "Machine Learning",
      "Artificial Intelligence",
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
  function iriscode() {
    open("https://github.com/Soumyareddy2004/irisflowerdetectiion");
  }
  function irisLive() {
    open("");
  }
  function prodcode() {
    open("https://github.com/Soumyareddy2004/productify");
  }
  function prodlive() {
    open("https://productify-i4cq.onrender.com/");
  }
  function povertycode() {
    window.open("https://github.com/Soumyareddy2004/No-Poverty", "_blank");
  }
  function povertylive() {
    window.open("https://no-poverty.onrender.com/tweet/", "_blank");
  }
  function agricode() {
    window.open("https://github.com/Soumyareddy2004/AgriVerse", "_blank");
  }
  
  function agrilive() {
    window.open("https://eduorbit-front.onrender.com/", "_blank"); 
  }
  function wellcode() {
    window.open("https://github.com/Soumyareddy2004/EduOrbit", "_blank");
  }
  
  function welllive() {
    window.open("https://eduorbit-front.onrender.com/", "_blank"); 
  }
  function educode() {
    window.open("https://github.com/Soumyareddy2004/EduOrbit", "_blank");
  }
  
  function edulive() {
    window.open("https://eduorbit-frontend.onrender.com/", "_blank"); 
  }
  
  function geocode() {
    window.open("https://github.com/YourUsername/geovision", "_blank");
  }
  
  function geolive() {
    window.open("https://your-live-link.com/geovision", "_blank");
  }
 function resume() {
    // open("https://drive.google.com/file/d/1z8xWH8bqZRC793IJaqV7FufLixMWcUoj/view?usp=sharing");
    window.location.href='soumya.pdf';
  }
  
