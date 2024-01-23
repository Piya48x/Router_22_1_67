const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");
// const createErorr = require("./utils/createError");
const productRoute = require("./routes/product-route")
dotenv.config();

const authRoute = require("./routes/auth-route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute)
app.use("/product", productRoute)



// app.get("/", (req, res, next)=>{
//     try{
//         const { username, password} = req.body

//     if(!username || !password){
//         return createErorr(400, "User and Password must be provide")
//     }
//     } catch (err) {
//         next(err)
//     }
    
// })

app.use(errorHandler);
app.use("*", notFoundHandler)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
