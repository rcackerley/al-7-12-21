import * as React from "react";

function SvgBolt(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M11.914 5.422a.293.293 0 01.055.344L7.75 14.805a.344.344 0 01-.328.195.658.658 0 01-.11-.016.333.333 0 01-.199-.148.296.296 0 01-.035-.234l1.54-6.313-3.173.79a.416.416 0 01-.093.007A.363.363 0 015.109 9a.292.292 0 01-.101-.305l1.57-6.445A.355.355 0 016.922 2h2.562c.1 0 .183.033.25.098a.31.31 0 01.102.23.32.32 0 01-.04.14L8.462 6.087l3.094-.766a.427.427 0 01.093-.015c.1 0 .188.039.266.117z"
          id="bolt_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bolt_svg__b" fill="#fff">
          <use xlinkHref="#bolt_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#bolt_svg__a" />
        <g mask="url(#bolt_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgBolt;
