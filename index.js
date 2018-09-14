function iterativeLog(array) {

//call .foreach() on this array

//inside th callback, log each element with the format $ ...
	array.forEach(function(index, element) {console.log(`${index}: ${element}`)}
	)
}


function iterative(callback) {

//initialize an array - not empty
var newArray = ["bob"];

//call .forEach - passing the callback .forEach()
newArray.forEach(function() {callback()});

//return the array that you initialized
return newArray

}
