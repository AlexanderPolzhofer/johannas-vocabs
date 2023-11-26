import React from "react";
import * as Styled from "./Button.style";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => (
  <Styled.CustomButton disabled={disabled} onClick={onClick}>
    {label}
  </Styled.CustomButton>
);
