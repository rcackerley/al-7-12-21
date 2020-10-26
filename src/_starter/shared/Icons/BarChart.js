import * as React from "react";

function SvgBarChart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M9.447 1c.16 0 .291.13.291.292v13.416c0 .161-.13.292-.291.292H6.53a.292.292 0 01-.292-.292V1.292c0-.161.131-.292.292-.292h2.917zM4.208 7.417c.162 0 .292.13.292.291v7c0 .161-.13.292-.292.292H1.292A.292.292 0 011 14.708v-7c0-.16.13-.291.292-.291h2.916zm10.489-3.5c.16 0 .291.13.291.291v10.5c0 .161-.13.292-.291.292H11.78a.292.292 0 01-.292-.292v-10.5c0-.16.131-.291.292-.291h2.917z"
          id="bar-chart_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bar-chart_svg__b" fill="#fff">
          <use xlinkHref="#bar-chart_svg__a" />
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#bar-chart_svg__a"
        />
        <g mask="url(#bar-chart_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgBarChart;
