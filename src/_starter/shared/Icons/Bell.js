import * as React from "react";

function SvgBell(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.455 12.136a1.8 1.8 0 00-.408-1.05c-.369-.54-.865-1.285-.865-3.404v-.955A4.455 4.455 0 009 2.457v-.184a1.273 1.273 0 00-2.545 0v.184a4.455 4.455 0 00-3.182 4.27v.955c0 2.119-.497 2.863-.866 3.404A1.8 1.8 0 002 12.136c0 1.038 2.164 1.4 3.914 1.528a1.91 1.91 0 003.62 0c1.757-.128 3.92-.49 3.92-1.528zM7.09 2.273a.636.636 0 011.273 0v.05a4.01 4.01 0 00-1.273 0v-.05z"
          id="bell_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bell_svg__b" fill="#fff">
          <use xlinkHref="#bell_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#bell_svg__a" />
        <g mask="url(#bell_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgBell;
