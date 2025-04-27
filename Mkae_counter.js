function makeCounter(intialvalue = 0 ) {
    let count = intialvalue; 
    return {
        increment:function(){
            count++;
            return count;
        }, 
        decrease: function() {
            count--;
            return count;
        }, 
        reset: function(){
            count = intialvalue; 
            return count; 
        }, 
        getvalue: function(){
            return count; 
        }
    };
    
}
const makeincrementcounter = makeCounter();

console.log(makeincrementcounter.increment());
console.log(makeincrementcounter.increment());
console.log(makeincrementcounter.decrease());
console.log(makeincrementcounter.getvalue());
console.log(makeincrementcounter.increment());
console.log(makeincrementcounter.increment());