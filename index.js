// Iteration 1: Names and Input
const hacker1 = "Roberto";
console.log("The driver's name is Roberto");

const hacker2 = "Lucia"; 
console.log("The navigator name is Lucia");

// Iteration 2: Conditionals
if( hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let upperCaseHacker1 = hacker1.toUpperCase();
let upperCaseHackerSpaced = "";
// Iteration 3: Loops
for(let i =0; i < upperCaseHacker1.length; i++){
  upperCaseHackerSpaced += upperCaseHacker1[i] + " ";
}
   console.log(upperCaseHackerSpaced);

let hacker2Backwards = "";
for(i = hacker2.length-1;i >= 0; i--){
    hacker2Backwards += hacker2[i]; 
}
console.log(hacker2Backwards);


if('hacker1'.localeCompare('hacker2') > 0){
  console.log("The driver's name goes first.") 
}

else if('hacker1'.localeCompare('hacker2')<0){
  console.log('Yo, the navigator goes first definitely.')
}
else{
  console.log('What?! You both have the same name?')
}

/*
let phraseToCheck = "race car ";
let emptyString = '';
let emptyString2 = '';
for(let i=0; i < phraseToCheck.length; i++){
  emptyString += phraseToCheck[i];
}
console.log(emptyString);

for(i = phraseToCheck.length-1;i >= 0; i--){
    emptyString2 += phraseToCheck[i];
}
console.log(emptyString2);

if(emptyString === emptyString2){
  console.log(`${phraseToCheck} is a palindrome`)
}
  else{
    console.log(`${phraseToCheck}is not a palindrome`)
  }

  
  */