
var prom1=new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            let roll_no=[82,34,56,78,99];
            //resolve(roll_no);
            reject("Some error in roll number");
        },2000);
    }
);
//--------consume promise------------
prom1.
then((response)=>{
    console.log("Roll no Fetch "+response);
}).catch((errorRes)=>{
    console.log("Something Went Wrong "+errorRes);
})