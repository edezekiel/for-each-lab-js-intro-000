function iterative(callback) {

//initialize an array - not empty
var newArray = ["bob"];

//call .forEach - passing the callback .forEach()
newArray.forEach(function() {callback()});

//return the array that you initialized
return newArray

}