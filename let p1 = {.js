let p1 = {
    lname: 'ch',
    address : {
         h:1,
         s:1,
    }
}

const p1kastring = JSON.stringify(p1)
console.log(p1kastring);


let p2 = JSON.parse(p1kastring)
   //...p1 // spread operator


p2.fname = 'piyush taygi'
p2.lname = 'hello'


console.log(p2);
console.log(p1);