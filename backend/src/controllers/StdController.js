const StdModel=require('../models/StdModel');


// C=Create
exports.createstd=async (req, res) => {
    try {
        let reqBody = req.body;
        let result=await StdModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(400).json({status:"fail",data:e.toString()})
    }
    
}
// D=Delete
exports.deletestd=async (req,res)=>{
 
    try {
        let id= req.params.id;
        let result=await StdModel.deleteOne({_id:id})
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(500).json({status:"fail",data:e.toString()})
    }
}

exports.updatestd=async (req,res)=>{
    let id=req.params.id;
    let reqBody=req.body;
    let query={_id:id};
    try{
        let result=await StdModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(400).json({status:"fail",data:e.toString()})
    }
}


// R=Read
exports.allstd=async (req,res)=>{
    try {
        let result=await StdModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(400).json({status:"fail",data:e.toString()})
    }
}

// R=Read By ID
exports.stdByID=async (req,res)=>{
    try {
        let id= req.params.id;
        let result=await StdModel.find({_id:id});
        res.status(200).json({status:"success",data:result})

    }catch (err) {
        res.status(500).json({status:"fail",data:err.toString()})
    }

}








