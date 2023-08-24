document.getElementById("depositbtn").addEventListener("click", function () {
  const depositamount = document.getElementById("Deposit-user");
  const amount = depositamount.value;

  //deposit
  if (typeof parseFloat(amount) === "number" && !isNaN(parseFloat(amount))) {
    const indollar1 = parseFloat(amount);
    const depositvalue = document.getElementById("deposit-total");
    const deposittotal = depositvalue.innerText;
    const indollar2 = parseFloat(deposittotal);
    const currentamount = indollar1 + indollar2;
    depositvalue.innerText = currentamount;
    console.log(amount);

    //Balance
    const Balance = document.getElementById("balance-total");
    const balancevalue = Balance.innerText;

    const indollar3 = parseFloat(balancevalue);

    const totalBalance = indollar1 + indollar3;
    Balance.innerText = totalBalance;

    // set it to empty string after clicking
    depositamount.value = "";
  } else {
    alert("Enter a number");
    depositamount.value = "";
  }
});
