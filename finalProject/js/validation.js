  // Function to validate the registration form
  function validateForm() {
    var username = document.getElementById("regUsername").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameError = document.getElementById("regUsernameError");
    var emailError = document.getElementById("regEmailError");
    var passwordError = document.getElementById("regPasswordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    // Resetting previous error messages
    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    var isValid = true;

    // Username validation
    if (username === "") {
      isValid = false;
      usernameError.innerHTML = "Username is required";
    }

    // Email validation
    if (email === "") {
      isValid = false;
      emailError.innerHTML = "Email is required";
    } else if (!isValidEmail(email)) {
      isValid = false;
      emailError.innerHTML = "Invalid email address";
    }

    // Password validation
    if (password === "") {
      isValid = false;
      passwordError.innerHTML = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      passwordError.innerHTML = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    if (confirmPassword === "") {
      isValid = false;
      confirmPasswordError.innerHTML = "Please confirm your password";
    } else if (password !== confirmPassword) {
      isValid = false;
      confirmPasswordError.innerHTML = "Passwords do not match";
    }

    if (isValid) {
      // Create user object
      var newUser = {
        username: username,
        email: email,
        password: password
      };

      // Retrieve existing users from local storage or initialize empty array
      var users = JSON.parse(localStorage.getItem("users")) || [];

      // Add new user to the array
      users.push(newUser);

      // Save updated users array to local storage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful!");
    }

    return isValid;
  }

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }