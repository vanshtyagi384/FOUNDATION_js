function sum(a, b) {
    return a+b;
    
}

function curry(f) {
    return function(a){
        return function(b)
        {
            if(b)
            {
                return f(a,b);
            }
            else{
                return a;
            }
        }
    }
    
}

const curried = curry(sum);
const arr = curried(1)(2);
console.log(arr);
