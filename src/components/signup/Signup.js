import { Form, Formik } from "formik";
import FormikTextField from "../formik/FormikTextField";
import { Button, Container, Typography } from "@material-ui/core";
import { formSchema, initialValues } from "./services/SignupFormService";
import apiService from "../helpers/apiService";
import { Navigate } from "react-router";
import { useState } from "react";

const Signup = () => {
    const [showError, setShowError] = useState(false);

    const errorMessage = () => {
        if (showError) {
            return (
                <Typography variant="body1" color="error">
                    Account already exists with this email or mobile number.
                </Typography>
            )
        }
    };

    const handleSignUp = async (values) => {
        const { name, username, password, email, phoneNumber } = values;

        const payload = {
            username: username,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }

        try {
            await apiService.post("/signup", payload);
            setShowError(false);
            Navigate("/");
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setShowError(true);
            } else {
                throw err;
            }
        }
    };


    return (
        <>
            <div style={{ marginTop: 100 }}>
                <Container maxWidth="xs">
                    <Formik initialValues={initialValues} validationSchema={formSchema}>
                        <Form style={{ display: "flex", flexDirection: "column" }}>
                            <FormikTextField
                                required
                                margin="dense"
                                name="name"
                                label="Name"
                                inputProps={{ "data-testid": "Name" }}
                                autoFocus
                            />
                            <FormikTextField
                                name="username"
                                label="Username : "
                                required />

                            <FormikTextField
                                required
                                name="Email ID"
                                label="EmailID : "
                            />

                            <FormikTextField
                                required
                                label="Phone Number : "
                                name="Phone Number"
                            />

                            <FormikTextField
                                required
                                label="Password : "
                                type="password"
                                name="password"
                            />

                            <FormikTextField
                                required
                                label="Confirm Password : "
                                type="password"
                                name="Confirm Password"
                            />
                            {
                                errorMessage()
                            }
                            <Button variant="contained" style={{ backgroundColor: "teal", color: "white", marginTop: 10 }}>SignUp</Button>
                        </Form>
                    </Formik>
                    <div style={{ display: "flex", marginTop: 10, justifyContent: "center" }}>
                        <Typography>Already have an account?</Typography>
                        <a href="/login" style={{ textDecoration: 'none', color: "teal", marginLeft: 10, marginTop: 3 }}>
                            Login
                        </a>
                    </div>
                </Container>

            </div>

        </>
    )
}

export default Signup;