import {Request,Response} from 'express'
import { studentService } from './student.service';
//  import StudentValidationSchema from './studentZod.validation';
// import studentValidationSchema from './student.validation';
const createStudent = async(req:Request, res:Response)=>{
try{
// creating a schema validation suing joi start
/**const {student:StudentData} = req.body;
//data validation using joi 
const {error,value} = studentValidationSchema.validate(StudentData);
const result = await  studentService.createStudentIntoBD(value);
if(error){
    res.status(500).json({
        success:false,
        message : "something went wrong",
        error,
 })
}*/

const {student:StudentData} = req.body;
// creating a schema validation zod start
//  const zodParsedData =  StudentValidationSchema.parse(StudentData)


const result = await  studentService.createStudentIntoBD(StudentData)
res.status(200).json({
success:true,
message : "Students is created successfully",
data:result,
})
}catch(error){
    res.status(500).json({
        success:false,
        // message : error.message || "something went wrong",
        error:error,
 })
}
};

const getAllStudents = async(req:Request, res:Response)=>{
try{
const result = await studentService.getAllStudentsFromDB()
res.status(200).json({
success:true,
message : "student is created successfully",
data:result,
})

}catch(error){console.log(error)}
}

const SingleStudents = async(req:Request, res:Response)=>{
try{
const {studentId} = req.params
const result = await studentService.SingleStudentsFromDB(studentId)
res.status(200).json({
success:true,
message : "student is created successfully",
data:result,
})
}catch(error){console.log(error)}
}

export const StudentControllers = {
createStudent,getAllStudents,SingleStudents
}