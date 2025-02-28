// const express=require('express');
// const aiRoutes=require('./routes/ai.routes')
// const cors=require('cors')

// const app=express();

// app.use(cors())

// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

// app.use('/ai',aiRoutes)


// module.exports=app

import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js"; // ".js" extension zaroori hai

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/ai", aiRoutes);

export default app;
