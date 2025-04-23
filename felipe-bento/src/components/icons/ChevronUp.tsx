const SvgChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 16}
    height={props.width || 16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "currentColor"}
      strokeWidth={2}
      d="m18 15-6-6-6 6"
    />
  </svg>
);

export default SvgChevronUp;
