import { object, ref, string } from "yup";
import apiService from "../../helpers/apiService";

export const initialValues = {
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',

};

export const formSchema = object().shape({
    name:string("Enter name")
        .required('Name is required')
        .matches(/^[A-Za-z ]*$/, 'Only alphabets are allowed'),
    username: string("Enter username")
        .required('Username is required')
        .matches(/^[A-za-z_].*$/,'username should startwith either alphabet or underscore')
        .test("", "username is already used", async (value) => {
            let usernameExist = true;
            if (value !== undefined && value != null) {
                const response = await apiService.get(`signup/${value}`);
                usernameExist = response.data;
            }
            return !usernameExist;
        }),
    email: string("Enter email id").required('Email is required')
        .email('Invalid email address'),
        
    phoneNumber: string("Enter phone number")
    .required('Mobile Number is required')
        .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
        // .matches(/^[6789]\d{9}$/, 'Enter Valid phone number')
        ,
    password: string().required('Password is required')
        .matches("^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])(?=.*\\d)(?=.*[A-Z]).{8,64}$", "Password must contain an uppercase letter,\n a digit, a special character and it's length must\n be between 8-64"),
    confirmPassword: string().required('Confirm Password is required')
        .oneOf([ref('password'), null], 'Passwords must match')
});