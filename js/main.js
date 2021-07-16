const d = document;
const $ovni = d.querySelector(".ovni");
const $body = d.querySelector(".body");
let x = 0;
let y = 0;

window.addEventListener("keydown", e => {
  const limitsOvni = $ovni.getBoundingClientRect();
  const limitsSections = $body.getBoundingClientRect();
  switch (e.key) {
    case "ArrowRight":
      x++;
      if (limitsOvni.right >= limitsSections.right) x--;
      break;
    case "ArrowLeft":
      x--;
      if (limitsSections.left >= limitsOvni.left) x++;
      break;
  }
  $ovni.style.transform = `translate(${x * 49}px,${y * 10}px)`;
});

/************** Open navbar****************/
const nav = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    nav.classList.add("nav-active");
    nav.classList.remove("nav-des");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    nav.classList.remove("nav-active");
    nav.classList.add("nav-des");
  }
});
