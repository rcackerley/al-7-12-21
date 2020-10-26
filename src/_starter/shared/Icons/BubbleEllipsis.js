import * as React from "react";

function SvgBubbleEllipsis(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M7.998 1a6.996 6.996 0 00-5.883 10.786l-.664 2.402a.292.292 0 00.35.361l2.489-.624A6.996 6.996 0 107.998 1zM5 9a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2z"
          id="bubble-ellipsis_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bubble-ellipsis_svg__b" fill="#fff">
          <use xlinkHref="#bubble-ellipsis_svg__a" />
        </mask>
        <use
          fill="#FFF"
          fillRule="nonzero"
          xlinkHref="#bubble-ellipsis_svg__a"
        />
        <g
          mask="url(#bubble-ellipsis_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgBubbleEllipsis;
