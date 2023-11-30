import styled from "@emotion/styled";

export const InputField = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  color: inherit;
  font-size: 16px;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  min-width: 200px;
  line-height: 3;
  flex-wrap: wrap;
`;

export const IconTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Vocabulary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 3px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
