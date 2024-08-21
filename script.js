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
    open("https://github.com/ShivaKrisl/BloodBankManagementSystem");
  }
  function movie() {
    open("https://github.com/ShivaKrisl/Movie_Recommendation");
  }
  function movieLive() {
    open("https://movie-recommendation-system-1950-2016.onrender.com/?");
  }
  function iris() {
    open("https://github.com/ShivaKrisl/Iris_Classification");
  }
  function irisLive() {
    open("https://shivakrishna.pythonanywhere.com/?");
  }
  function hand() {
    open("https://github.com/ShivaKrisl/HandWrittenDigits_Classification");
  }
  
  function tastyPlate() {
    open("https://github.com/ShivaKrisl/Jcomponent-Project");
  }
  
  function resume() {
    open(
      "https://drive.google.com/file/d/1z8xWH8bqZRC793IJaqV7FufLixMWcUoj/view?usp=drive_link"
      
    );
  }