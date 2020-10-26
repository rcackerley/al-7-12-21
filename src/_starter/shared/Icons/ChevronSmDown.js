import * as React from "react";

function SvgChevronSmDown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M5.707 6.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L8 8.586 5.707 6.293z"
          id="chevron-sm-down_svg__a"
        />
      </defs>
      <use
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#chevron-sm-down_svg__a"
      />
    </svg>
  );
}

export default SvgChevronSmDown;
