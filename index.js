console.clear();

const bookmark = document.querySelector('[data-js="bookmarks"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const buttonAnswer = document.querySelector('[data-js="button__answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("main-box-question__bookmarks-toggle");
});

function toggleAnswer() {
  answerText.classList.toggle("hidden");
  buttonAnswer.textContent = "hide answer";
  console.log(buttonAnswer);
}

buttonAnswer.addEventListener("click", toggleAnswer);
