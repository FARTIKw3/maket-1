// Bgslider

const images = ["img/headerBg1.jpg", "img/headerBg2.jpg", "img/headerBg3.jpg"];

let current = 0;

const slider = document.getElementById("bgSlider");

function changeBg() {
  slider.style.backgroundImage = `url(${images[current]})`;
}

setInterval(() => {
  current = (current + 1) % images.length;
  changeBg();
}, 8000);

changeBg();

// feature-lang

const langBtn = document.getElementById("langButton");
const langList = document.getElementById("langList");

const languages = ["ENG", "RUS", "DEU"];
let currentLang = "ENG";

function renderLangList() {
  langList.innerHTML = "";
  languages.forEach((lang) => {
    if (lang !== currentLang) {
      const li = document.createElement("li");
      li.textContent = lang;
      langList.appendChild(li);
    }
  });
}

langBtn.addEventListener("click", () => {
  langList.classList.toggle("show");
});

langList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    currentLang = e.target.innerText;
    langBtn.textContent = currentLang + " ▾";
    renderLangList();
    langList.classList.remove("show");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".langSelector")) {
    langList.classList.remove("show");
  }
});

langBtn.textContent = currentLang + " ▾";
renderLangList();
