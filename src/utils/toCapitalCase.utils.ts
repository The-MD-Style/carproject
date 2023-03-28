export const toCapitalCaseS = (words: string | string[]) => {
  if (Array.isArray(words)) {
    return words.map((word: string) => word.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()));
  } else {
    return words.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  }
};
