import { render, screen } from "@testing-library/react";
import Home from "./Home"

describe("Basic rendering of Home component",()=>{
    it("should display movie list",()=>{
        render(<Home/>);
        
        expect(screen.getByTestId("movieList")).toBeInTheDocument();
    })
})