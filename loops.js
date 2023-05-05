
// Exercise 1
// Create a for loop that logs the numbers 4 to 156 ONLY to the console.
// for (let count = 4; count <= 156; count ++) {
//   console.log(count);
// }


// Exercise 2 
// You are provided with an empty array called numArray. Using a for... in loop, fill the array with all of the numbers from the numbers object if they are greater than or equal to 2.

let numbers = {
	num1: 1,
	num2: 2,
	num3: 5,
	num4: 18 
  };
  
let numArray = [];
for (let key in numbers){
    if(numbers[key] >= 2) {
      numArray += numbers[key] + ',';
    
    }
}
console.log(numArray);
//console.log(numArray.Slice(6,-1));

// Exercise 3:
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it should multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

   let result = ""

for(let count = 0; count <=10; count++){
  if(count <=10){
    result= count * 9;
  }
  console.log(count, result);
}

// Exercise 4
// Create an object with at least 5 key/value pairs. Write a for loop that prints 'true' to the console when it reaches the last key at the end of the loop. Hint: there is a method you can use to calculate the length of an object. 



// Exercise 5: 
// Loop through the following object. Log the data to the console as an array of arrays in the following format: [[key, value], [key, value]] etc. Hint: you can use Google to look up object methods if you get stuck ;)

const studentPopulation = {
  science: 25,
  geography: 15,
  history: 10,
  music: 22
}
