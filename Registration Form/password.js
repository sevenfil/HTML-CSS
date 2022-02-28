document.querySelector('.button').onclick = function(){
    var Password = document.querySelector('.password').value,
    confirmpassword = document.querySelector('.confirm_password').value;

    if(password != confirm_password){
        alert("Password don't match");
        return false
    }
}
