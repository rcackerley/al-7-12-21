import * as React from "react";

function SvgPhone(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.202 10.439a7.53 7.53 0 01-2.365-.376 1.083 1.083 0 00-1.054.221L8.31 11.412a8.238 8.238 0 01-3.684-3.685l1.09-1.473c.284-.284.386-.701.266-1.083a7.538 7.538 0 01-.376-2.366A1.068 1.068 0 004.5 1.737H2.061A1.068 1.068 0 001 2.797C1.004 9.536 6.465 14.997 13.202 15a1.068 1.068 0 001.061-1.061v-2.432c0-.587-.474-1.064-1.06-1.068z"
          id="phone_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="phone_svg__b" fill="#fff">
          <use xlinkHref="#phone_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#phone_svg__a" />
        <g mask="url(#phone_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgPhone;
