import * as React from "react";

function SvgPerson(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        d="M8 8.636A3.818 3.818 0 118 1a3.818 3.818 0 010 7.636zm5.435 2.069A2.864 2.864 0 0115 13.263v.464C15 14.43 14.43 15 13.727 15H2.273C1.57 15 1 14.43 1 13.727v-.477a2.864 2.864 0 011.565-2.545A12.237 12.237 0 018 9.273c1.898.049 3.759.54 5.435 1.432z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPerson;
