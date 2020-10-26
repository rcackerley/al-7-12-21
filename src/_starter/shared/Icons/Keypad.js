import * as React from "react";

function SvgKeypad(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M4.273 11.182a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm7.636 0a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zM8.091 3.545A1.273 1.273 0 118.09 1a1.273 1.273 0 010 2.545zm-3.818 0a1.273 1.273 0 110-2.545 1.273 1.273 0 010 2.545zm7.636 0a1.273 1.273 0 110-2.545 1.273 1.273 0 010 2.545zM8.091 7.364a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm-3.818 0a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm7.636 0a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm-3.818 3.818a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546zm0 3.818a1.273 1.273 0 110-2.545 1.273 1.273 0 010 2.545z"
          id="keypad_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="keypad_svg__b" fill="#fff">
          <use xlinkHref="#keypad_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#keypad_svg__a"
        />
        <g mask="url(#keypad_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgKeypad;
