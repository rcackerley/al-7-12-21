import * as React from "react";

function SvgMapMarker(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M7.993 1A4.666 4.666 0 003.91 7.883l3.85 6.964a.292.292 0 00.513 0l3.803-6.964A4.666 4.666 0 007.993 1zm0 7a2.333 2.333 0 110-4.667 2.333 2.333 0 010 4.666z"
          id="map-marker_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="map-marker_svg__b" fill="#fff">
          <use xlinkHref="#map-marker_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#map-marker_svg__a"
        />
        <g
          mask="url(#map-marker_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgMapMarker;
