function validateForm() {
    var email = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var emailtest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    if (!email.match(emailtest)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (password == "") {
      alert("Password field must be filled out");
      return false;
    }
    return true;
  }