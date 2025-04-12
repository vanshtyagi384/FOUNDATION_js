 
let chaiTypes = ["MasalaChai", "GingerChai", "Green Tea", "LemonChai"]


console.log(chaiTypes[2]);


//console.log(`Total chai Types: ${chaiTypes.length}`);




chaiTypes.push("Herbal Tea")


const data = chaiTypes.pop()


console.log(data);





let index = chaiTypes.indexOf("Green-Tea");
 
console.log(index);


if (index !== -1){
    chaiTypes.splice(index, 1)
}


//console.log(chaiTypes);


chaiTypes.forEach((chai, index) => {
    console.log(`${index + 1}: ${chai}`);
    
})



let morechaiTypes = ["oolong Tea", "whote Tea"]

let allchaiTypes = chaiTypes.concat(morechaiTypes)


let newchaiType = [...chaiTypes, "Chamolina Tea"]

//console.log(newchaiType);





let chairecipe = {
    name : "Masala Chai",
    ingredients: {
        TeaLeaves:"Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown sugar",
        spices:["daalchini", "Ginger"] 
    },
    instruction: "Boil water,add tea leaves, milk, sugar and spices"
}


 //console.log(chairecipe.ingredients.spices[1]);




 let updatedChaiRecepie = {
    ...chairecipe,
    instruction: "Boil water, add tea leaves ,milk,sugar,spices with some love"

 }


 let {name,ingredients} = chairecipe // object destructuring 
 let [firstChai,secondChai] = chaiTypes // array destructuring 

console.log(ingredients)
console.log(secondChai);


