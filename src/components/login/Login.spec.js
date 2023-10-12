import { render, screen } from "@testing-library/react"
import Login from "./Login"
import { MemoryRouter } from "react-router-dom";

describe("login component",()=>{

    it("should render a form with username and password",()=>{
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        expect(screen.getByRole("form")).toBeInTheDocument();
        expect(screen.getByTestId("username")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
    })
})