import moment from "moment";
import apiService from "../../helpers/apiService";
import { useState } from "react";

// export const previousDay = async(prev_date) => {
//     console.log("previous day: " + prev_date);
//     console.log("previous day : "+moment(prev_date, "YYYY-MM-DD").subtract(1, "day").format("YYYY-MM-DD"));
//     await apiService.get(`shows?date=${moment(prev_date, "YYYY-MM-DD").subtract(1, "day").format("YYYY-MM-DD")}`)
//         .then((res) => {
//             // setResponse(res.data);
//         })
//     // console.log("previous day : " + location.pathname);
// }

// export const nextDay = async(next_date) => {
//     // const [response, setResponse] = useState([]);
//     console.log("next day : "+moment(next_date, "YYYY-MM-DD").add(1, "day").format("YYYY-MM-DD"));
//     await apiService.get(`shows?date=${moment(next_date, "YYYY-MM-DD").add(1, "day").format("YYYY-MM-DD")}`)
//         .then((res) => {
//             // setResponse(res.data);
//         })
//     // console.log("next day : " + location.pathname);
// }

export default function ShowService(){

    const [response,setResponse] = useState([]);

    return(
        <>
        </>
    );
}