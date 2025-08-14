function  onlyCharacter( str ){
        
          if(typeof str !== "string"){
            const invalid = 'Invalid';
            return invalid;
          }
          else{
              
            str = str.split(' ')
            str = str.join('');
            str = str.toUpperCase();
            return str;
          }
        
}

const result = onlyCharacter("Cy   bar- At  tac k  ")
console.log(result);

