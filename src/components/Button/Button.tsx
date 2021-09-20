import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

interface IButton {
  text?: string;
  bgColor?: string;
}

const StyledButton = styled(Button)<IButton>`
  &.MuiButton-contained {
    background-color: ${({ bgColor }) => bgColor || "orange"};
    color: white;
  }
`;

const MyButton: React.FC<IButton> = (props) => {
  const { text, bgColor } = props;
  return (
    <StyledButton variant="contained" bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export { MyButton };
