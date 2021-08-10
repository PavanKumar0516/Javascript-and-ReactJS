(function(){

    let i=20;
    {
        let i=10;
        console.log("inside block i= "+i);
    }
    console.log("inside block i= "+i);
    console.log("--------------------------")
    var j=100;
    {
        var j=50;
        console.log("inside block j= "+j);
    }
    console.log("inside block j= "+j);
})();