import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./NotFound.style";
import { Colors } from "../../theme/colors";

export const NotFound: React.FC = () => (
  <Styled.ErrorPageContainer>
    <FontAwesomeIcon icon={faCoffee} color={Colors.Grey} size="xl" />
    <Styled.ErrorMessage>
      Oops, an unexpected error occured.
    </Styled.ErrorMessage>
  </Styled.ErrorPageContainer>
);
