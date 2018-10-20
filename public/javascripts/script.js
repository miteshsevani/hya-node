
/* ###### Main menu mobile toggle nav ###### */
var navDropdown = document.querySelector(".nav-dropdown");

navDropdown.addEventListener('click', () => {
  var menu = document.querySelector('.main-nav');
  menu.classList.toggle("visible");
  navDropdown.classList.toggle('close');
})





/* ###### About page subnav active state ###### */
var subnavList = document.querySelectorAll('.subnav a');;
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





