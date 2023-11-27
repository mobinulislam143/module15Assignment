const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email:{type:String, required: true },
    firstName:{type:String, required: true },
    lastName:{type:String, required: true },
    gender:{type:String, required: true },
    dateOfBirth:{type:String, required: true },
    nationality:{type:String, required: true },
    address:{type:String, required: true },
    admissionDate:{type:String, required: true },
    phone:{type:String, required: true },
    courses:{type:String, required: true },
  },
  { versionKey: false, timeStamp: true }
);

const StdModel = mongoose.model("stds", DataSchema);
module.exports = StdModel;
