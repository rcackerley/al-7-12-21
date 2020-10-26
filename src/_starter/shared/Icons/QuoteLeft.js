import * as React from "react";

function SvgQuoteleft(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M2.4 13c-.773 0-1.4-.56-1.4-1.25V8c0-2.761 2.507-5 5.6-5h.35c.193 0 .35.14.35.313v.624c0 .173-.157.313-.35.313H6.6c-2.048.002-3.796 1.322-4.137 3.125H5.9c.773 0 1.4.56 1.4 1.25v3.125c0 .69-.627 1.25-1.4 1.25H2.4zm7.7 0c-.773 0-1.4-.56-1.4-1.25V8c0-2.761 2.507-5 5.6-5h.35c.193 0 .35.14.35.313v.624c0 .173-.157.313-.35.313h-.35c-2.048.002-3.796 1.322-4.137 3.125H13.6c.773 0 1.4.56 1.4 1.25v3.125c0 .69-.627 1.25-1.4 1.25h-3.5z"
          id="quote_left_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="quote_left_svg__b" fill="#fff">
          <use xlinkHref="#quote_left_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#quote_left_svg__a"
        />
        <g
          mask="url(#quote_left_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgQuoteleft;
