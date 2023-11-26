import styled from "@emotion/styled";

export const CustomButton = styled.button`
  border: 1px solid darkgrey;
  border-radius: 5px;
  background-color: transparent;
  padding: 13px;
  color: grey;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    color: black;
    border-color: black;
  }
`;
