"use strict"

document.getElementById("buttonSubscribe").addEventListener('click',()=>{
    const EMAIL = document.getElementById("email-podcast").value.trim();
    if(!validateEmail(EMAIL)){
         return alert("Please enter a valid email address.");
    }
        alert("Thank for subscribe!")
})

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}