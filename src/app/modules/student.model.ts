import { Schema, model,   } from 'mongoose';
import { Guardian, LocalGuardian, Student,  UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>(
	{
		Name:{
		type:String,
		trim:true,
		required:[true, 'name is required'],
		maxlength:[20,'name can not be more than 20 characters'],	
		validate:{
			validator:function(value:string ){
				const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return firstNameStr === value;
			},
			message:'{VALUE} is not in capitalize format'
		},
		},
		middleName:{
		 type:String,
		},
		lastName:{
		 type:String,
			required:true,
		},
	},)

const localGuardianSchema = new Schema<LocalGuardian>(
{
					firstName:{type:String ,required:true,},
					occupation: {type:String ,required:true,},
	                contactNO: {type:String ,required:true,},
})

const guardianSchema = new Schema<Guardian>({
			fatherName:{type:String ,required:true,},
			fatherOccupation:{type:String ,required:true,},
			fatherContactNO:{type:String ,required:true,},
			matherName:{type:String ,required:true,},
			matherOccupation:{type:String ,required:true,},
			matherContactNO:{type:String ,required:true,},
})

const StudentSchema = new  Schema<Student>({
id:{type:String,required:true,unique:true},
name:{
	type : userNameSchema,
	required : true,
},
gender:{
	type : String,
	enum:{
		values: ["male","female"],
		message: "the gender field can only be one of the following:'male','female', or 'other'."
	},
	required:true
},
dateOfBirth:{type:String, required:true,},
email:{type:String ,required:true,unique:true},
contactNumber:{type:String ,required:true,},
emergencyContactNO:{type:String ,required:true,},
bloodGroup:{
	type : String,
	enum:['A' , 'B' , 'AB' , 'O' , 'Rh+ ' , 'Rh-'],
	required:true
},
presentAddress:{type:String ,required:true,},
permanentAddress:{type:String ,required:true,},
guardian:{
	type : guardianSchema,
	required:true,
},
localGuardian:{
	type:localGuardianSchema,
	required:true,
},
profileImg:{type:String},
isActive : {
	type : String,
	enum:['Active','blocked'],
	default:'Active'
},
})

// create model 
export const StudentModel = model<Student>('Student',StudentSchema)
// export default StudentModel;