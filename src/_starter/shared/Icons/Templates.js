import * as React from "react";

function SvgTemplates(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          id="templates_svg__a"
          d="M2 2.556V2a1 1 0 011-1h7.1a1 1 0 01.698.283l2.906 2.828a1 1 0 01.303.717V14a1 1 0 01-1 1h-.556L2 2.556zM8.5 14h1a.5.5 0 110 1h-1a.5.5 0 110-1zm-6-10a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v1a.5.5 0 11-1 0v-1a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v.5h.5a.5.5 0 110 1H3a1 1 0 01-1-1v-.5a.5.5 0 01.5-.5zm3 1h1a.5.5 0 110 1h-1a.5.5 0 110-1zm4.618-12.028v2.061a.88.88 0 00.855.856h2.061l-2.916-2.917z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="templates_svg__b" fill="#fff">
          <use xlinkHref="#templates_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#templates_svg__a"
        />
        <g fill="currentColor" fillRule="nonzero" mask="url(#templates_svg__b)">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgTemplates;
