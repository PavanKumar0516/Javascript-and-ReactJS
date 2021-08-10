function product(pId,pName,price,pDescription){
    this.productId=parseInt(pId);
    this.productName=pName;
    this.productPrice=parseInt(price);
    this.productDescription=pDescription;
    //var arr=[];
    //arr.push(p);
    return function printAllProducts(){
        // for(let i=0;i<arr.length;i++)
        // { 
            console.log(
            "Id :"+this.productId+" "+
            "Name :"+this.productName+" "+
            "Price :"+this.productPrice+" "+
            "Description :"+this.productDescription
        );
        // }
    }
}
const ps=require("prompt-sync");
const prompt=ps();
var id=prompt("Enter ProductId : ")
var pname=prompt("Enter ProductName : ")
var amt=prompt("Enter Product Price : ")
var des=prompt("Enter ProductDescription : ")
product(id,pname,amt,des)();