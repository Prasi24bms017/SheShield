document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});