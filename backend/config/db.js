let mongoose=require("mongoose")

let connecttodb= async()=>{
    
    mongoose.connect(process.env.MONGO_URL).then((conn)=>{
      console.log(`conneected to ${conn.connection.host}`)
    }).catch((e)=>{
          console.log(e.message)
    })
   
}




module.exports=connecttodb