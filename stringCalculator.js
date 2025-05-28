

function add(numbers){
    if(numbers == '') return 0 
    
    const numList = numbers.split(",").map(n=>parseInt(n,10))
    return numList.reduce((sum,n)=>sum+n,0)
}      
module.exports = { add }