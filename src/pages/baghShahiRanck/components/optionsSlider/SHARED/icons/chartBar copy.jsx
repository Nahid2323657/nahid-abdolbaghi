import React from "react";

const ChartBar = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 15.75C1.51667 15.75 1.10433 15.5793 0.763 15.238C0.421 14.896 0.25 14.4833 0.25 14V7C0.25 6.51667 0.421 6.104 0.763 5.762C1.10433 5.42067 1.51667 5.25 2 5.25C2.48333 5.25 2.896 5.42067 3.238 5.762C3.57933 6.104 3.75 6.51667 3.75 7V14C3.75 14.4833 3.57933 14.896 3.238 15.238C2.896 15.5793 2.48333 15.75 2 15.75ZM8 15.75C7.51667 15.75 7.104 15.5793 6.762 15.238C6.42067 14.896 6.25 14.4833 6.25 14V2C6.25 1.51667 6.42067 1.104 6.762 0.762C7.104 0.420667 7.51667 0.25 8 0.25C8.48333 0.25 8.896 0.420667 9.238 0.762C9.57933 1.104 9.75 1.51667 9.75 2V14C9.75 14.4833 9.57933 14.896 9.238 15.238C8.896 15.5793 8.48333 15.75 8 15.75ZM14 15.75C13.5167 15.75 13.1043 15.5793 12.763 15.238C12.421 14.896 12.25 14.4833 12.25 14V11C12.25 10.5167 12.421 10.104 12.763 9.762C13.1043 9.42067 13.5167 9.25 14 9.25C14.4833 9.25 14.896 9.42067 15.238 9.762C15.5793 10.104 15.75 10.5167 15.75 11V14C15.75 14.4833 15.5793 14.896 15.238 15.238C14.896 15.5793 14.4833 15.75 14 15.75Z"
        fill={`${color || "#488CDA"} `}
      />
    </svg>
  );
};

export default ChartBar;