const sentence = "JavaScript Is Fun"; 
const words  = sentence.split(' ');
for(let i= 0 ; i< words.length; i++){
    console.log(words[i][0].toLocaleUpperCase() + words[i].slice(1,words[i].length));
}
const wordNew = words.join(" "); 

console.log(wordNew);