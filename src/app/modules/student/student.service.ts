
import { Student,  } from "../student.model";
import {TStudent} from "./student.interface";
const createStudentIntoBD = async(studentData:TStudent) =>{
	// built in static method
	if( await Student.isUserExists(studentData.id)){
		throw new Error('user already exists!')
	}	
	const result = await Student.create(studentData);
	return result;
	

	//create an instance  method
	// const student = new Student(studentData); 
	// if(await student.isUserExists(studentData.id)){
	// 	throw new Error('user already exists!')
	// }


	//built in instance method 
	// const result  = await  student.save();
	// return result;
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

