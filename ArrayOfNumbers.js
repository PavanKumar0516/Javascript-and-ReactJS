const ps=require("prompt-sync");
const prompt=ps();
var arrayNumbers=[];
var num=0;
var arrSize = prompt("Enter Array Size : ");
console.log(arrSize);
for(let i=0;i<arrSize;i++)
{
    //adding to array
    num = prompt("Enter Array Numbers : ");
    arrayNumbers.push(parseInt(num));
}
console.log("Array elements are : "+arrayNumbers);
console.log(arrayNumbers.pop());//remove last
console.log(arrayNumbers.shift());//remove first
console.log(arrayNumbers.sort());//sort acending order
console.log(arrayNumbers.reverse());//reverse
console.log(arrayNumbers.slice(4,6));//fetching based on index
console.log(arrayNumbers.splice(4,1,99));//deleting elements with index,count and replaces
console.log(arrayNumbers);
console.log(arrayNumbers.unshift(23));//insert new element first
console.log(arrayNumbers.find((n)=>n>18));//searching the value return only one
console.log(arrayNumbers.filter((n)=>n>18));//searching the value return multiple
var data=arrayNumbers.values();//fetching data 
for(let elements of data)
{
    console.log(elements);
}


