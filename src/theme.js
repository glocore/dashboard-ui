const getBreakpointString = (upOrDown) => (name) => {
  const limiter = upOrDown === "up" ? "min-width" : "max-width";
  const width = {
    sm: 600,
    md: 960,
    lg: 1280,
  }[name];

  return `@media (${limiter}:${width}px)`;
};

const theme = {
  palette: {
    primary: {
      main: "#1565d8",
      light: "#E7EFFA",
    },
  },
  border: "1px solid #e9ecf3",
  borderColor: "#D8DCE7",
  padding: (multiplier = 1) => 8 * multiplier,
  fontColor: {
    dark: "rgba(0, 0, 0, 0.87)",
    light: "#999999",
  },
  breakpoints: {
    up: getBreakpointString("up"),
    down: getBreakpointString("down"),
  },
  surface: {
    borderColor: "#e9ecf3",
    border: "1px solid #e9ecf3",
    backgroundColor: "white",
  },
  clickable: `
    cursor: pointer;
    transition: background-color 0.1s;
    &:hover {
      background-color: #eeeeee;
    }
    &:active {
      background-color: #dddddd;
    }
  `,

  elevation: (amount = 1) => {
    let boxShadow = `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`;

    switch (amount) {
      case 1:
        break;
      case 2:
        boxShadow = `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`;
        break;

      default:
        break;
    }

    const border = `1px solid #eeeeee`;

    return `
      box-shadow: ${boxShadow};
      border: ${border};
    `;
  },
  ui: {
    navPaneWidth: "240px",
    headerHeight: "70px",
  },
};

export default theme;
