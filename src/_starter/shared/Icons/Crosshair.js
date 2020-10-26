import * as React from "react";

function SvgCrosshair(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M13.955 7.26h.345a.7.7 0 01.7.7v.1a.7.7 0 01-.7.7h-.348a6.013 6.013 0 01-5.202 5.193v.347a.7.7 0 01-.7.7h-.1a.7.7 0 01-.7-.7v-.347A6.013 6.013 0 012.048 8.76H1.7a.7.7 0 01-.7-.7v-.1a.7.7 0 01.7-.7h.345A6.013 6.013 0 017.25 2.047V1.7a.7.7 0 01.7-.7h.1a.7.7 0 01.7.7v.347a6.013 6.013 0 015.205 5.213zm-1.516 0A4.512 4.512 0 008.75 3.563v.487a.7.7 0 01-.7.7h-.1a.7.7 0 01-.7-.7v-.487A4.512 4.512 0 003.56 7.26h.49a.7.7 0 01.7.7v.1a.7.7 0 01-.7.7h-.486a4.512 4.512 0 003.686 3.677v-.487a.7.7 0 01.7-.7h.1a.7.7 0 01.7.7v.487a4.512 4.512 0 003.686-3.677h-.486a.7.7 0 01-.7-.7v-.1a.7.7 0 01.7-.7h.49zM8 9a1 1 0 110-2 1 1 0 010 2z"
          id="crosshair_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="crosshair_svg__b" fill="#fff">
          <use xlinkHref="#crosshair_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#crosshair_svg__a"
        />
        <g mask="url(#crosshair_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgCrosshair;
