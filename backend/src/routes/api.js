const express =require('express');
const StdController=require("../controllers/StdController")
const router =express.Router();


router.post("/createstd",StdController.createstd);
router.get("/allstd",StdController.allstd);
router.get("/readStdById/:id",StdController.stdByID);
router.post("/updatestd/:id",StdController.updatestd);
router.get("/deletestd/:id",StdController.deletestd);


    
module.exports=router;