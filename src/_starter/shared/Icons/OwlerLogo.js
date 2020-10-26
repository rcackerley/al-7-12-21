import * as React from "react";

function SvgOwlerLogo(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 13" {...props}>
      <g fill="none" fillRule="evenodd">
        <g fill="#2A2829">
          <path d="M5 10.5h1v2H5zM8 10.5h1v2H8z" />
        </g>
        <path
          d="M0 3c0 1.654.656 2.651 1.969 2.992A.25.25 0 002.032 6h.904a.5.5 0 01.498.548C3.13 9.683 4.319 11.25 7 11.25s3.87-1.567 3.566-4.702A.5.5 0 0111.064 6h.904a.25.25 0 00.063-.008C13.344 5.651 14 4.654 14 3h-3.076a.5.5 0 01-.494-.418L10 0C9 .666 8 .999 7 .999S5.002.666 4.003 0L3.57 2.583A.5.5 0 013.077 3H0z"
          fill="#F05C27"
        />
        <g transform="translate(4 2)">
          <circle fillOpacity={0.75} fill="#FFF" cx={1.5} cy={1.5} r={1.5} />
          <circle fill="#2A2829" cx={1.5} cy={1.5} r={1} />
          <circle fillOpacity={0.75} fill="#FFF" cx={4.5} cy={1.5} r={1.5} />
          <circle fill="#2A2829" cx={4.5} cy={1.5} r={1} />
        </g>
        <path fill="#FBD6C8" d="M7 4.5l-.5.5 1 1V5z" />
      </g>
    </svg>
  );
}

export default SvgOwlerLogo;
