//Function that creates an array between two numbers
function createArray(start, end) {
    //declaring an empty array to store the numbers
	let result = [];
    //looping through each number from start to end
	for (let i = start; i <= end; i++) {
          // Add the current number (i) to the end of the result array
		result.push(i);
	}
     // Return the final array containing the numbers
	return result;
}

//example:
let result = createArray(1, 5);


console.log(result);
