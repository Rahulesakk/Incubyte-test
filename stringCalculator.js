

function add(numbers){
    if(numbers == '') return 0 
    
    let delimiter = /,|\n/;
    let numberString = numbers

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2));
        numberString = parts.slice(1).join("\n");
    }
    
    const numList = numberString
    .split(delimiter)
    .map(n => n.trim())
    .filter(n => n !== "")
    .map(n => parseInt(n, 10));

    const negative = numList.filter(n=>n<0)
    if(negative.length>0){
        throw new Error('Negative Numbers not allowed '+negative.join(','))
    }
    return numList.reduce((sum,n)=>sum+n,0)
}      
module.exports = { add }