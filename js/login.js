document.getElementById("btn-primary").addEventListener("click", function () {
  const mail = document.getElementById("emailhandle");
  const mailv = mail.value;

  const pass = document.getElementById("passwordhandle");
  const passv = pass.value;
  //Danger: VV bad practice
  if (mailv === "messi@gmail.com" && passv === "123") {
    window.location.href = "bank.html";
  } else {
    alert("Shala Shor");
  }
});
