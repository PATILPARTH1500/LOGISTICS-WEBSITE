function validation() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const cpassword = document.getElementById("register-cpassword").value;
    const result = document.getElementById("result");
    const popup = document.getElementById("popup");

    if (username === "") {
        result.textContent = "Enter Username";
        return false;
    } else if (username.length < 6) {
        result.textContent = "At least six characters";
        return false;
    } else if (email === "") {
        result.textContent = "Enter your Email";
        return false;
    } else if (password === "") {
        result.textContent = "Enter your Password";
        return false;
    } else if (cpassword === "") {
        result.textContent = "Confirm your password";
        return false;
    } else if (password.length < 6) {
        result.textContent = "Password must be at least six characters";
        return false;
    } else if (password !== cpassword) {
        result.textContent = "Passwords do not match";
        return false;
    }

    // If all validations pass
    popup.classList.add("open-slide");
    return false; // Prevent actual form submission for demo purposes
}
