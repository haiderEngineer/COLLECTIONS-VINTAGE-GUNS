document.querySelectorAll(".fillter-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector("#hide-content").classList.toggle("showHide");
    let pText = document.querySelector(".fillter-btn p");
    if (pText.innerText === "Show Filters") {
      pText.innerText = "Hide Filters";
    } else {
      pText.innerText = "Show Filters";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector(".menu-btn");
  var menucross = document.querySelector(".menu-cross");
  var body = document.querySelector("body");

  menuBtn.addEventListener("click", function () {
    body.classList.add("active");
  });
  menucross.addEventListener("click", function () {
    body.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuBtns = document.querySelectorAll(".menu-btn");
  var menuCrosses = document.querySelectorAll(".menu-cross");

  menuBtns.forEach(function (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var menuInner = document.querySelector(".menu-inner");
      var menuCross = document.querySelector(".menu-cross");

      menuInner.style.display = "flex";
      menuCross.style.display = "flex";
      menuBtn.style.display = "none";
    });
  });

  menuCrosses.forEach(function (menuCross) {
    menuCross.addEventListener("click", function () {
      var menuInner = document.querySelector(".menu-inner");
      var menuBtn = document.querySelector(".menu-btn");

      menuInner.style.display = "none";
      menuBtn.style.display = "flex";
      menuCross.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var aboutBtn = document.querySelector(".about-btn");
  var headerInfoInner = document.querySelector(".header-info-inner");
  var headerMenu = document.querySelector(".header-menu");

  aboutBtn.addEventListener("click", function () {
    headerInfoInner.style.display = "block";
    headerMenu.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var aboutBtn = document.querySelector(".about-back");
  var headerInfoInner = document.querySelector(".header-info-inner");
  var headerMenu = document.querySelector(".header-menu");

  aboutBtn.addEventListener("click", function () {
    headerInfoInner.style.display = "none";
    headerMenu.style.display = "block";
  });
});

let gunTwo = document.getElementById("gunTwo");
let gunTwoModal = document.getElementById("gunTwoModal");

gunTwo.onclick = function () {
  gunTwoModal.setAttribute("data-carousel-item", "active");
};
// let firstImg = document.getElementById("firstImg");
// firstImg.onmouseover() = function(){
//   alert()
// }
