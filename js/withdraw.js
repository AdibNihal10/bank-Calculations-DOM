document.getElementById("withdrawbtn").addEventListener("click", function () {
  const Withdrawtamount = document.getElementById("Withdraw-user");
  const wv = Withdrawtamount.value;
  const Balance = document.getElementById("balance-total");
  const balancevalue = Balance.innerText;

  if (typeof parseFloat(wv) === "number" && !isNaN(parseFloat(wv))) {
    const indollar4 = parseFloat(wv);
    const indollar3 = parseFloat(balancevalue);
    if (indollar3 >= indollar4 && indollar4 > 0) {
      const Withdrawtotal = document.getElementById("withdraw-total");
      const wt = Withdrawtotal.innerText;

      const indollar5 = parseFloat(wt);

      const totalwithdrawamount = indollar4 + indollar5;
      Withdrawtotal.innerText = totalwithdrawamount;

      //Balance

      const withdrawalBalance = indollar3 - indollar4;
      Balance.innerText = withdrawalBalance;

      Withdrawtamount.value = " ";
    } else if (indollar4 < 0) {
      alert("Enter a number greater than 0");
      Withdrawtamount.value = "";
    } else {
      alert("Insufficient balance for withdrawal");
      Withdrawtamount.value = "";
    }
  } else {
    alert("Enter a number");
    Withdrawtamount.value = "";
  }
});
