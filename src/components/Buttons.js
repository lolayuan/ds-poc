import styled from "styled-components";
import theme from "../tokens/colors.json";

// const theme = {
//   light: {
//     default: "#010203",
//     hover: "#283593"
//   },
//   dark: {
//     default: "#ffffff",
//     hover: "#ad1457"
//   }
// };
// background-color: ${(props) => theme.color[props.theme].primary.white.value};


const Button = styled.button`
  background-color: ${theme.color.dark.primary.black.value};
  height: 46px;
    padding: 11px 18px 11px 22px;
    border-radius: 23px;
    color: white;
    font-size: 16px;
    font-weight: bold;
  border: 0;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.dark.primary.blue.value};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "dark",
};
export default function Buttons() {
  return (
    <Button>Secondary</Button>
  )
};
