

function add(numbers){
    if(numbers == '') return 0 
    
    const numList = numbers.split(",").map(n=>parseInt(n,10))
    const negative = numList.filter(n=>n<0)
    if(negative.length>0){
        throw new Error('Negative Numbers not allowed '+negative)
    }
    return numList.reduce((sum,n)=>sum+n,0)
}      
module.exports = { add }