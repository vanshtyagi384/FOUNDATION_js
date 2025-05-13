let output = {
    name :"vansh",
    greet: function(){
        console.log("hello " + this.name);
    }
}


//console.log(output.greet());

let output2 = {
    name:"yashi"
}
 output.greet.call(output2); // call method is used to call the function with the context of output2// hello yashi
// output hello yashi