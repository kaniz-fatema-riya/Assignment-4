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

const array1 = [1, '2' ,3]
const array2 = [1, 2 ,3]
const result = isSame(array1, array2);
console.log(result);
