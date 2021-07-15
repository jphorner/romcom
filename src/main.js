// Create variables targetting the relevant DOM elements here 👇

var bookTitle = document.querySelector('.cover-title');
var bookTagline = document.querySelector('.tagline');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

// BUTTONS //

var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new.button');

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
randomCoverButton.addEventListener('click', generateRandomPoster);

// event listener that incorporates the onLoad event

window.addEventListener('load', generateRandomPoster);

// function changeWindow();

window.addEventListener('load', function(?)) {
};

function changeWindow();

function generateRandomPoster() {
  bookTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverImage.src = covers[getRandomIndex(covers)];
  updateCurrentCover();
};

function updateCurrentCover() {
  currentCover.title = bookTitle.innerText;
  currentCover.tagline1 = tagline1.innerText;
  currentCover.tagline2 = tagline2.innerText;
  currentCover.cover = coverImage.src;
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
//    - Function is run as a new class instance
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
