
let app=require("./app.js")

let port =process.env.PORT ;


console.log(port)


app.listen(port,()=>{
    console.log(`server is listening at:http://localhost:${port}`)
})