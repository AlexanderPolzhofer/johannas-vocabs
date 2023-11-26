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

  console.log(de.trim().toLowerCase().split(","));
  console.log("2", de.trim().toLowerCase().replace(/\s/g, "").split(","));

  return (
    <Styled.Vocabulary key={id}>
      <Styled.Text>{en}</Styled.Text>
      <div>
        {onValidate &&
          (currentVocab.trim().toLowerCase().replace(/\s/g, "") ===
            de.trim().toLowerCase().replace(/\s/g, "") ||
          de
            .trim()
            .toLowerCase()
            .replace(/\s/g, "")
            .split(",")
            .includes(currentVocab.trim().toLowerCase().replace(/\s/g, "")) ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="sm"
              color="lightgreen"
            />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} size="sm" color="tomato" />
          ))}
      </div>

      <Styled.InputField
        type="text"
        value={currentVocab}
        onChange={(e) => setCurrentVocab(e.target.value)}
      />
    </Styled.Vocabulary>
  );
};
