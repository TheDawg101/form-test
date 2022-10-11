let confirmPwd = document.getElementById("confirm-password");
let pwd = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function passwordValidation () {
    if (confirmPwd.value === "") {
        submitBtn.disabled = false;
    } else if (confirmPwd.value != pwd.value) {
        submitBtn.disabled = true;
        confirmPwd.classList.remove("valid");
        confirmPwd.classList.add("invalid");
    } else {
        submitBtn.disabled = false;
        confirmPwd.classList.remove("invalid");
        confirmPwd.classList.add("valid");
    }
}

pwd.addEventListener("keyup", passwordValidation);
confirmPwd.addEventListener("keyup", passwordValidation);