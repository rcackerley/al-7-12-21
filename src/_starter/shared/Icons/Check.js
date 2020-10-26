import * as React from "react";

function SvgCheck(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.727 1H2.273C1.57 1 1 1.57 1 2.273v11.454C1 14.43 1.57 15 2.273 15h11.454C14.43 15 15 14.43 15 13.727V2.273C15 1.57 14.43 1 13.727 1zm-1.05 4.493l-5.504 5.504a.636.636 0 01-.898 0L3.323 8.038a.318.318 0 010-.452l.452-.451a.318.318 0 01.451 0l2.501 2.513 5.053-5.053a.318.318 0 01.452 0l.452.452a.318.318 0 01-.007.446z"
          id="check_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="check_svg__b" fill="#fff">
          <use xlinkHref="#check_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#check_svg__a" />
        <g mask="url(#check_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCheck;
