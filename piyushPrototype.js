const arr = [23, 34, [54 ,72], [23,[343,54,73,54], 45, 54]];

// 
Array.prototype.myflat = function(depth){
    const newarr = [];
    for(let i = 0 ; i< this.length; i++){

        if(Array.isArray(this[i] ) && depth>0){
            
            newarr.push(...this[i].myflat(depth--))
        }
        else{

            newarr.push(this[i]);
        }

    }

    return newarr;
}

const newarr = arr.myflat(1);
console.log(newarr);