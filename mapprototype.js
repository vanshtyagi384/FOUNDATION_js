const arr = [1,2,3,4,5,6]


// Signture .map
// Return? - New Array, each element iterate, userFn

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn) {
         const result = []

        for(let i = 0; i < this.length; i++){
           const value = userFn(this[i],i)
            result.push(value);
        }
     
      return result ;
    }

}



const n = arr.map((e) => e * 2)
const n2 = arr.myMap((e) => e * 3)
console.log(n);
console.log(n2);
