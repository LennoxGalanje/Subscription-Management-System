// script.js

// Function to show the login form and hide the registration form
function showLoginForm() {
  document.getElementById("loginFormContainer").classList.add("active");
  document.getElementById("registerFormContainer").classList.remove("active");
  // Clear messages when switching forms
  document.getElementById("loginMessage").textContent = "";
  document.getElementById("registerMessage").textContent = "";
}

// Function to show the registration form and hide the login form
function showRegisterForm() {
  document.getElementById("loginFormContainer").classList.remove("active");
  document.getElementById("registerFormContainer").classList.add("active");
  // Clear messages when switching forms
  document.getElementById("loginMessage").textContent = "";
  document.getElementById("registerMessage").textContent = "";
}

// Handle Login Form Submission
function handleLogin() {
  const identifier = document.getElementById("loginIdentifier").value;
  const password = document.getElementById("loginPassword").value;
  const messageDiv = document.getElementById("loginMessage");

  if (identifier && password) {
    messageDiv.textContent = "Login successful! Redirecting to dashboard...";
    messageDiv.className = "text-center text-sm font-medium text-blue-700"; // Success message color

    // Redirect to the dashboard page after a short delay
    // In a real application, replace '/dashboard' with the actual path to your dashboard
    setTimeout(() => {
      window.location.href = "/html/index.html";
    }, 1000); // Redirect after 1 second
  } else {
    messageDiv.textContent = "Please enter your username/email and password.";
    messageDiv.className = "text-center text-sm font-medium text-red-600"; // Error message color
  }
}

// Handle Registration Form Submission
function handleRegistration() {
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const messageDiv = document.getElementById("registerMessage");

  if (username && email && password) {
    messageDiv.textContent = "Registration successful! You can now log in.";
    messageDiv.className = "text-center text-sm font-medium text-blue-700"; // Success message color
    // Automatically switch to login form after a brief delay
    setTimeout(() => {
      showLoginForm();
      messageDiv.textContent = ""; // Clear registration message after switching
    }, 2000);
  } else {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.className = "text-center text-sm font-medium text-red-600"; // Error message color
  }
}
