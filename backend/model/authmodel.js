let mongoose=require("mongoose")
let JWT=require("jsonwebtoken")

let bcrypt=require("bcrypt")

let {Schema}=mongoose

let userschema=new Schema({
    name:{
type:String,
required:[true,"user name is required"]
,maxLength:[50,"length should be less than 50 char"],
minLength:[5,"char should be minimum length 5 char"],
trim:true
    },
    username:{
type:String,
unique:true,
required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    }
    ,password:{
        type:String,
        select:false
    },
    forgotpasswordtoken:{
        type:String
    },
    forgotpasswordexpirydate:{
        type:String
    },
    bio:{
        type:String,
        maxLength:[50,"lenth should not be more than 50 char"]
    }
},{timestamps:true})

let obj={
    name:"sam",
    age:2,
    getds:this.name
}
console.log(obj)
//middleware
userschema.pre("save",async function(next){
if(!this.isModified("password")){
    return next()
}
this.password= await bcrypt.hash(this.password,10)
next()

})
userschema.methods={
    jswtoken(){
        return JWT.sign({id:this.id,email:this.email},process.env.SECRET,{expiresIn:"24h"})
    }
}

let model=mongoose.model("user",userschema)


module.exports=model