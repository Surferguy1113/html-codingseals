document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple login logic (Replace with real authentication)
    if (username === "admin" && password === "password123") {
        message.textContent = "Login successful!";
        message.style.color = "green";
        // Redirect or perform other actions
    } else {
        message.textContent = "Invalid credentials!";
        message.style.color = "red";
    }
});
