import { render, screen, waitFor } from "@testing-library/react";
import { EnzymeAdapter, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowBooking from "./ShowBooking"
import { BrowserRouter, MemoryRouter, useLocation } from "react-router-dom";

configure({adapter: new Adapter()});
const movie = 
    {genre: "Mystery/Drama",
    id: "m106",
    image_url: "https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg",
    name: "se7en",
    rating: "8.6",
    running_time_in_mins: 127};

jest.mock("react-router-dom", () => {
    return({
        ...jest.requireActual("react-router-dom"),
        useLocation: ()=>{
            return{
                    pathname: "/book",
                    search:'',
                    hash:'',
                    key:'',
                    state: movie,
            };
        },
    // useLocation: jest.fn().mockResolvedValue({
    //     pathname: {},
    //     state: {
    //         genre: "Mystery/Drama",
    //         id: "m106",
    //         image_url: "https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg",
    //         name: "se7en",
    //         rating: "8.6",
    //         running_time_in_mins: 127
    //     }
    // }),
})
})

describe("showbooking basic rendering", () => {
    
    it("should display movie poster", () => {
        render(
            <MemoryRouter>
                <ShowBooking />
            </MemoryRouter>
        )

        expect(screen.getByTestId("show_movie_poster")).toBeInTheDocument();
    })
})