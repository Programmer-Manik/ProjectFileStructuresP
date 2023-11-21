
import { Student,  } from "../student.model";
import {TStudent} from "./student.interface";
const createStudentIntoBD = async(studentData:TStudent) =>{
		// const result = await Student.create(TStudent);
		// return result;


		
		// statics and methods 
		const student = new Student(studentData);
		const result  = await  student.save();
		return result;
}
                      
const getAllStudentsFromDB = async() =>{
		const result = await Student.find();
	 return result;
}
const SingleStudentsFromDB = async(id:string) =>{
		const result = await Student.findOne({id});
	 return result;
}


export const studentService = {
	createStudentIntoBD,getAllStudentsFromDB,SingleStudentsFromDB
}