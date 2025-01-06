class college {
    constructor(rollnum,yog){
        console.log("Inside college constructor");//entered parent class
        this.rollnum=rollnum;
        this.yog=yog;
        console.log("Left college class");//left parent class
    }
}

class engineering extends college{
    constructor(rollnum,yog,branch)//First it entered engineering class
    {
        console.log("Inside engineering class");
        super(rollnum,yog);//called parent class
        this.branch=branch;
        console.log("Left engineering class");//left engineering class
    }
}

let aditya = new engineering("23BECSE03",2027,"CSE")

console.log("Roll number is "+aditya.rollnum)
console.log("Year of Graduation is "+aditya.yog)
console.log("Branch is "+aditya.branch)