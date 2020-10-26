import * as React from "react";

function SvgRocket(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M5.609 6.179A22.088 22.088 0 017.59 3.865c2.636-2.636 6.136-3.41 7.045-2.5.91.909.136 4.41-2.5 7.045-.64.64-1.464 1.347-2.313 1.982A3.858 3.858 0 019.181 15L1 6.819a3.858 3.858 0 014.609-.64zm-3.788 8c-.236-.235.46-2.455.909-2.903.037-.038.116-.07.235-.081.395-.037.946.176 1.305.535.503.504.668 1.327.454 1.54-.448.448-2.668 1.145-2.903.91zm7.815-7.815a1.286 1.286 0 101.818-1.818 1.286 1.286 0 00-1.818 1.818z"
          id="rocket_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="rocket_svg__b" fill="#fff">
          <use xlinkHref="#rocket_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#rocket_svg__a"
        />
        <g mask="url(#rocket_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgRocket;
