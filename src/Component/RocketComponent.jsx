import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RocketComponent = () => {
  const details = useSelector((state) => state.alldetails.details);
  const renderList = details.map((details) => {
     
    const{flight_number,mission_name,mission_id,
      upcoming,launch_year,launch_date_unix,lauch_date_utc,launch_date_local}=details;

     return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
               
              <div className="content">
                <div className="header">{title}</div>
                <div className="mission_id">$ {mission_id}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default RocketComponent;
