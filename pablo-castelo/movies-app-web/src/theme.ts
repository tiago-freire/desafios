import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
	config: {
		initialColorMode: "dark"
	},
	fonts: {
		base: "var(--font-montserrat), sans-serif",
		body: "var(--font-montserrat), sans-serif",
		heading: "var(--font-montserrat), sans-serif",
		mono: "var(--font-montserrat), sans-serif"
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem"
	},
	colors: {
		primary: "##8E4EC6"
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em"
	},
	breakpoints: {
		base: "0rem",
		sm: "25.875rem",
		md: "48rem",
		lg: "64rem",
		xl: "85.375rem",
		xxl: "90rem"
	},
	borderRadius: {
		radii: {
			none: "0",
			sm: "0.125rem",
			base: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "9999px"
		}
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none !important"
				}
			}
		}
	},
	styles: {
		global: (props: any) => ({
			"html, body, p, a": {
				color: mode("#000", "#B5B2BC")(props),
				backgroundColor: mode("#FFF", "#121113")(props)
			}
		})
	}
});
