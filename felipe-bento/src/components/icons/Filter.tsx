const SvgFilter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path d="M5 12V4M19 20v-2M5 20v-4M19 12V4M12 7V4M12 20v-8" />
      <circle cx={5} cy={14} r={2} />
      <circle cx={12} cy={9} r={2} />
      <circle cx={19} cy={15} r={2} />
    </g>
  </svg>
);

export default SvgFilter;
