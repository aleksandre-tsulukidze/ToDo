import React from 'react';

const Svg = ({ title, color }) => {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}>
        {title}
      </h1>
      <svg
        width="250"
        height="220"
        viewBox="0 0 304 278"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
            d="M11.2567 42.5462C44.8177 30.214 99.8439 23.8147 99.8439 23.8147L256.613 4.26228L273.469 124.773C273.469 124.773 282.47 195.141 304.318 228.748C253.209 248.761 162.725 261.205 162.725 261.205L35.1319 277.119L6.3052 70.973C6.3052 70.973 1.70925 54.5239 11.2567 42.5462Z"
            fill="black"
            fillOpacity="0.39216"
          />
          <path
            d="M14.6191 39.0424C53.125 28.5759 104.852 22.1828 104.852 22.1828L261.628 2.62422L278.478 123.135C278.478 123.135 284.252 170.399 306.093 204C264.486 251.351 167.734 259.567 167.734 259.567L40.1404 275.487L11.3137 69.3349C11.3137 69.3349 8.81161 49.5151 14.6191 39.0424Z"
            // fill="url(#paint0_linear)"
            fill={color}
            stroke="black"
            strokeWidth="4"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="30.0311"
            y1="41.0865"
            x2="38.6015"
            y2="61.8967"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C800" />
            <stop offset="1" stopColor="#FFFF49" />
          </linearGradient>
          <clipPath id="clip0">
            <rect
              width="303.109"
              height="276.632"
              fill="white"
              transform="translate(0.445648 0.487381)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Svg;
