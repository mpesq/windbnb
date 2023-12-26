import React from "react";
import "./Card.css";
import apartment from "../../assets/apartment1.png";

function Card({ type, rate, picture, title, superhost })  {
  return (
    <div className="card-container">
      <img className="card-image" src={picture} alt="apartment" />
      <div className="card-hosting-type">
        {superhost ? (
          <div className="super-host">
            <span>Super host</span>
          </div>
        ) : (
          ""
        )}
        <div className="card-hosting-type-text">{type}</div>
        <div className="card-hosting-type-rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_31)">
              <path
                d="M14.43 8.00001L12.96 3.16001C12.67 2.21001 11.33 2.21001 11.05 3.16001L9.56996 8.00001H5.11996C4.14996 8.00001 3.74996 9.25001 4.53996 9.81001L8.17996 12.41L6.74996 17.02C6.45996 17.95 7.53996 18.7 8.30996 18.11L12 15.31L15.69 18.12C16.46 18.71 17.54 17.96 17.25 17.03L15.82 12.42L19.46 9.82001C20.25 9.25001 19.85 8.01001 18.88 8.01001H14.43V8.00001Z"
                fill="#EB5757"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_31">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>{rate}</span>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
