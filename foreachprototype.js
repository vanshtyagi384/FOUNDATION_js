const arr = [1,2,3,4,5,6]


 // Error: .foreach function does not exist on arr variables 

if(!Array.prototype.myForeach)

{
    Array.prototype.myForEach = function(userFn){
        const originalArr = this // Current object ki taraf point karta hai 

        for (let i = 0; i < this.length; i++){
            userFn(originalArr[i],i)

        } 

    }
}

 // Real Signature ko samjo- No return, Funnction input, value, index
 // calls my fn for every value 
 




  const ret = arr.myForEach(function(value, index){
     console.log(`Value at Index ${index} is ${value}`);
});

console.log(`Ret is`, ret);
