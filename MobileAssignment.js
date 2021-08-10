class mobile
{
    constructor()
    {
        this._mobileId_=0;
        this._mobileName_="";
        this._mobileCost_=0.0;
    }
    get mobileId(){
        return this._mobileId_;
    }
    set mobileId(mid){
        this._mobileId_=mid;
    }
    get mobileName(){
        return this._mobileName_;
    }
    set mobileName(mname){
        this._mobileName_=mname;
    }
    get mobileCost(){
        return this._mobileCost_;
    }
    set mobileCost(mcost){
        this._mobileCost_=mcost;
    }
    

}
class BasicPhone extends mobile{
    constructor(){
        super();
        this._mobileType_="";
    }
    get mobileType(){
        return this._mobileType_;
    }
    set mobileType(mtype){
        this._mobileType_=mtype;
    }

}
class SmartPhone extends mobile{
    constructor(){
        super();
        this._mobileType_="";
    }
    get mobileType(){
        return this._mobileType_;
    }
    set mobileType(mtype){
        this._mobileType_=mtype;
    }

}
var m1=new BasicPhone();
m1._mobileId_=101;
m1._mobileName_="nokia";
m1._mobileCost_=1001;
m1._mobileType_="Basic features";
 console.log("BASIC PHONE : "+m1.mobileId+" "+m1.mobileName+" "+m1.mobileCost+" " +m1.mobileType);

 var m2=new SmartPhone();
m2._mobileId_=121;
m2._mobileName_="OnePlus";
m2._mobileCost_=49999;
m2._mobileType_="Smart features";
 console.log("SMART PHONE : "+m2.mobileId+" "+m2.mobileName+" "+m2.mobileCost+" " +m2.mobileType);



