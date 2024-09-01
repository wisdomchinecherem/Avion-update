const menuIcon = document.querySelector(".menu");
const body = document.body;
const nav = document.querySelector(".bottom-nav");
const closeMenu = document.querySelector(".close--menu");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("show-nav");
});

const progressRingCircle = document.querySelector(".progress-ring__circle");
const radius = progressRingCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressRingCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressRingCircle.style.strokeDashoffset = offset;
}

document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  setProgress(scrollPercent);
});

// document.addEventListener('mousemove', (event) => {
//   const follower = document.querySelector('.follower');
//   const mouseX = event.pageX;
//   const mouseY = event.pageY;

//   follower.style.left = `${mouseX}px`;
//   follower.style.top = `${mouseY}px`;
// });

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
