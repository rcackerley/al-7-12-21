import * as React from "react";

function SvgCloud(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M12.071 5.929A3.212 3.212 0 008.875 3a3.207 3.207 0 00-2.613 1.37A2.045 2.045 0 003.34 6.037 3.217 3.217 0 001 9.124c0 1.77 1.44 3.208 3.208 3.208h7.584c1.769 0 3.208-1.439 3.208-3.208a3.212 3.212 0 00-2.929-3.196z"
          id="cloud_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="cloud_svg__b" fill="#fff">
          <use xlinkHref="#cloud_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#cloud_svg__a" />
        <g mask="url(#cloud_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCloud;
