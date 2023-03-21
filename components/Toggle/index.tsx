import React from "react";
import styled from "styled-components";

type toggleProps = {
  text: string;
  onClick: () => void;
  active: boolean;
};

const Toggle = ({ text, active, onClick }: toggleProps) => {
  return (
    <StyledToggleItem active={active} onClick={onClick}>
      {text}
    </StyledToggleItem>
  );
};

export default Toggle;

const StyledToggleItem = styled("div")<{ active: boolean }>`
  border: 1px solid #cccccc;
  border-radius: 10px;
  background: ${({ active }) =>
    active ? "linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)" : "#000"};
  padding: 10px 20px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px,
    rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px,
    rgba(240, 46, 170, 0.05) 0px 25px;
`;
