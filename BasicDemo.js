var age;
var name="Pavan kumar";
var date=new Date;
console.log("type of age:"+typeof(age));
console.log("type of name:"+typeof(name));
console.log("type of date:"+typeof(date));
//creating functions in 3ways
function greetMe(){
    console.log("Good Morning!!");
}
greetMe();

var greetMe2=function(){
    console.log("Good evening!!");
}
greetMe2();
//var greetMe3=new function("name","console.log('good morning'+name)");