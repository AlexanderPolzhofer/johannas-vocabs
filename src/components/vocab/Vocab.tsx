import React from "react";
import { VocabDTO } from "../types/sharedTypes";
import * as Styled from "./Vocab.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

interface VocabProps {
  vocabData: VocabDTO;
  onValidate: boolean;
}

export const Vocab: React.FC<VocabProps> = ({ vocabData, onValidate }) => {
  const [currentVocab, setCurrentVocab] = React.useState("");

  const { id, en, de } = vocabData;

  return (
    <Styled.Vocabulary key={id}>
      <Styled.IconTextContainer>
        <Styled.Text>{en}</Styled.Text>
        <Styled.IconWrapper>
          {onValidate &&
            (currentVocab.trim().toLowerCase().replace(/\s/g, "") ===
              de.trim().toLowerCase().replace(/\s/g, "") ||
            de
              .trim()
              .toLowerCase()
              .replace(/\s/g, "")
              .split(",")
              .includes(currentVocab.trim().toLowerCase().replace(/\s/g, "")) ||
            de
              .trim()
              .toLowerCase()
              .replace(/\s/g, "")
              .split(",")
              .reverse()
              .includes(
                currentVocab
                  .trim()
                  .toLowerCase()
                  .replace(/\s/g, "")
                  .split(",")[0] &&
                  currentVocab
                    .trim()
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .split(",")[1]
              ) ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="sm"
                color="lightgreen"
              />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} size="sm" color="tomato" />
            ))}
        </Styled.IconWrapper>
      </Styled.IconTextContainer>

      <Styled.InputField
        type="text"
        value={currentVocab}
        onChange={(e) => setCurrentVocab(e.target.value)}
      />
    </Styled.Vocabulary>
  );
};
