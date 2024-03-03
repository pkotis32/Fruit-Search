const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions_wrapper ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


input.addEventListener('keyup', showSuggestions);

function isAlpha(e) {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz')
  if (alphabet.has(e.key.toLowerCase())) {
    return true
  }
}




function showSuggestions(e) {
  

  if (document.querySelector('li')) {
    const allListElems = document.querySelectorAll('li');
    for (let li of allListElems) {
      li.remove();
    }
  }

  const [results, fruitsLower] = search(e);
  

  for (let result of results) {
    const index = fruitsLower.indexOf(result);
    const fruitListElem = document.createElement('li');
    fruitListElem.addEventListener('mouseover', highlight);
    fruitListElem.addEventListener('click', useSuggestion)
    fruitListElem.innerText = fruits.at(index);
    suggestions.append(fruitListElem);
  }

}



function search(e) {
  
  let results = [];
  const inputText = input.value.toLowerCase();
  const fruitsLower = [];

  // make fruit array lower case
  fruits.forEach(function(fruit) {
    return fruitsLower.push(fruit.toLowerCase());
  })

  if(isAlpha(e) || e.key === 'Space' || e.key === 'Backspace') {
    for (let fruit of fruitsLower) {
      if (fruit.indexOf(inputText) !== -1) {
        results.push(fruit)
      }
    }
    if (e.target.value.length === 0) {
      results.length = 0;
    }
  }

	return [results, fruitsLower];
}


function highlight(e) {
  const listElem = e.target;
  listElem.addEventListener('mouseleave', function() {
    listElem.style.backgroundColor = ''
  })
  e.target.style.backgroundColor = 'rgba(73,107,112,1)';

}


function useSuggestion(e) {
  input.value = e.target.innerText
}



















