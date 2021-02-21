const theme = {
  border: "1px solid #e9ecf3",
  borderColor: "#D8DCE7",
  padding: (multiplier = 1) => 8 * multiplier,
  surface: {
    borderColor: "#e9ecf3",
    border: "1px solid #e9ecf3",
    backgroundColor: "white",
  },
  clickable: `
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
    &:active {
      background-color: #dddddd;
    }
  `,
};

export default theme;
