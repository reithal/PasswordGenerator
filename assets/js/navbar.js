/* 
  script.js file used for the Password Generator application's NavBar used on multuple pages. 
  Author: Carlos Mazon
  Date: Jan 2020
*/

var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click",function(event){
  event.preventDefault();  // Don't refresh the page.
  googleSearch();
});

/**
 * Opens a new tab to perform google search based value in Search input.
 */
function googleSearch (){
  event.preventDefault();
  
  if (searchInput.value)
  {
  window.open("https://www.google.com/search?q=" + searchInput.value);
  }
}