// what is map() function ?

// In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.
arr = [20, 30, 40, 50];
a = arr.map((x) => x * 20);
console.log(a);

//40 60 80 100
//it create a new array and store the modified value. but foreach we want to declare a array

//what is filter?

//The filter() method in JavaScript is a built-in method that creates a new array with all elements that pass the test implemented by the provided function. The filter() method does not alter the original array.

let ages = [25, 35, 26, 12, 11, 10];
let votor = ages.filter((x) => x >= 18);
console.log(votor);
