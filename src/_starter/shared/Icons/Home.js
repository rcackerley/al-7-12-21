import * as React from "react";

function SvgHome(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.86 7.454L8.697 1.282a1.017 1.017 0 00-1.406 0L1.085 7.497a.292.292 0 00.207.498h.874v6.713c0 .161.13.292.291.292h3.497c.161 0 .292-.13.292-.292V9.747h3.497v4.961c0 .161.13.292.291.292h3.497c.161 0 .292-.13.292-.292V7.995h.88A.29.29 0 0015 7.703a.293.293 0 00-.14-.25z"
          id="home_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="home_svg__b" fill="#fff">
          <use xlinkHref="#home_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#home_svg__a" />
        <g mask="url(#home_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgHome;
