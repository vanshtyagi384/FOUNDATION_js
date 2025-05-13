const Vovels = new Set( ['a','e', 'i', 'o', 'u'] );

const vovelsFucntion = (str) =>{
    let counter=0;
    for(let cahr of str)
    {
        if(Vovels.has(cahr))
        {
            counter++;
        }
    }
    return counter;
};

const value = vovelsFucntion("Piyush");

console.log(value);

