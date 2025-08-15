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


// Problem-2

function  onlyCharacter( str ){
        
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




// Problem-3

       function  bestTeam( player1, player2 ) {

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



        

    //    Problem-4

    function  isSame(arr1 , arr2) {

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

