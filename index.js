const bookmark = document.querySelector('[data-js="bookmarks"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const buttonAnswer = document.querySelector('[data-js="button__answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("main-box-question__bookmarks-toggle");
});

buttonAnswer.addEventListener("click", showAnswer);

function showAnswer() {
  answerText.classList.toggle("hidden");
  if (!answerText.hidden) {
    buttonAnswer.textContent = "hide answer";
  } else {
    buttonAnswer.textContent = "show answer";
  }
}
