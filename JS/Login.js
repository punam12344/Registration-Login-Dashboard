function login() {
  let obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", {
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (value) {
      return value.json();
    })
    .then(function (v) {
      if (v.message != undefined) {
        alert("error");
      } else {
        localStorage.setItem("user", JSON.stringify(v));

        window.location.href = "Dashboard.html";
      }
      console.log(v);
    });
}
