import React from "react";
import ButtonInputGroup from "../ButtonInputGroup/ButtonInputGroup";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
        >
          <path
            d="M6.22724 1.5C7.38194 -0.500001 10.2687 -0.5 11.4234 1.5L17.0526 11.25C18.2073 13.25 16.7639 15.75 14.4545 15.75H3.19615C0.88675 15.75 -0.556624 13.25 0.598076 11.25L6.22724 1.5Z"
            fill="#EB5757"
          />
        </svg>
        <span>windbnb</span>
      </div>
      <ButtonInputGroup/>
    </div>
  );
};

export default Header;
