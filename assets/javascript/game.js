// Pseudocoding
// 1. Generate random number at the start (between 19-120 "current number")
//  - Math.floor(Math.random() * 120) + 19
//  - put this in a function to be able to be reset
// 2. Generate random numbers for each gem at the start (between 1-12)
//  - Math.floor(Math.random() * 12) + 1
//  - create function that generates random number for each gem
// 3. Apply those random numbers to proper elements (gems & currNumb)
//  - make sure each gem has a different randomly generated number
//  - that stays the same no matter how many times it's clicked until win/loss
// 4. Make sure with each click of gems, that amount gets added to yourScore
// 5. Create condition for win/loss.
//  - If/else statement should handle these conditions along with resetting game

// Global Variables
var currNumb;
var gemNumb1;
var gemNumb2;
var gemNumb3;
var gemNumb4;
var currScore = 0;
var wins;
var losses;

// Random Generating Functions
function numbGen () {
  currNumb = Math.floor(Math.random() * 120) + 19;
  $('#currNumb').html(currNumb);
}

function gemGen () {
  gemNumb1 = Math.floor(Math.random() * 12) + 1;
  gemNumb2 = Math.floor(Math.random() * 12) + 1;
  gemNumb3 = Math.floor(Math.random() * 12) + 1;
  gemNumb4 = Math.floor(Math.random() * 12) + 1;
  $('#purp').val(gemNumb1);
  $('#blue').val(gemNumb2);
  $('#yellow').val(gemNumb3);
  $('#green').val(gemNumb4);
  console.log($('#purp').val());
  console.log($('#blue').val());
  console.log($('#yellow').val());
  console.log($('#green').val());
}

// Assigning Gems and currNumb random numbers in value
// function gemAssign () {
//
//
// }



// On click Functions
$('#purp').on('click', function () {
  currScore = currScore + gemNumb1;
  $('#currScore').html(currScore);
  console.log(currScore);
  console.log(currNumb);
});

$('#blue').on('click', function () {
  currScore = currScore + gemNumb2;
  $('#currScore').html(currScore);
  console.log(currScore);
  console.log(currNumb);
});

$('#yellow').on('click', function () {
  currScore = currScore + gemNumb3;
  $('#currScore').html(currScore);
  console.log(currScore);
  console.log(currNumb);
});

$('#green').on('click', function () {
  currScore = currScore + gemNumb4;
  $('#currScore').html(currScore);
  console.log(currScore);
  console.log(currNumb);
});


// Reset Game Conditions (if/else)
function reset () {
    currNumb = 0;
    currScore = 0
    gemNumb1 = 0;
    gemNumb2 = 0;
    gemNumb3 = 0;
    gemNumb4 = 0;
    numbGen ();
    gemGen ();
};

if (currScore == currNumb) {
  alert('In wins');
  wins ++;
  $('#wins').html(wins);
  reset ();
};

if (currScore > currNumb) {
  alert('In losses');
  losses ++;
  $('#losses').html(losses);
  reset ();
};

numbGen ();
gemGen ();
