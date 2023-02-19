const express = require('express');
const router = express.Router(); // helps routing function

const StudentDATA = require('../models/student');




//read students list 
router.get('/studentlist', async(req,res)=>{
    try {
        const list = await StudentDATA.find();
        res.send(list);
    }
    catch(error) {
        console.log(error);
    }
})

// read single student detail
router.get('/student/:id',async(req,res)=>{
    try {
        let id = req.params.id;
        let oneStudent = await StudentDATA.findById(id);
        res.send(oneStudent);
    }
    catch(error) {
        console.log(error);
    }
})

// add new student
router.post('/student', async(req,res)=>{
    try {
        // store the front end entered details in server variable item
        console.log(req.body);
        let item = {
            name: req.body.name,
            age : req.body.age,
            email:req.body.email,
            place:req.body.place
        }

        const newStudent = new StudentDATA(item);
        const saveStudent = await newStudent.save();
        res.send(saveStudent);
        
    }
    catch(error) {
        console.log(error);
    }
})

// update student detail

router.put('/student', async(req, res) => {
    try {
        let id = req.body._id;
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            age: req.body.age,
            email:req.body.email,
            place:req.body.place
        }
        let updateData = { $set: item };
        let updateStudent = await StudentDATA.findByIdAndUpdate({'_id': id }, updateData);
        res.send(updateStudent)
    } catch (error) {
        console.log(error);
    }
})

// delete student detail
router.delete('/student/:id', async(req,res)=>{
    try {
        let id = req.params.id;
        let deleteStudent = await StudentDATA.deleteOne({'_id':id});
        res.send(deleteStudent);
    }
    catch(error) {
        console.log(error);   
    }
})

module.exports = router;