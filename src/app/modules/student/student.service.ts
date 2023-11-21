
import { StudentModel } from "../student.model";
import {Student} from "./student.interface";
const createStudentIntoBD = async(student:Student) =>{
	const result = await StudentModel.create(student);
return result;
}
                      

const getAllStudentsFromDB = async() =>{
		const result = await StudentModel.find();
	 return result;
}
const SingleStudentsFromDB = async(id:string) =>{
		const result = await StudentModel.findOne({id});
	 return result;
}


export const studentService = {
	createStudentIntoBD,getAllStudentsFromDB,SingleStudentsFromDB
}