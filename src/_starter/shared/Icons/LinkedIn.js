import * as React from "react";

function SvgLinkedIn(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.727 1H2.273C1.57 1 1 1.57 1 2.273v11.454C1 14.43 1.57 15 2.273 15h11.454C14.43 15 15 14.43 15 13.727V2.273C15 1.57 14.43 1 13.727 1zM5.455 12.773a.318.318 0 01-.319.318H3.227a.318.318 0 01-.318-.318V6.409c0-.176.143-.318.318-.318h1.91c.175 0 .318.142.318.318v6.364zM4.182 5.455a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm8.909 7.318a.318.318 0 01-.318.318h-1.91a.318.318 0 01-.318-.318v-3.5c0-.796-.356-1.273-.954-1.273s-.955.477-.955 1.273v3.5a.318.318 0 01-.318.318H6.41a.318.318 0 01-.318-.318V6.409c0-.176.142-.318.318-.318h1.91c.175 0 .317.142.317.318v.197a2.437 2.437 0 011.591-.515c1.738 0 2.864 1.273 2.864 3.182v3.5z"
          id="linkedIn_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="linkedIn_svg__b" fill="#fff">
          <use xlinkHref="#linkedIn_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#linkedIn_svg__a"
        />
        <g mask="url(#linkedIn_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgLinkedIn;
