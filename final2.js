// Problem-1

function totalFine( fare ) {

if(typeof fare !== "number" || fare < 1){

return 'Invalid';

}

else{

const fine = fare + fare*(20/100) + 30;

return fine;

}

}

const result = totalFine(200);
console.log(result);


// Problem-2

function onlyCharacter( str ){


if(typeof str !== "string"){

return "Invalid";

}

else{


str = str.split(' ')

str = str.join('');

str = str.toUpperCase();

return str;

}


}

const result2 = onlyCharacter("Cy   bar- At  tac k  ")
console.log(result2);

// Problem-3

function bestTeam( player1, player2 ) {

const playerOneScore = player1.foul + player1.cardY + player1.cardR;

const playerTwoScore = player2.foul + player2.cardY + player2.cardR;


if(playerOneScore < playerTwoScore){

return player1.name;

}

else if(playerTwoScore < playerOneScore){

return player2.name;

}

else if(playerTwoScore == playerOneScore){

return 'Tie';

}

else if(typeof player1, player2 !== 'Object'){

return "Invalid";

}

}

 const playerOne=  { name: "Germany", foul: 10, cardY: 1, cardR: 1 }
   const playerTwo = { name: "France", foul: 10, cardY: 2, cardR: 1 }

const result3 = bestTeam(playerOne, playerTwo);
console.log(result3);



// Problem-4

function isSame(arr1 , arr2) {

for(let i = 0; i < arr1.length; i++){

if(arr1[i] !== arr2[i]){

return false;

}

}

if(arr1.length == arr2.length ){

return true;

}

if(typeof arr1, arr2 !== "Array"){

return 'Invalid';

}


}

const array1 = [1, 2 ,3]
const array2 = [1, 2 ,3]
const result4 = isSame(array1, array2);
console.log(result4);

// Problem-5

function resultReport(marks) {

if (!Array.isArray(marks)) {

return 'Invalid';

}


let totalMark = 0;

for (const mark of marks) {

totalMark = totalMark + mark;

}

const averageScore = totalMark / marks.length;

const finalScore = Math.round(averageScore);

let pass = [];

let fail = [];

for (const singleMark of marks) {

if (singleMark < 40) {

fail.push(singleMark);

} else {

pass.push(singleMark);

}

}

const passSubject = pass.length;

const failSubject = fail.length;

let obj = {};

let keys = ["finalScore", "Pass", "Fail"];

let values = [finalScore, passSubject, failSubject];

for (let i = 0; i < keys.length; i++) {

obj[keys[i]] = values[i];

}

return obj;

}
const result5 = resultReport([12, 21, 30, 51, 52,62]);
console.log(result5);