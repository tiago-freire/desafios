export type Theme = {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      backgroundCardInput: string;
      backgroundLogin: string,
      text: string;
      white: string;
      black: string;
      border: string;
      gray: string;
      line: string;
      button: string;
      cancel: string;
      input: string;
      genre: string;
      borderInput: string;
      backgroundCards: string;
      background: string;
      textPrimary: string;
    };
    sizes: {
      radius: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      alternative: string;
    };
  };
  
  export const darkTheme: Theme = {
    title: 'dark',
    colors: {
      primary: "#009EE3",
      secondary: "#48CB4A",
      backgroundCardInput: "#232225",
      backgroundLogin: "#232225",
      text: "#747474",
      white: "#ffffff",
      black: "#121113",
      border: "#dfdfdf",
      gray: "#303030",
      line: "#B9BCEC",
      button: "#8E4EC6",
      cancel: "#B744F714",
      input: "#1A191B",
      genre: "#C150FF2E",
      borderInput: "#49474E",
      backgroundCards: "#EBEAF814",
      background: "#121113",
      textPrimary: "#ffffff",
    },
    sizes: {
      radius: "10px",
    },
    breakpoints: {
      mobile: "500px",
      tablet: "768px",
      desktop: "1024px",
      alternative: "1105px",
    },
  };
  
  export const lightTheme: Theme = {
    title: 'light',
    colors: {
      primary: "#009EE3",
      secondary: "#48CB4A",
      backgroundCardInput: "#f7f7f7",
      backgroundLogin: "#232225",
      text: "#555555",
      white: "#ffffff",
      black: "#121113",
      border: "#c0c0c0",
      gray: "#e0e0e0",
      line: "#9BA1D9",
      button: "#8E4EC6",
      cancel: "#B744F730",
      input: "#f3f3f3",
      genre: "#C150FF40",
      borderInput: "#b0b0b0",
      backgroundCards: "#f0f0f0",
      background: "#f4f4f4", 
      textPrimary: "#333333",
    },
    sizes: {
      radius: "10px",
    },
    breakpoints: {
        mobile: "500px",
        tablet: "768px",
        desktop: "1024px",
        alternative: "1105px",
      },
  };
  
  export const theme = darkTheme;