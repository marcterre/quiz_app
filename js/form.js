const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", newQuestion);

function newQuestion(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionContainer = document.createElement("div");
  newQuestionContainer.classList.add("main-box-question");

  const newQuestionText = document.createElement("h2");
  newQuestionText.textContent = data.yourquestion;

  const newButton = document.createElement("button");
  newButton.classList.add("main-box-question__button");

  const newAnswerText = document.createElement("p");
  newAnswerText.textContent = data.youranswer;
  newAnswerText.classList.add("main-box-question__answer", "hidden");

  const newList = document.createElement("ul");
  newList.classList.add("main-box-question__list");

  const newHashtag = document.createElement("p");
  newHashtag.classList.add("main-box-question__list-items");
  newHashtag.textContent = data.tag;

  form.append(newQuestionContainer);
  newQuestionContainer.append(
    newQuestionText,
    newButton,
    newAnswerText,
    newList,
    newHashtag
  );
}
