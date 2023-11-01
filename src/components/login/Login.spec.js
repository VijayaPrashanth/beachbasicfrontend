import { render, screen } from "@testing-library/react"
import Login from "./Login"
import { MemoryRouter } from "react-router-dom";
import { ShallowWrapper, configure, mount, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Formik } from "formik";
import { Typography } from "@material-ui/core";

configure({ adapter: new Adapter() });


// jest.mock("./hooks/useLogin.js",()=>({
//     onLogin :jest.fn()
// })
// );

jest.mock("./services/loginFormService.js",()=>({
    initialValues:"initialValues",
    formSchema:"formSchema"
}))

describe("login component",()=>{

    const testOnLogin = jest.fn();
    const TestErrorComponent = ()=> <Typography>Login failed</Typography>;
    const testHandleLogin = jest.fn();

    it("should render a form with username and password",()=>{
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        expect(screen.getByRole("form")).toBeInTheDocument();
        expect(screen.getByTestId("username")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
    });

    it("should return login form when not authenticated",async ()=>{
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const renderLogin = await shallow(
            <MemoryRouter>
                <Login isAuthenticated={false} onLogin={testOnLogin}/>
            </MemoryRouter>
        );

        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
        const formikComponent = renderLogin.find(Formik);
        const testErrorDivComponent = renderLogin.find(TestErrorComponent);
        expect(testErrorDivComponent).toBeTruthy();
        expect(testErrorDivComponent.length).toBe(1);
        expect(renderLogin.find('#formik')).toBeTruthy();
        expect(renderLogin.find('#formik').props("initialValues")).toEqual("initialValues");
        expect(formikComponent.prop("validationSchema")).toBe("formSchema");
        expect(formikComponent.prop("onSubmit")).toEqual(testHandleLogin);
    })
})