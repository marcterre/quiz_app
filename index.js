// const bodyElement = document.querySelector('[data-js="body"]');
// const buttonDarkMode = document.querySelector(
//   '[data-js="list-button__dark-mode"]'
// );
// const buttonDarkModeOn = document.querySelector(
//   '[data-js="list-button__dark-mode"]'
// );
// const profileBoxAboutMe = document.querySelector(
//   '[data-js="profile-box__about-me"]'
// );
// const profileBoxCounters = document.querySelector(
//   '[data-js="profile-box__counters"]'
// );
// const headerDarkMode = document.querySelector('[data-js="header"]');

// buttonDarkMode.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark-mode");
//   buttonDarkModeOn.classList.toggle("list-button__dark-mode");
//   profileBoxAboutMe.classList.toggle("profile-box__about-me__dark-mode");
//   profileBoxCounters.classList.toggle("profile-box-counters__dark-mode");
//   headerDarkMode.classList.toggle("header__dark-mode");
// });

const bookmark = document.querySelector('[data-js="bookmarks"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const buttonAnswer = document.querySelector('[data-js="button__answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("main-box-question__bookmarks-toggle");
});

buttonAnswer.addEventListener("click", showAnswer);
console.log(buttonAnswer);

function showAnswer() {
  answerText.classList.toggle("hidden");
  if (!answerText.hidden) {
    buttonAnswer.textContent = "hide answer";
  } else {
    buttonAnswer.textContent = "show answer";
  }
}
