import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";
import apiService from "./apiService";

const mock = new AxiosMockAdapter(axios);
describe("test apiService",()=>{
    it("should make get request",async()=>{

        const path ="shows?date=2023-10-11";
        const response = {
            id:"m101",
            movie:{
                name:"The shining"
            },
            slot:{
                startTime:"12:00:00",
                endTime:"14:30:00"
            }
        }
        mock.onGet(`http://localhost:8080/${path}`).reply(200,response);

        const forRequest = await apiService.get(path);
        
        expect(forRequest.status).toBe(200);
        expect(forRequest.data).toEqual(response); 
    })
})