const MODE_SWITCH = document.querySelector("#mode-switch");
const LANG_SWITCH = document.querySelector("#lang-switch");
const BODY = document.querySelector("body");
const ENG = document.querySelector("#ENG");
const RU = document.querySelector("#RU");
const PREFERRED_LANGUAGE = navigator.language;

MODE_SWITCH.addEventListener("change", (e) => {
  if (e.target.value === "system") {
    BODY.classList.remove(...BODY.classList);
  } else {
    BODY.classList.remove(...BODY.classList);
    BODY.classList.add(`${e.target.value}`);
  }
});

if (!PREFERRED_LANGUAGE.startsWith("ru")) {
  RU.style.display = "none";
  LANG_SWITCH.textContent = "ENG";
} else {
  ENG.style.display = "none";
  LANG_SWITCH.textContent = "RU";
}

LANG_SWITCH.addEventListener("click", (e) => {
  if (e.target.textContent === "ENG") {
    ENG.style.display = "none";
    RU.style.display = "block";
    e.target.textContent = "RU";
  } else {
    RU.style.display = "none";
    ENG.style.display = "block";
    e.target.textContent = "ENG";
  }
});
