let confirmPwd = document.getElementById("confirm-password");
let pwd = document.getElementById("password").textContent;
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", e => {
    if (pwd === confirmPwd.textContent && confirmPwd.classList.contains("invalid")) {
        confirmPwd.classList.remove("invalid");
        confirmPwd.classList.remove("valid");
    } else if (pwd != confirmPwd && confirmPwd.classList.contains("invalid")) {
        //nothing
    } else if (pwd != confirmPwd) {
        confirmPwd.classList.add("invalid");
        confirmPwd.classList.remove("valid");
    } else if (pwd === confirmPwd) {
        confirmPwd.classList.add("valid");
    }
})
