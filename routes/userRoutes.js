const { getUserController,updateUserController,updatePasswordController,resetPasswordController,deleteProfileController } = require("../controller/userController");

const express=require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router=express.Router();
// get user
router.get("/getUser",authMiddleware,getUserController);
// update
router.put("/updateUser",authMiddleware, updateUserController);

//password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);
module.exports=router;