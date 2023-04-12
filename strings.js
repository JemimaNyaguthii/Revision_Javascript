// Join sentence 1 and sentence 2 using concatenation method.
// const sentence='When candles are out all cats are grey.'

// Concatenation simply means adding appending one or more iems in a string 
// In string concatenation,the + operator is used to join two or more strings.
// The extra string was to give the final sentence the correct spacing .

const sen1 ='When candles are out,';
const sen2='all cats are grey';
const sen12=sen1 +''+sen2;
console.log(sen12);

//Write a function to extract the first four characters from the string below;
// // "background"
// slice is used to return a part of the given input string in a new array

function string(char){
    return char.slice(0,4)
}
let char="background";
console.log(string(char))
// Using JavaScript, find the following words from the following strings:
// season
// const string2 = "My favorite season is spring"

// Includes checks if a substring exists within a string which takes parameter item 
// Backticks ``allows the introduction of a variable without concatenating .This is done using &{} to add 
// the variable string in line to the current string.

function condition(sentence){
    if(sentence.includes (c)){
        console.log(`${c} is found`)
    }
    else{
        console.log(`${c} is not found`)
    }
}
let c ="season";
const sentence="My favorite season is spring";
condition(sentence)

// Write a function that takes in a string and returns it when reversed
// // let food = “gnitae”
// split("") splits up the string into an array of characters.Reverse() the first element becomes 
// last and the last element becomes first.Join() adds the elements together.

function action(verb){
    return verb.split("") .reverse().join("")
}
let verb= "gnitae";
console.log(action(verb));