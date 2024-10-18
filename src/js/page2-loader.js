// document.addEventListener("DOMContentLoaded", function () {
//   const loader = document.querySelector(".loader");
//   const content = document.querySelector(".content");

//   window.onload = function () {
//     loader.style.display = "none";
//     content.style.display = "block";
//   };
// });

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";

    document.querySelector(".content").style.display = "block";
  }, 7000);
});
