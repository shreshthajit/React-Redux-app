import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRockets } from "../redux/actions/RocketActions";
import RocketComponent from "./RocketComponent";

const RocketPage = () => {
    const  details= useSelector((state) => state.allDetails.details);
    const dispatch = useDispatch();
    const fetchRockets = async() => {
        const response = await axios
            .get("https://api.spacexdata.com/v3/launches")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setRockets(response.data));
    };

    useEffect(() => {
        fetchRockets();
    }, []);

     
    return ( 
        <div className = "ui grid container" >
        <
        RocketComponent / >
        </div>
    );
};

export default RocketPage;
