const arr = [
        {name:"Piyush", acctivecount : 45},
        {name:'Tyagi', acctivecount: 68},
        {name:'vansh', acctivecount: 25}
]


const vlue = arr.reduce((arr,current) =>
    
    arr.acctivecount >= current.acctivecount ? arr:current, arr[0]);


console.log(vlue)






