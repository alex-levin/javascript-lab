// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];

// ****** map ******

// Array of names of the animals
let animal_names = [];

for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
}
console.log(animal_names);

// Using map
let animal_names2 = animals.map((animal, index, animals) => {
	return animal.name;
});
console.log(animal_names2);

// The map operator accepts three values in the callback function, namely:
// The current item of the array
// The current index of the current item
// The entire array
// We are not using the index and animals parameters and can simplify:
let animal_names3 = animals.map(animal => {
	return animal.name;
});
console.log(animal_names3);
// One parameter (animal) does not require the () parentheses.
// The return statement requires the {} curly brackets.

// There are some key improvements in our code readability when we use the map:
// Using the map, we don’t have to manage the state of our for-loop.
// We don’t have to use the index of the for-loop to access the correct item in the array.
// We don’t have to create a new array and push our values into it. Map returns the finished array in one go, 
// so we can simply assign it to a variable.

// ****** filter ******

let small_animals = [];

for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        small_animals.push(animals[i])
    }
}
console.log(small_animals);

// Using filter
let small_animals2 = animals.filter(animal => animal.size === 'small');
console.log(small_animals2);

// The filter operator accepts the same parameters (current item, index and entire array) 
// in the callback function. But since we don’t use the index and the entire array, i’ve left them out. 

// ****** reduce ******
let total_weight = 0;

for (let i = 0; i < animals.length; i++) {
    total_weight += animals[i].weight;
}
console.log(total_weight);

let total_weight1 = animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight;
}, 0);
console.log(total_weight1);

let total_weight2 = animals.reduce((weight, animal) => {
    return weight += animal.weight;
}, 0);
console.log(total_weight2);

// The first parameter is the current value of the end value. We have to set the initial value at the end of the function. 
// In this case we set it to 0. This could be any value though.
// The second parameter is the current item in the array.
// The third is the index again.
// The last is the full array.



