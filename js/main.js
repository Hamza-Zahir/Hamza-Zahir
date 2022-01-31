let mySkills = document.querySelectorAll("#Skills .progress span");
let sectionSkills = document.querySelector("#Skills");

function skillRatio(ele) {
  ele.style.width = `${ele.dataset.width}%`;
}

let lastScrol = 0;
let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= sectionSkills.offsetTop - 50) {
    mySkills.forEach((skill) => skillRatio(skill));
  }

  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScrol + 5 && !nav.classList.contains("scrol-down")) {
    nav.classList.add("scrol-down");
  }
  if (currentScroll <= lastScrol && nav.classList.contains("scrol-down")) {
    nav.classList.remove("scrol-down");
  }
  lastScrol = currentScroll;
});
let changebtn = document.querySelector("nav .change-style");
let img = changebtn.children[0];

let nightStyle = function () {
  img.setAttribute("src", "./img/sun.ico");
  nav.classList.add("navbar-dark");
  nav.classList.remove("navbar-light");
  document.body.setAttribute(
    "style",
    `
    
--color: #c7c7c7;
--sectionBg: #1a1561c2;
--shadowColor:#838282;
--backgroundpage: url("../img/night-bg.jpeg");
--maincolor: #038b20;
--logocolor: #69bb1c; `
  );
};

let dayStyle = function () {
  img.setAttribute("src", "./img/moon.png");
  nav.classList.add("navbar-light");
  nav.classList.remove("navbar-dark");

  document.body.setAttribute(
    "style",
    `
    --color: #443131;
--sectionBg: #acabab8c;
--backgroundpage: url("../img/day-bg.png");
--shadowColor:#302f2f;
--maincolor: #038b20;
--logocolor: #69bb1c;`
  );
};

setTimeout(function () {
  new Date().getHours() >= 7 && new Date().getHours() <= 19 ? dayStyle() : nightStyle();
})

changebtn.addEventListener("click", () => {
  img.getAttribute("src") == "./img/moon.png" ? nightStyle() : dayStyle();
});

