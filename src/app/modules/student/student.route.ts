import express from 'express'
import {StudentControllers} from './student.controller';
const route = express.Router()
//will call controller function 
route.post('/create-student',StudentControllers.createStudent)
route.get('/', StudentControllers.getAllStudents)

 route.get('/:studentID', StudentControllers.SingleStudents)
export const StudentRoutes = route;