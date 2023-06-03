import studentModel from "../models/Student.js";

class StudentController {
  //creating a document
  static async createDoc(req, res) {
    try {
      //   const { name, age, fees } = req.body;
      //   const doc = new studentModel({
      //     name,
      //     age,
      //     fees,
      //   });

      const doc = new studentModel(req.body);
      const result = await doc.save();
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  }

  //get all documents
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  //get single document
  static async getSingleDoc(req, res) {
    try {
      const result = await studentModel.find({ _id: req.params.id });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async updateDoc(req, res) {
    try {
      const result = await studentModel.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteDoc(req, res) {
    try {
      const result = await studentModel.deleteOne({ _id: req.params.id });
      res.status(204).send(result);
    } catch (err) {
      console.log(err);
    }
  }
}

export default StudentController;
