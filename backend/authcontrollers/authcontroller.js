let model=require("../model/authmodel.js")
let emailvalidator=require("email-validator")
let bcrypt=require("bcrypt")
const signup=("/signup",async(req,res)=>{
    let{name,email,password,username,bio,confirmpassword} =req.body
    try{

        if(!name||!password||!email||!username||!bio||!confirmpassword){
            return res.status(400).json({
                success:false,
                message:"all fields should be filled"
                
            })
        }
        //here we are using emailvalidator which we have downladed and importaed package
        let validemail=emailvalidator.validate(email);
        if(!validemail){
            res.status(400).json({
                success:false,
                message:"please provide valid email"

               })
        }

        if(password!==confirmpassword){
            res.status(400).json({
                success:false,
                message:"password and confirm password dont match"

               })
        }
            let userinfo=model(req.body)
            let result=await userinfo.save()
               res.status(200).json({
                success:true,
                message:"successfully registered"

               })

    }catch(e){

res.status(400).json({
    message:e.message

   })
    }
 

})

//signin controller
let signin= async(req,res)=>{
  let {username,password}=req.body
try{
  if(!username||!password){
    return res.status(400).json({
        success:"fasle",
        message:"all field are required"

    })
  }
  let user=await model.findOne({username}).select("+password")
 // console.log(user)
if (!user){
    return res.status(400).json({
        success:"fasle",
        message:"invalid email id"

    })
}

if(!user||!await bcrypt.compare(password,user.password)){
    
    return res.status(400).json({
        success:"fasle",
        message:"credentials are invalid"

    })
}
let token=user.jswtoken()
user.password=undefined // make sure it not available 

const cookieeopt={
    maxAge:24*60*60*1000,
    httpOnly:true // making sure client side cant be manipulated this
}
res.cookie("token",token,cookieeopt)
res.status(200).json({
    success:true,
    data:user
})
}catch(e){
    res.status(400).json({
        success:false,
        message:e.message
    })
}


}

let getuser=async(req,res)=>{
    let userid=req.user.id;  


try {

    let user=await model.findById(userid)
    res.status(200).json({
        success:true,
        message:user})
    
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })

}

}



let logout=async(req,res)=>{
    


try {
    let cookieopt={
        expires:new Date(),
        httpOnly:true
    }
    res.cookie("token",null,cookieopt)
    res.status(200).json({
        success:true,
        message:"logged out"})
    
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })

}

}

module.exports={
    signup,signin,getuser,logout
}