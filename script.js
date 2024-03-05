const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions_wrapper ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// every time a key is released in search bar, call showSuggestions
input.addEventListener('keyup', showSuggestions);



// shows all the fruits suggestions based on what is entered in the search bar
function showSuggestions(e) {
  
  // if search results exist, remove them before appending the new ones
  if (document.querySelector('li')) {
    const allListElems = document.querySelectorAll('li');
    for (let li of allListElems) {
      li.remove();
    }
  }

  // calls the search function and extracts the array with the suggestion results, and the orinal fruit list in lower case
  const [results] = search(e);
  
  // iterates over the results array, makes a new li for each result
  for (let result of results) {
    // creates a new li element for each fruit
    const fruitListElem = document.createElement('li');
    // adds two event listeners to each li created, one controls the li being highlighted when the mouse moves over it, and the other adds the suggestion text to the search bar when the li is clicked
    fruitListElem.addEventListener('mouseover', highlight);
    fruitListElem.addEventListener('click', useSuggestion)
    // sets the inner text of the suggestion to the proper fruit
    fruitListElem.innerText = result
    // appends the li to the ul
    suggestions.append(fruitListElem);
  }

}


// shows all the relavent suggestions for fruits based on what the user has inputted at that given each given moment
function search(e) {
  
  let results = [];
  // input text is updated to reflect what is in the search bar after every change made to it
  const inputText = input.value.toLowerCase();

  results = fruits.filter(function(fruit) {
    return fruit.toLowerCase().includes(inputText)
  })

  // return the results array and the fruits lower array
	return [results];
}



// controls the highlighting of the search result 
function highlight(e) {
  const listElem = e.target;
  // returns the background color to its original color after the mouse leaves the suggestion
  listElem.addEventListener('mouseleave', function() {
    listElem.style.backgroundColor = ''
  })
  // highlights the background color of the suggestion when the mouse moves over it
  e.target.style.backgroundColor = 'rgba(73,107,112,1)';

}

// when the suggestion is clicked on, it makes the search result match the fruit that was clicked
function useSuggestion(e) {
  input.value = e.target.innerText
}



















