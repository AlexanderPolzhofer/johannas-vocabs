import React from "react";
import { vocabulary } from "../../data/vocabulary";
import { Vocab } from "../../components/vocab/Vocab";
import { Button } from "../../components/button/Button";
import * as Styled from "./Root.style";

export const Root: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Styled.Container>
        <Styled.Heading>Johannas Vokabeln</Styled.Heading>
        {vocabulary.map((vocab) => (
          <Vocab
            key={vocab.id}
            vocabData={vocab}
            count={count}
            setCount={setCount}
          />
        ))}
        <Styled.ButtonResultContainer>
          {false && <Button label="Überprüfen" />}
          <Styled.Result>
            {count} / {vocabulary.length}
          </Styled.Result>
        </Styled.ButtonResultContainer>
      </Styled.Container>
    </>
  );
};
