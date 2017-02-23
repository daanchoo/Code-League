

// orderFood tar emot ett argument som är funktion
function orderFood(a) {
  console.log("daniel");

  // anropa funktionen som kommer in via argument.
  a("pierre");

  console.log("adam");
}


// Anropar funktionen orderFood med ett argument som är en funktion och väntar på att den ska anropas av orderFood.
var aa = orderFood(function(guy) {
  console.log("simon");

  console.log(guy);
});



function orderFood(a) {
  var food = "fries";

  console.log("Preparing" + food);

  a(food);
}


var aa = orderFood(function(mat) {
  console.log("Eat " + mat);
});
















