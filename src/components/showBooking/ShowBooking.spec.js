import { render, screen } from "@testing-library/react";
import ShowBooking from "./ShowBooking"
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: ()=>({
        state: {
            movie: {genre: "Mystery/Drama",
                id: "m106",
                image_url: "https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg",
                name: "se7en",
                rating: "8.6",
            running_time_in_mins: 127}}
    })
}))

describe("showbooking basic rendering", () => {
    
    it("should display movie poster", () => {
        render(
            <MemoryRouter>
                <ShowBooking />
            </MemoryRouter>
        )

        expect(screen.getByTestId("show_movie_poster")).toBeInTheDocument();
        expect(screen.getByTestId("show_movie_name")).toBeInTheDocument();
        expect(screen.getByTestId("show_movie_genre")).toBeInTheDocument();
        expect(screen.getByTestId("show_running_time")).toBeInTheDocument();
        expect(screen.getByTestId("show_imdb_rating")).toBeInTheDocument();
        expect(screen.getByTestId("bookbutton")).toBeInTheDocument();
        expect(screen.getByTestId("availableshows")).toBeInTheDocument();
    })
})