// assets/js/patient-login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('errorMsg');

    if (username === "patient" && password === "password123") {
        alert("Login Successful");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid username or password";
    }
});
