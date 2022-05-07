function telephoneCheck(num) {
  let numRegex = /(1\s?)?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}/; 
  // (\d{3}|\(\d{3}\))
  // optional 1 WITH space, area code with optional parentheses, optional space OR optional -, first 3 digits, another optional - or space, last four digits
  // MAKE IT SO THAT ANY COUNTRY NUMBER OTHER THAN 1 RETURNS FALSE
  if (!numRegex.test(num)) return false
  return num === num.match(numRegex)[0]; 
}
telephoneCheck("555-555-5555");