/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import apiService from "../../helpers/apiService.js"
import moment from "moment";

export default (today) =>{

    const [shows,setShows] = useState([])
    const [date,setDate] = useState(" ")

    useEffect(()=>{
        apiService.get(`shows?date=${today}`)
        .then((res)=>{
            setDate(res.data[0].date)
            setShows(res.data)
        })
    },[])

    console.log("show from useshow : "+ shows);

    const isToday=()=>{
        return date===moment().format("YYYY-MM-DD");
    }

    const isNotNext=()=>{
        return date===moment().add(7,"days").format("YYYY-MM-DD");
    }

    const previousDay = async () => {
        console.log("previous day: " + date);
        console.log("previous day : " + moment(date, "YYYY-MM-DD").subtract(1, "day").format("YYYY-MM-DD"));
        await apiService.get(`shows?date=${moment(date, "YYYY-MM-DD").subtract(1, "day").format("YYYY-MM-DD")}`)
            .then((res) => {
                setDate(res.data[0].date);
                setShows(res.data);
            })
    }

    const nextDay = async () => {
        console.log("next day : " + moment(date, "YYYY-MM-DD").add(1, "day").format("YYYY-MM-DD"));
        await apiService.get(`shows?date=${moment(date, "YYYY-MM-DD").add(1, "day").format("YYYY-MM-DD")}`)
            .then((res) => {
                setDate(res.data[0].date);
                setShows(res.data);
            })
    }

    const getDate = () =>{
        return date;
    }

    return {
        shows: shows,
        previousDay: previousDay,
        nextDay: nextDay,
        isToday: isToday,
        isNotNext: isNotNext,
        getDate: getDate
    }

}
