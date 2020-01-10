// this is a self invoking anonymous function
// aka IIFE
// aka module
(() => {
  console.log("some message- from JS");

//*****ELEMENTS******
  //find btn element by ID with js
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgGraphic");


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
  svgImage.addEventListener("mouseover", logSVG)

})();
