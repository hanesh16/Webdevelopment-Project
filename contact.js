const form = document.getElementsByClassName("registration");
form[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("Username").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("textbox").value;
  if (name.length == 0 && email.length == 0) {
    console.alert("You must enter name and email to submit this form");
  } else {
    console.log(`Username: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${text}`);
  }

  const input1 = document.querySelectorAll("input");
  for (let i = 0; i < 2; ++i) {
    input1[i].value = null;
  }
});
