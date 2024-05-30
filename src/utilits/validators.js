export const required = (values) => {
    if (values) {
    return undefined;
  }
  return "!add the field";
};
export const maxLengthCreator = (maxLength) => (values) => {
    
    if (values.length > maxLength) {
      return `maxLenght ${maxLength} simbols`;
    }
    return undefined;
  };
  
