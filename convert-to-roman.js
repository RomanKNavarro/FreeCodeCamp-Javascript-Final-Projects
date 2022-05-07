function convertToRoman(num) {
  let bases = {0: [''], 1: ['i', 'x', 'c', 'm'], 2: ['ii', 'xx', 'cc', 'mm'], 3: ['iii', 'xxx', 'ccc', 'mmm'], 
  4: ['iv', 'xl', 'cd', 'mmmm'], 5: ['v', 'l', 'd'], 6: ['vi', 'lx', 'dc'], 7: ['vii', 'lxx', 'dcc'], 
  8: ['viii', 'lxxx', 'dccc'], 9: ['ix', 'xc', 'cm']}
  let numSplit = num.toString().split('').reverse();  // ['4', '4'] GOOD, ['6', '9'] 
  return numSplit.map((numba, index) => index > 0 && numba === numSplit[index - 1] ? bases[numba][index] : bases[numba][index]).reverse().join('').toUpperCase();
}
convertToRoman(36);