function form(){
let user = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let Cpassword = document.getElementById('Cpassword').value;


if(user==""||email==""||password==""||Cpassword==""){
    alert("All fields are Required");
    return false;
} else if (email == '') {
        alert("Please enter a valid email must contain @ and . in correct order");
        return false;
    } 
    else if (password.length< 6){
         alert("Password must be at least 6 characters long");
                return false;
    }
    else if (password!=Cpassword) {
        alert("Passwords do not match!");
        return false;
    } 
    else {
        alert("Registration Successful");
        return true;
    }
}


