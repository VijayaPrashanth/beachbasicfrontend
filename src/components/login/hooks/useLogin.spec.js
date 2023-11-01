/* eslint-disable no-undef */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/render-result-naming-convention */
import { renderHook, screen } from "@testing-library/react"
import useLogin from "./useLogin"
import { when } from "jest-when";
import { ShallowWrapper, configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("error handling for useLogin", () => {
    it("should test error handling",()=>{
        
    })
})

describe.only("testing useLogin hook",()=>{
    const mockLogin = jest.fn();
    const errorComponent=() => <div>Login failed</div>
    it("handle successful login",()=>{

        const renderUselogin = renderHook(()=>useLogin(mockLogin));
        when(mockLogin).calledWith("vijay","Password").mockResolvedValue("login successful");
        const result = renderUselogin.result;
        const {handleLogin,handleError} = result.current;
        const errorfunction = ShallowWrapper(handleError());

        handleLogin({username: "vijay",password: "Password"});

        expect(mockLogin).toBeCalledTimes(1);
        expect(mockLogin).toBeCalledWith( "vijay","Password");
        expect(handleError()).toBe(undefined);

    });

    it("should throw error message when client error occurs",async()=>{
        
        when(mockLogin).calledWith("vijay","prashanth").mockRejectedValue({
            response:{
                status:401
            }
        });
        const renderUselogin = renderHook(() => useLogin(mockLogin));

        const result = renderUselogin.result;
        const {handleLogin,handleError} = result.current;
        const testError = {"response": {"status": 401}}
        const errorfunction = shallow(handleError());

        handleLogin("vijay","prashanth");

        // expect(errorfunction.text()).toBe("Login failed");
        // expect(handleError()).toBeCalledTimes(1);
        try {
            // await act(() => handleLogin({ username: "vijay", password: "prashanth" }));
            await handleLogin({ username: "vijay", password: "prashanth" });
        } catch (err) {
            expect(mockLogin).toBeCalledTimes(2);
            expect(mockLogin).toHaveBeenCalledWith("vijay", "prashanth");
            expect(handleError()).toBe(undefined);
            expect(err).toStrictEqual(testError)
        }

    });


});

