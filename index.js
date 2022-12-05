console.clear();

const bookmark = document.querySelector('[data-js="bookmarks"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const buttonAnswer = document.querySelector('[data-js="button__answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("main-box-question__bookmarks-toggle");
});

function toggleAnswer() {
  answerText.classList.toggle("hidden");
  const showAnswerText = "show answer";
  const hideAnswerText = "hide answer";

  if (buttonAnswer.textContent === hideAnswerText) {
    buttonAnswer.textContent = showAnswerText;
  } else {
    buttonAnswer.textContent = hideAnswerText;
  }
}

buttonAnswer.addEventListener("click", toggleAnswer);
