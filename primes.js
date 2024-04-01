
//Function I used to find prime numbers within an array
function findPrimes(arr) {
    //array to store prime number found
    let sortArray = [];

    //Iterating through each number in the input array
    arr.forEach((num)=>{
        //variable to count factors of the current number
        let factor = 0 ;

        //looping them from 1 up to the current number
        for(let i = 1; i <= num; i++){
            //cheching if current number is divisible by "i"
            if((num % i) === 0){
                //If divisible it will increment the factor count
                factor++
            }
        }//if the number has exactly 2 factors(1 and itself),it is a prime number
        if(factor === 2){
            //add the prime number to the array of prime numbers
            sortArray.push(num)
        }
    });
    //output the array of prime numbers
    console.log(sortArray)
}

findPrimes([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);