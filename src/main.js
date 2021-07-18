var bookTagline = document.querySelector('.tagline');
var bookTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedView = document.querySelector('.saved-view');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var createNewBookButton = document.querySelector('.create-new-book-button');
var makeCoverButton = document.querySelector('.make-new-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewHomeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = {
  title: title,
  tagline1: tagline1,
  tagline2: tagline2,
  cover: cover,
};

createNewBookButton.addEventListener('click', generateCustomCover);
document.addEventListener('dblclick', deleteCover);
makeCoverButton.addEventListener('click', showFormView);
randomCoverButton.addEventListener('click', generateRandomCover);
saveCoverButton.addEventListener('click', saveCover)
viewHomeButton.addEventListener('click', showHomeView);
viewSavedButton.addEventListener('click', showSavedCovers);
window.addEventListener('load', generateRandomCover);


function deleteCover(targetId) {
  var targetId = event.target.parentNode.id;
  var targetObject = event.target.parentNode;
  console.log(targetObject);
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == targetId) {
      targetObject.parentNode.removeChild(targetObject);
      savedCovers.splice(i, 1);
    }
  }
};

function generateCustomCover() {
  event.preventDefault();
  var titleValue = document.querySelector('#title').value;
  var tagline1Value = document.querySelector('#descriptor1').value;
  var tagline2Value = document.querySelector('#descriptor2').value;
  var coverValue = document.querySelector('#cover').value;
  titles.push(titleValue);
  covers.push(coverValue);
  descriptors.push(tagline1Value, tagline2Value);
  currentCover = new Cover(coverValue, titleValue, tagline1Value, tagline2Value);
  showHomeView();
  coverImage.src = currentCover.cover;
  bookTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
};

function generateRandomCover() {
  bookTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverImage.src = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImage.src, bookTitle.innerText, tagline1.innerText, tagline2.innerText);
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

function showFormView() {
  hide(homeView);
  hide(savedView);
  hide(saveCoverButton);
  hide(randomCoverButton);
  hide(makeCoverButton);
  show(formView);
  show(viewHomeButton);
  show(viewSavedButton);
};

function showHomeView() {
  hide(formView);
  hide(savedView);
  hide(viewHomeButton);
  show(saveCoverButton);
  show(randomCoverButton);
  show(makeCoverButton);
  show(homeView);
  show(viewSavedButton);
};

function showSavedCovers() {
  hide(homeView);
  hide(formView);
  hide(saveCoverButton);
  hide(randomCoverButton);
  hide(viewSavedButton);
  show(savedView);
  show(makeCoverButton);
  show(viewHomeButton);
  savedCoversSection.innerHTML = ``;
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <article class="mini-cover" id="${savedCovers[i].id}">
        <img class="mini-cover" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2} </h3>
      </article>
      `
  }
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function updateCurrentCover() {
  currentCover.title = bookTitle.innerText;
  currentCover.tagline1 = tagline1.innerText;
  currentCover.tagline2 = tagline2.innerText;
  currentCover.cover = coverImage.src;
};
