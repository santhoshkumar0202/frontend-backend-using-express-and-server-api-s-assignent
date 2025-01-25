let express=require("express");
let auth=require("../middlewear/authmid.js")
let {signup,signin,getuser,logout}=require("../authcontrollers/authcontroller.js")
let authrouter=express.Router()
authrouter.post("/signup",signup)
authrouter.post("/signin",signin)
authrouter.get("/getuser",auth,getuser)
authrouter.get("/logout",auth,logout)



module.exports=authrouter;