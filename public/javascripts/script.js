// Subnav active state
var subnavList = document.querySelectorAll('.sub-nav a');;
var subnavListArray = []; 

// Create array from subnav links list
for (var i = 0; i < subnavList.length; i++) {
  subnavListArray.push(subnavList[i]);    
}

for (var i = 0; i < subnavListArray.length; i++) {  
  subnavListArray[i].addEventListener('click', (e) => {    
    removeActive(subnavListArray);
    e.target.classList = 'active';    
  })
}

// remove existing active state
function removeActive(subnavListArray) {
  for (var i = 0; i < subnavListArray.length; i++) {
    subnavListArray[i].classList.remove('active');
  }
}