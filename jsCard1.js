// Challenge 1: Reverse a string.

var someString = prompt("Please type something");

if (someString != null) {
  var splitString = someString.split([]);
  console.log(splitString);

  var reverseArray = splitString.reverse([]);

  var joinArray = reverseArray.join(" ");
  console.log(joinArray);
} else {
  console.log(false);
}

  //Challenge 2: Validate a palindrome
  // Return true is palindrome and false if not
  // ex. is Palindrome('racecar') === 'true',
  //isPalindrome('hello') === false

  var palindrome = prompt('Please type something');

  if(palindrome === 'mass effect'){
        console.log(true);

  }else{
      console.log(false);
  }


  //Challenge 3: Reverse and integer

  var anInteger = prompt("Please type something");

if (anInteger != null) {
  var splitString = anInteger.split([]);
  console.log(splitString);

  var reverseArray = splitString.reverse([]);

  var joinArray = reverseArray.join(" ");
  console.log(joinArray);
} else {
  console.log(false);
}

//OR

var anInteger = 123;
var reverseString = anInteger.toString().split('').reverse().join('');
console.log(parseInt(reverseString));


//Challenge 4: Capitalize Letters

var str = "i love pizza";
var newString = str.split(" ");

console.log(newString);

// Challenge 5: Return the character that
// is most common in a string
// ex. maxCharacter('javascript') == 'a'

const sortedStr = str.split('').sort();
  const maxChar = {char: '', count: 0};
  const currentChar = {char: '', count: 0};
  sortedStr.forEach(char => {
    if(currentChar.char === char){
      currentChar.count++;
    } else {
      if(maxChar.count < currentChar.count){
        maxChar.char = currentChar.char;
        maxChar.count = currentChar.count;
      }
      currentChar.char = char;
      currentChar.count = 0;
    }
  });
  return maxChar.char;




// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the 
//numbers from 1 to 100. For multiples of 
//3, instead of the number, print "Fizz", 
//for multiples of 5 print "Buzz". For 
//numbers which are multiples of both 3 and 5, print "FizzBuzz".

for(var i = 1; i <= 100; i++) {
      let output = '';
      if(i % 3 === 0) {
        output += 'fizz';
      }
      if(i % 5 === 0) {
        output += 'buzz';
      }
      console.log(output || i);
    }




//SESSION 2

//Challenge 1: Return the longest word of a string.

//Challenge 2: Split an array into chunked arrays of a specific length

//Challenge 3: Take an array of arrays and flatten to a single array.

//Challenge 4: Return true in anagram and false if not

//Challenge 5: Change every letter of the string to the one that follows it and capitalize the vowels
