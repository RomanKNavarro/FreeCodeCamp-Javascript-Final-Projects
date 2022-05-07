function rot13(str) {
  const alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split('').map(letter => letter = letter.toUpperCase());
  let assignments = {};
  for (let i = 0; i < alphabet.length; i++) {
    if (i < alphabet.length / 2) {
      assignments[alphabet[i]] = alphabet[i + 13];
    } else assignments[alphabet[i]] = alphabet[i - 13];
  }
  return str.split('').map(letta => alphabet.includes(letta) ? letta = assignments[letta]: letta).join('');
}
rot13("SERR PBQR PNZC");