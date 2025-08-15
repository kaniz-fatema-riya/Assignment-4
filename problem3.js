
   


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
       
   const playerOne=  { name: "Germany", foul: 10, cardY: 1, cardR: 1 }
   const playerTwo = { name: "France", foul: 10, cardY: 2, cardR: 1 }

const result = bestTeam(playerOne, playerTwo);
console.log(result);


