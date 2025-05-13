const checkOccureance = (str)=>{
    const counter = {}
    for(let char of str)
    {
        counter[char] = (counter[char] || 0) + 1;

    }
    return counter; 
}

const values = checkOccureance('ballon'); 
console.log(values);