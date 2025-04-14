const arr = [1,2,3,4,5,6]


// Filter
//Signature: Return - new array  | input: userfn,
// agar user ka function true return karta hai toh current value ko new array mai include kar leta ha 


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (userfn){
        const result = []
        for(let i = 0; i < this.length; i++){
            if (userfn(this[i])){
                result.push(this[i])
            }
        }

    }
    return result
}











const n = arr.filter((e) => e % 2 == 0);

console.log(n);
