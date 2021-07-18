// Create variables targetting the relevant DOM elements here 👇

var bookTitle = document.querySelector('.cover-title');
var bookTagline = document.querySelector('.tagline');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var formView = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

// BUTTONS //

var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var viewHomeButton = document.querySelector('.home-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = {
  title: title,
  tagline1: tagline1,
  tagline2: tagline2,
  cover: cover,
};

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', generateRandomCover);
makeCoverButton.addEventListener('click', showFormView);
viewHomeButton.addEventListener('click', showHomeView);
createNewBookButton.addEventListener('click', generateCustomCover);
saveCoverButton.addEventListener('click', saveCover)
viewSavedButton.addEventListener('click', showSavedCovers);
window.addEventListener('load', generateRandomCover);
document.addEventListener('dblclick', deleteCover);


function updateCurrentCover() {
  currentCover.title = bookTitle.innerText;
  currentCover.tagline1 = tagline1.innerText;
  currentCover.tagline2 = tagline2.innerText;
  currentCover.cover = coverImage.src;
};

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

function generateRandomCover() {
  bookTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverImage.src = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImage.src, bookTitle.innerText, tagline1.innerText, tagline2.innerText);
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

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


// ITERATION 0: MAIN PAGE
//  - Write JS function to randomize image, title, and text
//    - Function should be run using window.onload event
//        - (Make this function a helper function so it can
//          be run using a button later)
//        - Function should create new class instance
//    - Use getRandomIndex to generate a random number
//    - Use innerText to target and change assets according to
//      generated index position (see above)
//      - New poster is assigned to the currentCover variable for saving
//
//  (Use preventDefault()? Be sure to research this)
//
// ITERATION 1: SHOW RANDOM COVER
//  - Function should generate new randomized poster on button click
//      --> ('.random-cover-button')
//    - Function is run as a new class instance (UPDATE: not necessary)
//    - Randomized poster updates currentCover variable
//      - Function should render changes to the DOM
//
// ITERATION 2: SWITCHING VIEWS
//  - Function should switch between main view and form view
//    - (Use 'hidden' class to change visibility)
//    - Function should toggle visibility for 'Show New Random Cover'
//      and 'Save Cover'
//        - When form view is visible, 'Home' button should be visible
//          - (Use 'hidden' class in CSS just like above)
//  - Saved Covers view should be visible on button click
//    - After click, 'Show New Random Cover' and 'Save Cover' buttons
//      should be hidden
//        - 'Home' button should be visible
//
//    NOTE: Saved posters do not need to be displayed in this iteration.
//          Only the saved posters view needs to be displayed.
//
// ITERATION 3: CREATING A NEW COVER
//  - Should allow users to create a cover using input fields in form view
//    - 'Save' button should be accessed using query selector
//      - On click (event handler), a helper function should be run which:
//        - Saves submitted data into respective arrays for future randomization
//      - As well as a helper function which:
//        - Generates new instance of Cover class
//        - Updates currentCover variable
//      - Finally, a third helper function should be fired which:
//        - Changes back to the main view
//        - Displays the updated currentCover
//
// ITERATION 4: SAVING & VIEWING COVERS
//  - On clicking 'Save Cover', the current cover's elements should be
//    added to the savedCovers array (saved as an object)
//    - Unique covers can only be saved once (use a for-loop?)
//  - When a user clicks 'View Saved Covers', the saved covers section
//    should be displayed
//  - All saved covers in the savedCovers array should be displayed in a grid
//    - Note: None of this needs to persist on page load
//
// ITERATION 5: DELETING SAVED COVERS
//  - In the saved covers view, double-clicking a saved poster will delete it
//    - Potential code structure:
//    - Use event targeting to identify cover object
//    - Nested function variables will be assigned to the image, title, and text
//      - We may be able to access the entire object. In either case, the
//        variables will need to be stored as an object for deletion
//    - A for-loop will iterate through the savedPosters array to find
//      a matching object.
//      - Use savedPosters.splice(i, 1) to remove poster from array
//    - Helper function should be invoked to update the Saved Posters view
//
// (See project spec for optional extensions:
//  https://frontend.turing.edu/projects/module-1/romcom-pair.html)
