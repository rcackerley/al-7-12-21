import * as React from "react";

function SvgPaperPlane(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.884 1.04a.27.27 0 00-.286 0L1.135 8.85a.27.27 0 00.038.485l3.93 1.572 1.573 3.93.049.06c.016.022 0 .032 0 .043a.27.27 0 00.2.06h.031a.264.264 0 00.124-.06l2.434-2.692 3.517 1.136h.08a.27.27 0 00.27-.232l1.616-11.846a.27.27 0 00-.113-.264zm-2.5 2.952l-5.201 7.102a.264.264 0 00-.038.087l-.334 2.466-1.169-2.924 6.743-6.731z"
          id="paper-plane_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="paper-plane_svg__b" fill="#fff">
          <use xlinkHref="#paper-plane_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#paper-plane_svg__a"
        />
        <g
          mask="url(#paper-plane_svg__b)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgPaperPlane;
