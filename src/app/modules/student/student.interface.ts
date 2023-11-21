import { Model } from "mongoose";

//import {Schema,model,connect} from 'mongoose'
export type TGuardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNO:string;
    matherName:string;
    matherOccupation:string;
    matherContactNO:string;
}

export type TUserName = {
Name: string;
middleName:string;
lastName:string;
}

export type TLocalGuardian = {
firstName:string;
occupation: string;
contactNO: string;
}
export type  TStudent = {
id: string;
name:TUserName;
gender : "mail"|"femail";
dateOfBirth:string;
email: string;
contactNumber:string;
emergencyContactNO:string;
bloodGroup?:'A' | 'B' | 'AB' | 'O' | 'Rh+ ' | 'Rh-';
presentAddress:string;
permanentAddress:string;
guardian:TGuardian;
localGuardian:TLocalGuardian;
profileImg:string;
isActive : 'Active'|'blocked';
}
// for creating static
 export interface StudentModel extends Model<TStudent> {
   isUserExists(id:string):Promise<TStudent| null>
  }

// for creating instance 
// export type StudentMethod = {
//     isUserExists(id:string):Promise<TStudent | null>
// }
// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethod>;
