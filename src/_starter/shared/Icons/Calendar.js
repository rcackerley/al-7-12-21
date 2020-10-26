import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.727 2.273h-1.59a.318.318 0 00-.319.318v1.59a.636.636 0 11-.846-.597.318.318 0 00.21-.3V1.319a.318.318 0 00-.637 0v.955H5.773a.318.318 0 00-.318.318v1.59a.636.636 0 11-.847-.597.318.318 0 00.21-.3V1.319a.318.318 0 10-.636 0v.955h-1.91C1.57 2.273 1 2.843 1 3.545v10.182C1 14.43 1.57 15 2.273 15h9.093a.636.636 0 00.452-.185l2.997-2.997a.636.636 0 00.185-.452v-7.82c0-.703-.57-1.273-1.273-1.273zm0 8.909h-1.272c-.703 0-1.273.57-1.273 1.273v1.272h-8.91V6.091h11.455v5.09z"
          id="calendar_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="calendar_svg__b" fill="#fff">
          <use xlinkHref="#calendar_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#calendar_svg__a"
        />
        <g mask="url(#calendar_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCalendar;
