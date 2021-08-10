function sum(...inputs){
    sum1=0;
    sum2=0;
    for(let i=0;i<inputs.length;i++){
        sum1=sum1+inputs[i];
    }
    for(let num of inputs){
        sum2=sum2+num;
    }
    console.log("sum1 is : "+sum1);
    console.log("sum2 is : "+sum1);
}
numArr=[33,44,55,66,77,88,99]

sum(...numArr);
sum(80,10,90);
sum(80,10,90,55,66);
sum(8,90);

function display(year,companyName="capgemini"){

    console.log(companyName+" : "+year)
}
display(1997);
display(1997,"elite");