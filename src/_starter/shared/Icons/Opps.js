import * as React from "react";

function SvgOpps(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 8" {...props}>
      <defs>
        <path
          d="M9.937 7.96C9.902 8.807 7.939 9.25 6 9.25c-1.942 0-3.907-.444-3.937-1.293l-.515-3.085A.876.876 0 112.5 4a.87.87 0 01-.043.27l.709.451a1.094 1.094 0 001.434-.23l.696-.85a.866.866 0 01-.171-.516.876.876 0 011.75 0c0 .187-.06.367-.17.515l.695.851c.35.429.967.528 1.434.23l.71-.451a.876.876 0 11.909.602L9.936 7.96zm-.265.213a.362.362 0 00.018-.424C9.416 7.363 8.172 6.75 6 6.75c-2.172 0-3.416.613-3.69.999a.362.362 0 00.018.424c.096.11.245.101.333-.022.145-.205 1.25-.801 3.339-.801 2.09 0 3.194.596 3.339.801.047.065.11.099.175.099a.21.21 0 00.158-.077z"
          id="opps_svg__a"
        />
      </defs>
      <g transform="translate(0 -2)" fill="none" fillRule="evenodd">
        <mask id="opps_svg__b" fill="#fff">
          <use xlinkHref="#opps_svg__a" />
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#opps_svg__a" />
        <g mask="url(#opps_svg__b)" fill="currentColor">
          <path d="M0 0h18v18H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgOpps;
