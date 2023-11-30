import React from "react";
import { vocabulary } from "../../data/vocabulary";
import { Vocab } from "../../components/vocab/Vocab";
import { Button } from "../../components/button/Button";
import * as Styled from "./Root.style";

export const Root: React.FC = () => {
  const [onValidate, setOnValidate] = React.useState(false);

  return (
    <>
      <Styled.Container>
        <Styled.Heading>Johannas Vokabeln</Styled.Heading>
        {vocabulary.map((vocab) => (
          <Vocab key={vocab.id} vocabData={vocab} onValidate={onValidate} />
        ))}
        <Styled.ButtonContainer>
          <Button label="Überprüfen" onClick={() => setOnValidate(true)} />
        </Styled.ButtonContainer>
      </Styled.Container>
    </>
  );
};
