const bookmark = document.querySelector('[data-js="bookmarks"]');
const answerText = document.querySelector('[data-js="answer-text"]');
const buttonAnswer = document.querySelector('[data-js="button__answer"]');
const form = document.querySelector('[data-js="form"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
