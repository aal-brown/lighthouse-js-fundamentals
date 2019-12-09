const raining = true;
const cold = false;

if (raining) {
console.log("Don't forget to bring your umbrella!");
}

if (cold) {
console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//I didn't include the other examples given in the activity, as I'm very comfortable with this already.

//my own basic code sample from one of the udacity exercises.
var eatsPlants = true;
var eatsAnimals = true;

var category = (((eatsPlants && !eatsAnimals) ? "herbivore" : ((!eatsPlants && eatsAnimals) ? "carnivore" : (eatsPlants && eatsAnimals) ? "omnivore" : "undefined")))

console.log(category);

