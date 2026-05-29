document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Full Name is required";
        valid = false;
    }

    if(!/^[0-9]{10}$/.test(phone)){
        document.getElementById("phoneError").innerHTML = "Enter valid 10 digit number";
        valid = false;
    }

    if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerHTML = "Message is required";
        valid = false;
    }

    if(valid){
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }

});
