import styled from "styled-components";

const theme = {
  light: {
    default: "#010203",
    hover: "#283593"
  },
  dark: {
    default: "#ffffff",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
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
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "light",
};
export default function Buttons() {
  return (
    <Button>Secondary</Button>
  )
};
