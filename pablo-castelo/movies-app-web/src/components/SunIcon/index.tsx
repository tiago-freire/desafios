import { Icon, IconProps } from "@chakra-ui/react";

const SunIcon: React.FC<IconProps> = ({
	width = "24",
	height = "24",
	color = "#FFF"
}) => {
	return (
		<>
			<Icon>
				<svg
					width={width.toString()}
					height={height.toString()}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="12" cy="12" r="4" fill={color.toString()} />
					<path
						d="M12 5V3"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M12 21V19"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M16.95 7.04996L18.3643 5.63574"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M5.63608 18.3644L7.05029 16.9502"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M19 12L21 12"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M3 12L5 12"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M16.95 16.95L18.3643 18.3643"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M5.63608 5.63559L7.05029 7.0498"
						stroke={color.toString()}
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</Icon>
		</>
	);
};

export default SunIcon;
