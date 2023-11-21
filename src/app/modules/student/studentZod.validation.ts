import { z } from 'zod';

// Define the zod schema for the UserName subdocument
const UserNameValidationSchema = z.object({
  Name: z.string().trim().min(1).max(20),
  middleName: z.string(),
  lastName: z.string().min(1),
});

// Define the zod schema for the LocalGuardian subdocument
const LocalGuardianValidationSchema = z.object({
  firstName: z.string().min(1),
  occupation: z.string().min(1),
  contactNO: z.string().min(1),
});

// Define the zod schema for the Guardian subdocument
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNO: z.string().min(1),
  matherName: z.string().min(1),
  matherOccupation: z.string().min(1),
  matherContactNO: z.string().min(1),
});

// Define the zod schema for the Student document
const StudentValidationSchema = z.object({
  id: z.string(),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female' ,]),
  email: z.string().email(),
  contactNumber: z.string(),
  emergencyContactNO: z.string(),
  bloodGroup: z.enum(['A', 'B', 'AB', 'O', 'Rh+', 'Rh-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string(),
  isActive: z.enum(['Active', 'blocked']),
})

export default StudentValidationSchema;