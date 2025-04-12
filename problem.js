// problem: Use a for loop to find the tea name with the ,most characters.
// leet code challenges 




let longesTea = ""


for (let i = 0; i < teas.length; i++){
    if(teas[i].length > longesTea.length){
        longesTea = teas[i]

    }


}





// Problem: use a for loop to reverse the order of teas in the array 


const reversedArray = []



for(let i= teas.length; i >= 0; i--){
    reversedArray.push(teas[i])


}
