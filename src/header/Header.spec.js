import { render, screen } from "@testing-library/react"
import Header from "./Header";

describe("basic functionality of header component",()=>{
    it("should render name",()=>{
        render(<Header/>);

        expect(screen.getByTestId("name")).toBeInTheDocument();
    })

    it("should have welcome text",()=>{
        render(<Header/>);

        expect(screen.getByTestId("welcome_text")).toBeInTheDocument();
    })

    it("should have usericon",()=>{
        render(<Header/>);
        expect(screen.getByTestId("user_icon")).toBeInTheDocument();
    })
})