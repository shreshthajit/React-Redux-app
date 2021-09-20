import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selecte Rocket,
    removeSelecte Rocket,
} from "../redux/actions/RocketActions";
const RocketDetails = () => {
    const { RocketId } = useParams();
    let Rocket = useSelector((state) => state Rocket);
    const{flight_number,mission_name,mission_id,
        upcoming,launch_year,launch_date_unix,lauch_date_utc,launch_date_local}=details;
     const dispatch = useDispatch();
    const fetc RocketDetail = async(id) => {
        const response = await axios
            .get(`https://api.spacexdata.com/v3/launches/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedRocket(response.data));
    };

    useEffect(() => {
        if  RocketId && RocketId !== "") fetchRocketDetail RocketId);
        return () => {
            dispatch(removeSelecte Rocket());
        };
    },  RocketId]);
    return ( 
        <div className = "ui grid container" > {
            Object.keys Rocket).length === 0 ? ( 
                <div > ...Loading </div>) : (
                     <div className = "ui placeholder segment" >
                <div className = "ui two column stackable center aligned grid" >
                <div className = "ui vertical divider" > AND < /div>
                 <div className = "middle aligned row" >
                <div className = "column lp" >
               
                </div>
                 <div className = "column rp" >
                <h1 > { title } </h1> <h2 >
                <
                a className = "ui teal tag label" > $ { price } < /a> <
                /h2> <
                h3 className = "ui brown block header" > { category } < /h3> <
                p > { description } < /p> <
                div className = "ui vertical animated button"
                tabIndex = "0" >
                <
                div className = "hidden content" >
                <
                i className = "rocket icon" > < /i> <
                /div> <
                div className = "visible content" > Add rocket < /div> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div>
            )
        } <
        /div>
    );
};

export default RocketDetails;
