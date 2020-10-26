import * as React from "react";

function SvgMenu(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M15 13v-2H1v2h14zm0-4H1V7h14v2zm0-4H1V3h14v2z"
          id="menu_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="menu_svg__b" fill="#fff">
          <use xlinkHref="#menu_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#menu_svg__a" />
        <g mask="url(#menu_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgMenu;
