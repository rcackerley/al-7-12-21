import * as React from "react";

function SvgEllipsishorizontal(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M4.5 7.875c0 .483-.17.896-.513 1.237a1.686 1.686 0 01-1.237.513c-.483 0-.896-.17-1.237-.513A1.686 1.686 0 011 7.875c0-.483.17-.896.513-1.237a1.686 1.686 0 011.237-.513c.483 0 .896.17 1.237.513.342.341.513.754.513 1.237zm5.25 0c0 .483-.17.896-.513 1.237A1.686 1.686 0 018 9.625c-.483 0-.896-.17-1.237-.513a1.686 1.686 0 01-.513-1.237c0-.483.17-.896.513-1.237A1.686 1.686 0 018 6.125c.483 0 .896.17 1.237.513.342.341.513.754.513 1.237zm5.25 0c0 .483-.17.896-.513 1.237a1.686 1.686 0 01-1.237.513c-.483 0-.896-.17-1.237-.513a1.686 1.686 0 01-.513-1.237c0-.483.17-.896.513-1.237a1.686 1.686 0 011.237-.513c.483 0 .896.17 1.237.513.342.341.513.754.513 1.237z"
          id="ellipsis_horizontal_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ellipsis_horizontal_svg__b" fill="#fff">
          <use xlinkHref="#ellipsis_horizontal_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#ellipsis_horizontal_svg__a" />
        <g
          mask="url(#ellipsis_horizontal_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgEllipsishorizontal;
