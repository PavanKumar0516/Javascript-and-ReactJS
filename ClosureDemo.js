//----closure--------
function getCounter(){
    var counter=0;
    return function(){
        return counter++;
    }
}
var show=(function(){
    return function()
     {
         return 5+9
        };
});
var outerFunction=function(a)
{
    var b=10;
    var innerFunction=function(){
        let sum=a+b;
    }
    return innerFunction;
}
console.log(show()());
console.log(getCounter()());
console.log(outerFunction()());
//------callback---------
var wishes=function(){
    return "Happy BirthDay";
}
var toEmployee=function(wish,name){
    console.log(wishes()+" "+ name);

}
toEmployee(wishes,"PavanKumar");

