import { render } from "@testing-library/react"
import ProtectedRoute from "./ProtectedRoute"
import { isLoggedIn, logout } from "../helpers/AuthService"
import { Home } from "@mui/icons-material"
import { MemoryRouter } from "react-router-dom"


jest.mock("../helpers/AuthService.js",()=>({
    isLoggedIn:jest.fn(),
    logout:jest.fn(),
}))

describe("protectedRoute component",()=>{

    it("should call logout if it is not authenticated",()=>{
        render(
            <MemoryRouter>
                <ProtectedRoute element={<Home/>}/>
            </MemoryRouter>
        );
  
        expect(isLoggedIn).toBeCalled();
        expect(logout).toBeCalled();
    })
} )