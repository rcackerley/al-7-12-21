import * as React from "react";

function SvgNotes(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.416 2.568a.289.289 0 00-.1-.204.288.288 0 00-.216-.07l-7.351.612-3.66-.61a.29.29 0 00-.334.237l-1.75 9.916a.291.291 0 00.239.339l2.617.436.056 1.042a.292.292 0 00.323.274l4.51-.5 2.994.498a.292.292 0 00.335-.237l.113-.644 2.548-.283a.292.292 0 00.26-.306l-.584-10.5zm-3.423 10.144l-.09.508-3.373-.562-3.14-.523-2.26-.377L3.587 3.5l8.773 1.462-1.367 7.75zM4.335 6.433l5.998 1a.5.5 0 10.164-.986l-5.998-1a.5.5 0 00-.164.986zm-.297 2l5.999 1a.5.5 0 10.164-.986l-6-1a.5.5 0 00-.164.986zm-.3 2l3.999.597c.028.005.055.01.083.01.24 0 .452-.175.493-.42a.496.496 0 00-.412-.57l-4-.603a.5.5 0 00-.164.986z"
          id="notes_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="notes_svg__b" fill="#fff">
          <use xlinkHref="#notes_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#notes_svg__a" />
        <g mask="url(#notes_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgNotes;
