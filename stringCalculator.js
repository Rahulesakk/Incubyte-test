

function add(numbers){
    if(numbers == '') return 0 
    
    let delimiter = /,|\n/;
    let number_string = numbers

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2));
        number_string = parts.slice(1).join("\n");
    }

    const numb = number_string
    .split(delimiter)
    .map(n => n.trim())
    .filter(n => n !== "")
    .map(n => parseInt(n, 10));

    const negative_numbers = numb.filter(n=>n<0)
    if(negative_numbers.length>0){
        throw new Error('Negative Numbers not allowed '+negative_numbers.join(','))
    }
    return numb.reduce((sum,n)=>sum+n,0)
}      
module.exports = { add }