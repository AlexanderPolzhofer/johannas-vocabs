import React from "react";
import { VocabDTO } from "../types/sharedTypes";
import * as Styled from "./Vocab.style";
import { validateUserInput } from "../../util/validateUserInput";

interface VocabProps {
  vocabData: VocabDTO;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

export const Vocab: React.FC<VocabProps> = ({ vocabData, count, setCount }) => {
  const [currentVocab, setCurrentVocab] = React.useState("");

  const [isFieldValidated, setIsFieldValidated] = React.useState(false);

  const { id, en, de } = vocabData;

  React.useEffect(() => {
    const isCorrect = validateUserInput(currentVocab, de);
    isCorrect && setIsFieldValidated(true);
    isCorrect && !isFieldValidated && setCount(count + 1);
    !isCorrect && isFieldValidated && setCount(count > 0 ? count - 1 : 0);
  }, [currentVocab]);

  return (
    <Styled.Vocabulary key={id}>
      <Styled.IconTextContainer>
        <Styled.Text>{en}</Styled.Text>
      </Styled.IconTextContainer>
      <Styled.InputField
        type="text"
        value={currentVocab}
        onChange={(e) => setCurrentVocab(e.target.value)}
      />
    </Styled.Vocabulary>
  );
};
