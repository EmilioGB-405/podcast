"use strict"


document.getElementById("buttonForm").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name.length < 2 || name.length > 50) {
        return alert("Please enter a valid name (2-50 characters).");
    }

    
    if (!validateEmail(email)) {
        return alert("Please enter a valid email address.");
    }

    
    if (!validatePhone(phone)) {
        return alert("Please enter a valid phone number (digits only, 7–15 characters).");
    }


    if (message.length < 10) {
        return alert("Message should be at least 10 characters long.");
    }


    alert("Form submitted successfully!");

});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function validatePhone(phone) {
    const re = /^\d{7,15}$/;
    return re.test(phone);
}
