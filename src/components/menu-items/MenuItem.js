import React from "react";
import "./MenuItem.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  // console.log("location", location);
  // console.log("navigate", navigate);
  // console.log("params", params);

  return (
    <div
      className={`${size} menu-item`}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
      onClick={() => {
        console.log("linkUrl", linkUrl);
        navigate(`${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
