// Function to validate the login form
function validateLoginForm() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  var emailError = document.getElementById("loginEmailError");
  var passwordError = document.getElementById("loginPasswordError");

  // Resetting previous error messages
  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  var isValid = true;

  // Email validation
  if (email === "") {
    isValid = false;
    emailError.innerHTML = "Email is required";
  }

  // Password validation
  if (password === "") {
    isValid = false;
    passwordError.innerHTML = "Password is required";
  }

  // If form is valid, attempt login
  if (isValid) {
    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email
    var foundUser = users.find(function(user) {
      return user.email === email;
    });

    // Check if user exists and password matches
    if (foundUser && foundUser.password === password) {
      // Generate and store authentication token
      var token = generateToken();
      foundUser.token = token;

      // Update user information in local storage
      localStorage.setItem("users", JSON.stringify(users));

      // Login successful
      alert("Login successful! Token: " + token);
      // Redirect or perform further actions as needed
    } else {
      // Invalid email or password
      isValid = false;
      emailError.innerHTML = "Invalid email or password";
    }
  }

  return isValid;
}

// Function to generate a random token
function generateToken() {
  var token = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}
