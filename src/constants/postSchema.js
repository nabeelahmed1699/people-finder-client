import * as yup from 'yup';
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
export const missingPostScheme = yup.object().shape({
	guestName:yup.string().required(),
	name: yup.string().required(),
	fatherName: yup.string(),
	motherName: yup.string(),
	age: yup.number().required(),
	country: yup.string().required(),
	city: yup.string().required(),
	street: yup.string(),
	state: yup.string(),
	dateMissing: yup.date().required(),
	physicalCondition: yup.string(),
	mentalCondition: yup.string(),
	cellNo: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Phone number is a required field'),
	description: yup.string(),
	
});