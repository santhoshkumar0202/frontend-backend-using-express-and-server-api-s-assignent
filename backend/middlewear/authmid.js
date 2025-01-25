let jwt= require("jsonwebtoken")

jwtauth=(req,res,next)=>{

    let token =(req.cookies &&req.cookies.token)|| null

    try {

        if(!token){
        return    res.status(400).json({
                success:false,
                message:"auth error"
            })
        }

        let payload=jwt.verify(token,process.env.SECRET)
        req.user={
            id:payload.id,email:payload.email
        }
           
    next()
    } catch (error) {
     return   res.status(400).json({
            success:false,
            message:error.message 
        })
    }
    

}

module.exports=jwtauth