require("dotenv").config();
let express=require("express")
let connecttodb=require("./config/db.js")
let cookieparser=require("cookie-parser")
let cors=require("cors")
let app= express()
connecttodb()
// console.log(typeof process.env.MONGO_URL)
let authrouter=require("./authRouters/authRouter.js")
app.use(cors({origin: ["http://localhost:5501", "http://127.0.0.1:5501"],
    credentials:true
}))
app.use(cookieparser())
app.use(express.json())

app.use("/api/auth",authrouter)


app.use("/",(req,res)=>{
res.status(200).json({
    data:"aut with express"
})
})




module.exports=app