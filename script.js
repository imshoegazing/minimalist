window.onscroll = function () {
  var nav = document.querySelector("nav");
  if (window.pageYOffset > 50) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
};
