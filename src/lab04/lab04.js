

const signUpBtnElement = document.getElementById("signUpBtn");
const userNameElement = document.getElementById("userName");
const passwordElement = document.getElementById("password");



const myUserName = "trungcao@gmail.com";
const myPassword ="12345";

signUpBtnElement.addEventListener("click", ()=> {
    if(userNameElement.value === myUserName && passwordElement.value === myPassword){
        alert("Ban da dang nhap thang cong");
        window.location.href = "success.html"
    }
    else{
        alert("Sai mk hoac tai khoan");
        userNameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }

    
})