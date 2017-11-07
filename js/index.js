$(document).ready(function(){

// Click listener on all buttons.
$(".buttons").click(function() {
  // console.log('button clicked');
  let buttonText = $(event.target).text();

  // If clear button is clicked, do not append text to screen.
  // Else, append button text to screen.
  if (buttonText === 'C') {
    $("#screen").append("");
  } else {
    $("#screen").append(buttonText);
  }

})


// When clear button is clicked, clear screen.
$("#clear").click(function() {
  // console.log('button clicked');
  $("#screen").empty();
})


// If equals button is clicked,
// $("#equals").click(function() {
//   let screenSplit = "#screen".split('/+|-|/|*/');
//   console.log(screenSplit);
//
//
//   // if (screenCalc ===  ) {
//   //   eval()
//   // } else {
//   //   $("#screen").append('Error :)');
//   // }
//
// })



});
