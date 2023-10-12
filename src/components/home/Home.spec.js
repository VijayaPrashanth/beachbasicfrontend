/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { prettyDOM, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import axios from "axios";
//import MockAdapter from "axios-mock-adapter";
import AxiosMockAdapter from "axios-mock-adapter";
import { MemoryRouter } from "react-router-dom";

// jest.mock('axios',()=>{
// __esModule: true,
// });
const mock = new AxiosMockAdapter(axios);
//const mock = new MockAdapter(axios);
describe("Basic rendering of Home component", () => {
    it("should display movie list", async () => {
        const data = [{
            id: "m101",
            name: "The shawshank Redemption",
            rating: 9.3, genre: "drama",
            running_time_in_mins: 147,
            image_url: "https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg"
        }];


        mock.onGet(`http://localhost:8080/movies`).reply(200, data);
        // const {renderer} = render(
        // <MemoryRouter>
        //     <Home />
        // </MemoryRouter>)

        // console.log(Home.response);
        // console.log(prettyDOM(renderer));

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>)

expect(screen.getByTestId("container")).toBeInTheDocument();
expect(screen.getByTestId("movieList")).toBeInTheDocument();
       
 await waitFor(() => {
        expect(screen.getByTestId("movie_poster")).toBeInTheDocument();
        //     expect(screen.getByTestId("movie_name")).toBeInTheDocument();
        //     expect(screen.getByTestId("genre")).toBeInTheDocument();
        //     expect(screen.getByTestId("running_time")).toBeInTheDocument();
        //     expect(screen.getByTestId("rating")).toBeInTheDocument();
         }
         );

    })

    it("should display details", async() => {

        const data = [{
            id: "m101",
            name: "The shawshank Redemption",
            rating: 9.3, genre: "drama",
            running_time_in_mins: 147,
            image_url: "https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg"
        }];
        //when(axios.get).calledWith().mockResolvedValue(data);
        //axios.get.mockResolvedValue(data);
        //mockedAxios.get.mockResolvedValue(data);

        mock.onGet(`http://localhost:8080/movies`).reply(200, data);

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        await waitFor(()=>{
            // expect(screen.getByText("The shawshank Redemption")).toBeInTheDocument();
            // expect(screen.getByText("IMDB Rating : 9.3")).toBeTruthy();
            // expect(screen.getByText("drama")).toBeInTheDocument();
            // expect(screen.getByText("Running time : 147 mins")).toBeInTheDocument();
            expect(screen.getByAltText("movie_image").getAttribute('src')).toBe("https://www.movieposters.com/cdn/shop/products/248875c05ff4754eb10c861c0f21c42d_5be29f59-c841-4941-ae55-3dff98e364dc_480x.progressive.jpg")
        })
        
    })
})