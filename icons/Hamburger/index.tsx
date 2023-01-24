import React from "react";

const HamburgerIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Menu">
          <rect
            id="Rectangle"
            fill-rule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <line
            x1="5"
            y1="7"
            x2="19"
            y2="7"
            id="Path"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
          <line
            x1="5"
            y1="17"
            x2="19"
            y2="17"
            id="Path"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            id="Path"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
        </g>
      </g>
    </svg>
  );
};

export default HamburgerIcon;
