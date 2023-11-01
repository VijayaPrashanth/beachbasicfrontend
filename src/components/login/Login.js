import { Button, Container, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import useLogin from "./hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormikTextField from "../formik/FormikTextField";
import { formSchema, initialValues } from "./services/loginFormService";
import styles from "./styles/loginStyles"
const Login = ({ onLogin, isAuthenticated }) => {
    const classes = styles();
    const { handleLogin, handleError, errrorResponse } = useLogin(onLogin);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            console.log("login page");
            navigate("/");
        }
    }
    );

    return (
        <>
            <div className={classes.container}>
                <Container maxWidth="xs">
                    <Formik onSubmit={handleLogin} validationSchema={formSchema} initialValues={initialValues} id="formik">
                        <Form aria-label="form" className={classes.form}>

                            <FormikTextField
                                label="username"
                                data-testid="username"
                                required
                                margin="dense"
                                name="username" />

                            <FormikTextField
                                label="password"
                                data-testid="password"
                                type="password"
                                required
                                margin="dense"
                                name="password" />
                            {
                                handleError()
                            }
                            <Button variant="contained" style={{ backgroundColor: "teal", color: "white",marginTop:10 }} type="submit">Login</Button>

                            {errrorResponse && <Typography>
                                Login Failed
                            </Typography>}

                        </Form>
                    </Formik>
                    <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
                        <Typography>
                            New user?
                        </Typography>
                        <a href="/signup" style={{ textDecoration: "none", color: "teal", marginLeft: 10, marginTop: 2 }}>
                            Signup here
                        </a>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Login;