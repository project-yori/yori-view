export const convertString = (rawString, param = {}) => {
  let convertedString = rawString;
  Object.entries(param).forEach(([key, value]) => {
    const regexp = new RegExp("\\" + "$" + key);
    convertedString = convertedString.replace(regexp, value);
  });
  return convertedString;
};
