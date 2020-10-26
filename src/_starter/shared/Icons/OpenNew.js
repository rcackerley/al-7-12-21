import * as React from "react";

function SvgOpenNew(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M1 1h2v1H2v1H1V1zm0 4h1v2H1V5zm0 4h1v2H1V9zm13 0h1v2h-1V9zM1 13h1v1h1v1H1v-2zm4 1h2v1H5v-1zM5 1h2v1H5V1zm4 13h2v1H9v-1zm4 0h1v-1h1v2h-2v-1zm2-13v5.5a.5.5 0 01-.5.5h-.556a.5.5 0 01-.5-.5V3.655L6.26 10.84a.5.5 0 01-.707 0l-.393-.393a.5.5 0 010-.707l7.185-7.184H9.5a.5.5 0 01-.5-.5V1.5a.5.5 0 01.5-.5H15z"
          id="open-new_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="open-new_svg__b" fill="#fff">
          <use xlinkHref="#open-new_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#open-new_svg__a" />
        <g mask="url(#open-new_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgOpenNew;
