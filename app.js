// Targetting DOM
let mobileMenuToggler = document.getElementById("mobile-menu-toggler");
let mobileMenu = document.getElementById("mobile-menu");
let contactForm = document.querySelector("#contact-form");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let emailAddress = document.querySelector("#email-address");
let message = document.querySelector("#message");
let submitBtn = document.querySelector("#submit-btn");
let contactFormError = document.querySelector("#contact-form-error");
let contactFormSuccess = document.querySelector("#contact-form-success");
let orderForm = document.querySelector("#order-form")
let customerName = document.querySelector("#customer-name");
let customerEmail = document.querySelector("#customer-email");
let customerAddress = document.querySelector("#customer-address");
let customerComingTime = document.querySelector("#customer-coming-time");
let customerOrder = document.querySelector("#order");
let orderFormError = document.querySelector("#order-form-error");
let orderFormSuccess = document.querySelector("#order-form-success");


// Mobile Menu Opening and Closing
mobileMenuToggler.addEventListener("click", () => {
    mobileMenu.classList.toggle("open-mobile-menu");
    if (mobileMenu.classList.contains("open-mobile-menu")) {
        mobileMenuToggler.children[0].classList.remove("fa-bars");
        mobileMenuToggler.children[0].classList.add("fa-xmark");
    } else {
        mobileMenuToggler.children[0].classList.add("fa-bars");
        mobileMenuToggler.children[0].classList.remove("fa-xmark");
    }
});

// Order Form Working
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((customerName.value != "") && (customerEmail.value != "") && (customerAddress.value != "") && (customerComingTime.value != "") && (customerOrder != "")) {
        orderFormError.style.display = "none";
        sendOrderFormDataOnMail();
    } else {
        orderFormSuccess.style.display = "none";
        orderFormError.innerText = "Please Fill The Form Correctly.";
        orderFormError.style.display = "block";
    }
});

// Sending Order Form Data On Email
function sendOrderFormDataOnMail() {
    var templateParams = {
        name: customerName.value,
        email: customerEmail.value,
        address: customerAddress.value,
        comingTime: customerComingTime.value,
        order: customerOrder.value,
    };

    emailjs.send("", "", templateParams)
        .then((res) => {
            orderFormSuccess.style.display = "block";
        })
        .catch((error) => {
            orderFormSuccess.style.display = "none";
            orderFormError.innerText = "Sorry, We're not able to recieve your order right now";
            orderFormError.style.display = "block";
        })
}

// Contact form Working
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((firstName.value != "") && (lastName.value != "") && (emailAddress.value != "") && (message.value != "")) {
        contactFormError.style.display = "none";
        sendContactFormDataOnMail();
    } else {
        contactFormSuccess.style.display = "none";
        contactFormError.innerText = "Please Fill The Form Correctly.";
        contactFormError.style.display = "block";
    }
});

// Sending Contact Form Data On Email
function sendContactFormDataOnMail() {
    var templateParams = {
        name: `${firstName.value} ${lastName.value}`,
        email: emailAddress.value,
        message: message.value,
    };

    emailjs.send("", "", templateParams)
        .then((res) => {
            contactFormSuccess.style.display = "block";
        })
        .catch((error) => {
            contactFormSuccess.style.display = "none";
            contactFormError.innerText = "Sorry, We're not able to recieve your message right now";
            contactFormError.style.display = "block";
        })
}