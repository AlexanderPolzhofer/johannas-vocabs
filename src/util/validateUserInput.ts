export const validateUserInput = (
  inputValue: string,
  valueToCompareWith: string
): boolean => {
  if (
    inputValue.trim().toLowerCase().replace(/\s/g, "") ===
      valueToCompareWith.trim().toLowerCase().replace(/\s/g, "") ||
    valueToCompareWith
      .trim()
      .toLowerCase()
      .replace(/\s/g, "")
      .split(",")
      .includes(inputValue.trim().toLowerCase().replace(/\s/g, "")) ||
    valueToCompareWith
      .trim()
      .toLowerCase()
      .replace(/\s/g, "")
      .split(",")
      .reverse()
      .includes(
        inputValue.trim().toLowerCase().replace(/\s/g, "").split(",")[0] &&
          inputValue.trim().toLowerCase().replace(/\s/g, "").split(",")[1]
      )
  ) {
    return true;
  }
  return false;
};
