const SvgChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M9 6L15 12L9 18"
      stroke={props.color || "currentColor"}
      strokeWidth={2}
    />
  </svg>
);

export default SvgChevronRight;
