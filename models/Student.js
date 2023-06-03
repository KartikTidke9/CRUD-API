import mongoose from "mongoose";

//defining schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (fees) => fees >= 5000,
  },
});

//creating model
const studentModel = mongoose.model("student", studentSchema);

export default studentModel;
