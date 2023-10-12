import { Button, Container } from "@material-ui/core";
import { Form, Formik } from "formik";
import useLogin from "./hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormikTextField from "../formik/FormikTextField";
import { formSchema, initialValues } from "./services/loginFormService";
import styles from "./styles/loginStyles"
const Login = ({onLogin,isAuthenticated}) => {
    const classes = styles();
    const {handleLogin, handleError} = useLogin(onLogin);
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

                   
                    <Formik onSubmit={handleLogin} validationSchema={formSchema} initialValues={initialValues}>
                        <Form aria-label="form" className={classes.form}>
                            
                                <FormikTextField 
                                label="username" 
                                data-testid="username" 
                                required 
                                margin="dense" 
                                name="username"/>
                            
                                <FormikTextField 
                                label="password" 
                                data-testid="password" 
                                type="password" 
                                required 
                                margin="dense" 
                                name="password"/>
                                <Button variant="contained" style={{backgroundColor:"teal", color:"white"}} type="submit">Login</Button>
                            {
                                handleError()
                            }
                            
                        </Form>
                    </Formik> </Container>
                </div>
        </>
    )
}

export default Login;