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

const tok = Array.from(document.querySelectorAll(".tok"));

for (let i = 0; i < tok.length; i++) {
  tok[i].addEventListener("click", () => {
    let audio = new Audio();
    audio.src = "assets/tok.wav";
    audio.load();
    audio.play();
  });
}
