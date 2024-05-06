function checkCashRegister(price, cash, cid) {
  let currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  let newCid = JSON.parse(JSON.stringify(cid));
  let i = cid.length - 1;
  let changeValue = cash - price;
  let currency, amount, unit, num;

  let changeObj = {status: "", change: []};

  while (i >= 0) {
    [currency, amount] = cid[i];
    unit = currencyUnits[currency];
    num = Math.round(amount / unit);
    if (amount > 0 && changeValue >= unit) {
        if (changeValue >= amount) {
            newCid[i][1] = 0;
            changeValue = changeValue - amount;
            changeObj.change.push([currency, amount]);
        } else {
            let val = unit * Math.floor(changeValue / unit);
            newCid[i][1] -= val;
            changeValue -= val;
            changeObj.change.push([currency, val]);
        }
    }
    changeValue = Math.round(changeValue * 100) / 100;
    i--;
  }

  let cidRemain = (newCid.reduce((prev, cur) => prev + cur[1], 0) * 100) / 100;

  if (changeObj.change.length === 0 || changeValue !== 0) {
    changeObj = {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cidRemain === 0) {
    changeObj = {status: "CLOSED", change: cid};
  } else {
    changeObj.status = "OPEN";
  }

  console.log(changeObj);
  return changeObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

