// this is a self invoking anonymous function
// aka IIFE
// aka module
(() => {
  console.log("some message- from JS");

//*****ELEMENTS******
  //find btn element by ID with js
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      allSVGs = document.querySelectorAll(".svg");



//*****FUNCTIONS******
  //this function changes the heading
  function changeText(){
  theHeading.textContent = "Hello there from the console";
  }

  //log the id of svg to the console on mouseover
  function logSVG(){
    console.log(this.id);
  }

//*****EVENT_LISTENERS******
  theButton.addEventListener("click",changeText);
  //svgImage.addEventListener("click", logSVG);
  //svgImage2.addEventListener("click", logSVG);

  allSVGs.forEach(item => item.addEventListener('click', logSVG));
})();
