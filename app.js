AOS.init();
//reload to 0:0
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const navToggler = document.querySelector(".navToggler");
const navContainer = document.querySelector(".navContainer");
const navContainerBg = document.querySelector(".navContainerBg");
navToggler.addEventListener("click", () => {
  navContainer.classList.toggle("navContainerShown");
  navContainerBg.classList.toggle("navContainerBgShown");
});
navContainerBg.addEventListener("click", () => {
  navContainer.classList.toggle("navContainerShown");
  navContainerBg.classList.toggle("navContainerBgShown");
});
