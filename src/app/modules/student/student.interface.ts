//import {Schema,model,connect} from 'mongoose'
export type Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNO:string
    matherName:string;
    matherOccupation:string;
    matherContactNO:string
}

export type UserName = {
Name: string;
middleName:string;
lastName:string;
}

export type LocalGuardian = {
firstName:string;
occupation: string;
contactNO: string;
}
export type  Student = {
id: string;
name:UserName
gender : "Mail"|"Femail";
dateOfBirth:string;
email: string;
contactNumber:string;
emergencyContactNO:string;
bloodGroup?:'A' | 'B' | 'AB' | 'O' | 'Rh+ ' | 'Rh-';
presentAddress:string;
permanentAddress:string;
guardian:Guardian;
localGuardian:LocalGuardian;
profileImg?:string;
isActive : 'Active'|'inActive'
}
