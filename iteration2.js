function greet(){

    console.log(`hello ${name}`);
    
}

greet("hitesh")
greet("Piyush")


let globalVar = "i am global"


function modifyGlobal(){
    globalVar = "I am modified"
    let blockScopedVar = " i am blocked-scoped"
    console.log(blockScopedVar);
    
}


modifyGlobal()


// Imediate Invoked function 
let config = function(){}()