// const express=require('express');
// const aiController=require('../controllers/ai.controller')

// const router=express.Router();

// router.post('/get-review',aiController.getReview)

// module.exports=router;

import express from "express";
import { getReview } from "../controllers/ai.controller.js"; // ".js" extension zaroori hai

const router = express.Router();
router.post("/get-review", getReview);

export default router;
