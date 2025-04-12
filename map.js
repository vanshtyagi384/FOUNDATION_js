const arr = [1,2,3,4]


Array.prototype.Mymap = function(callback){
    const newarr = []
    for(let x = 0; x < this.length ; x++){
         newarr.push(callback(this[x]))
    }
    return newarr;
}

function printmap(myvalue){
    console.log(myvalue);
    
}



//const newarr = arr.Mymap(value => printmap(value));


const newarrTwo = arr.Mymap((value) => value*2)
console.log(newarrTwo);
