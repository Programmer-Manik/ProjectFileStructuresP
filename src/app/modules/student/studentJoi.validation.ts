import Joi from 'joi'
const userNameValidationSchema = Joi.object({
    Name: Joi.string()
      .trim()
      .required()
      .max(20)
      .regex(/^[A-Z][a-z]*$/)
      .message('Name must start with a capital letter and contain only letters'),
    middleName: Joi.string(),
    lastName: Joi.string()
      .required()
      .regex(/^[A-Za-z]+$/)
      .message('Last name must contain only letters'),
  });
  
  const localGuardianValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNO: Joi.string().required(),
  });
  
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNO: Joi.string().required(),
    matherName: Joi.string().required(),
    matherOccupation: Joi.string().required(),
    matherContactNO: Joi.string().required(),
  });
  
  const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().required(),
    email: Joi.string().email().required(),
    contactNumber: Joi.string().required(),
    emergencyContactNO: Joi.string().required(),
    bloodGroup: Joi.string().valid('A', 'B', 'AB', 'O', 'Rh+', 'Rh-').required(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('Active', 'blocked').default('Active'),
  });
  
  export default studentValidationSchema;