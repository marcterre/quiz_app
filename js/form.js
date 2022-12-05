const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", newQuestion);

function newQuestion(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionContainer = document.createElement("section");
  newQuestionContainer.classList.add("main-box-question");

  const newDivContainer = document.createElement("div");
  newDivContainer.classList.add("main-box-question__bookmarks");

  const newBookmarkSvg = document.createElement("img");

  const newQuestionText = document.createElement("h2");
  newQuestionText.textContent = data.yourquestion;

  const newButton = document.createElement("button");
  newButton.classList.add("main-box-question__button");
  newButton.textContent = "show answer";

  const newAnswerText = document.createElement("p");
  newAnswerText.textContent = data.youranswer;
  newAnswerText.classList.add("main-box-question__answer", "hidden");

  const newList = document.createElement("ul");
  newList.classList.add("main-box-question__list");

  const newHashtag = document.createElement("p");
  newHashtag.classList.add("main-box-question__list-items");
  newHashtag.textContent = data.tag;

  main.append(newQuestionContainer);

  newQuestionContainer.append(
    newDivContainer,
    newBookmarkSvg,
    newQuestionText,
    newButton,
    newAnswerText,
    newList,
    newHashtag
  );
}
