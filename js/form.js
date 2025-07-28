"use strict"


document.addEventListener("DOMContentLoaded", () => {
    const formBtn = document.getElementById("buttonForm");

    formBtn.addEventListener("click", () => {
        clearErrors();

        const name = sanitize(document.getElementById("name").value);
        const email = sanitize(document.getElementById("email").value);
        const phone = sanitize(document.getElementById("phone").value);
        const message = sanitize(document.getElementById("message").value);

        let isValid = true;

        if (!isValidName(name)) {
            showError("error-name", "Please enter a valid name.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            showError("error-email", "Please enter a valid email.");
            isValid = false;
        }

        if (!isValidPhone(phone)) {
            showError("error-phone", "Phone must be 7–15 digits.");
            isValid = false;
        }

        if (message.length < 10) {
            showError("error-message", "Message must be at least 10 characters.");
            isValid = false;
        }

        if (isValid) {
            
            alert("Form submitted successfully!");

            
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
        }
    });

    

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(err => err.textContent = "");
    }

    function sanitize(text) {
        return text.trim().replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ");
    }

    function isValidName(name) {
        return /^[a-zA-Z\s]{2,50}$/.test(name);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{7,15}$/.test(phone);
    }
});
