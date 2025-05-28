

function add(numbers){
    if(numbers == '') return 0 
    
    let delimiter = /,|\n/;
    let numberString = numbers
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