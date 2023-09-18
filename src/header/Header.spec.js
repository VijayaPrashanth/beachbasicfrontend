import { render, screen } from "@testing-library/react"
import Header from "./Header";

describe("basic functionality of header component",()=>{
    it("should render name",()=>{
        render(<Header/>);

        expect(screen.getByTestId("name")).toBeInTheDocument();
    })
})