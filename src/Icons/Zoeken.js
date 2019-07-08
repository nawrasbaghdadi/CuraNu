import React from "react";

const SvgZoeken = props => (
  <svg width={26} height={26} {...props}>
    <g
      transform="translate(1 1)"
      stroke="#949FB3"
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
    >
      <circle cx={9} cy={9} r={9} />
      <path d="M15 15l9 9" />
    </g>
  </svg>
);

export default SvgZoeken;
