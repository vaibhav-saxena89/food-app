
const express=require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {createResturantController,getAllResturantController, getResturantByIdController, deleteResturantController,}=require("../controller/resturantController");
const router=express.Router();
//routes
// create resturant
router.post("/create",authMiddleware,createResturantController);
router.get("/getall",getAllResturantController);
router.get("/get/:id",getResturantByIdController);
router.delete("/delete",authMiddleware,deleteResturantController);
module.exports=router;