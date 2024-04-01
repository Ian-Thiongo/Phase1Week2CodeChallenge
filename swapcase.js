//function that swaps each case of a character
function swap(str) {
    //i initialized an empty string to store the swapped character
    let Thiongo = '';
    //looping through each character of the string
    for (let i = 0; i < str.length; i++) {
        //checking if the current character is uppercase
            if (str[i] == str[i].toUpperCase()) {
                //if uppercase convert to lowercase
                Thiongo += str[i].toLowerCase();
            } else {
                //if lowercase conver to uppercase
                Thiongo += str[i].toUpperCase();
            }
        }
        //returns the resulting string with swapped case
        return Thiongo;
    }
    console.log(swap('Thiongo'));