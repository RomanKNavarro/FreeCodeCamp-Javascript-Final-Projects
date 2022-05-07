function checkCashRegister(price, cash, cid) {
  let defs =  {"one hundred": 100, "twenty": 20, "ten": 10, "five": 5, "one": 1, "quarter": 0.25, 
  "dime": 0.1, "nickel": 0.05, "penny": 0.01, 'placeholder': 0};  

  let changeDue = cash - price; 
  let totalCid = cid.filter(arr => defs[arr[0].toLowerCase()] <= changeDue);    // GOOD get only values less than/equal to changeDue
  let totalCidSum = totalCid.map(arr => arr = arr[1]).reduce((a, b) => a + b);   // the sum of those values

  let quants = {}   // GOOD
  cid.slice().reverse().map(arr => quants[arr[0]] = Math.round(arr[1] / defs[arr[0].toLowerCase()])); 
  if (changeDue > totalCidSum) return {status: "INSUFFICIENT_FUNDS", change: []};
  else if (changeDue === totalCidSum) return {status: "CLOSED", change: cid};
  // SHIT ABOVE IS ALL GOOD
  else {
    let changeCopy = changeDue;
    //changeCopy = changeCopy.toFixed(2); fail
    let changeArr = [];
    for (let def in defs) {
      //changeCopy = changeCopy.toFixed(2); fail
      if (changeCopy === 0) return {status: 'OPEN', change: changeArr.map(arr => [arr[0].toUpperCase(), arr[1]])};
      if (defs[def] < changeCopy) {
        changeCopy = changeCopy.toFixed(2);
        //console.log(changeCopy);
        let indivTotal = 0;
        for (let i = 1; i <= quants[def.toUpperCase()]; i++) {
          indivTotal = defs[def] * i
          if (indivTotal > changeCopy) {
            changeArr.push([def, parseFloat(((indivTotal - defs[def]).toFixed(2)).toString())]);
            changeCopy -= defs[def] * (i - 1);
            break;
          } 
          else if (i === quants[def.toUpperCase()]) {
            //changeArr.push([def, indivTotal.toFixed(2)]);
            changeArr.push([def, indivTotal]);
            changeCopy -= defs[def] * i;
            break;
          }
          else continue;
        }               
      }
      else continue; // if def not less than changeCopy
    }
  }
}