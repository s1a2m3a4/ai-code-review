// require('dotenv').config()
// const app=require('./src/app')


// app.listen(3000,()=>{
//     console.log("server is running");
    
// })


import "dotenv/config";
import app from "./src/app.js";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
