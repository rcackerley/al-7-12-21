import * as React from "react";

function SvgEnvelope(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M14.83 4.75A.29.29 0 0115 5v7.5a1 1 0 01-1 1H2.001a1 1 0 01-1-1V5c-.011-.118.05-.195.155-.25.105-.055.233-.076.324 0 1.744 1.499 4.77 4.078 5.71 4.93.453.44 1.174.44 1.627 0 .858-.77 3.576-3.082 5.705-4.89a.291.291 0 01.309-.04zM7.576 8.735c-.992-.892-4.363-3.756-6.282-5.383a.292.292 0 01-.04-.403c.22-.282.557-.448.915-.449h11.665c.356.003.691.168.91.45a.292.292 0 01-.04.402c-1.92 1.627-5.29 4.49-6.282 5.383a.583.583 0 01-.846 0z"
          id="envelope_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="envelope_svg__b" fill="#fff">
          <use xlinkHref="#envelope_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#envelope_svg__a"
        />
        <g mask="url(#envelope_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgEnvelope;
