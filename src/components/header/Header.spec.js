/* eslint-disable testing-library/prefer-find-by */
import { render, screen, waitFor } from "@testing-library/react"
import Header from "./Header";

describe("basic functionality of header component",()=>{
    it("should render name",()=>{
        render(<Header/>);

        expect(screen.getByTestId("name")).toBeInTheDocument();
    })

    it("should have welcome text",async()=>{
        render(<Header isAuthenticated={true}/>);

        await waitFor(()=>expect(screen.getByTestId("welcome_text")).toBeInTheDocument())
    })

    it("should have usericon",async()=>{
        render(<Header isAuthenticated={true}/>);
        await waitFor(()=>expect(screen.getByTestId("user_icon")).toBeInTheDocument())
    })
})