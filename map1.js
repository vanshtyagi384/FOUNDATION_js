const arr  = [1,2,3,4,5,6]

// signature .map 
// return - New Array, Each element Iterate, userfn 


if(!Array.prototype.myMap){
 Array.prototype.myMap = function(userFn){

    const result = []

for(let i = 0;  i < this.length; i++ ){

        result.push(userFn(this[i]))
    }




    return result 
}

 }



const n = arr.map((e) => e *2);

console.log(n)