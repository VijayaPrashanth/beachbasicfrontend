/* eslint-disable testing-library/no-wait-for-side-effects */
import { act, render, waitFor } from "@testing-library/react"
import Shows from "./Shows";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { authHeader } from "../helpers/AuthService";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const mock = new AxiosMockAdapter(axios);

describe("shows",()=>{
    it("should render shows component",async()=>{
        const response = {
            movie:{
                id:101,
                name:"The shawshank redemption",
                imdb_rating:8.7
            },
            slot:{
                id:"slot1",
                startTime:"09:00:00",
                endTime:"12:30:00"
            },
            cost:150.53,
            date:11-10-2023
        }
        mock.onGet(`http://localhost:8080/shows?date=2023-10-13`).reply(200,response);
    
        await waitFor(()=>{
            render(
                <BrowserRouter>
                    <Shows />
                </BrowserRouter>
            )
        });

    })
})