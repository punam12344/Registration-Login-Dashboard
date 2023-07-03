function SaveInfo() {
  let obj = {
    title: document.getElementById("title").value,
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirm").value,
    acceptTerms: document.getElementById("check").checked,
  };

  fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register", {
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (value) {
      return value.json();
    })
    .then(function (value) {
      window.location.href = "Login.html";
      console.log(value);
    });
}
