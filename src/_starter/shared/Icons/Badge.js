import * as React from "react";

function SvgBadge(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M4.007 9.01A5 5 0 1112 9l1 5-2.131-.492L9.002 15l-.997-3.993L7 15l-1.88-1.492L3 14l1.007-4.99zM8 10a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6z"
          id="badge_svg__a"
        />
      </defs>
      <use fill="currentColor" xlinkHref="#badge_svg__a" fillRule="evenodd" />
    </svg>
  );
}

export default SvgBadge;
