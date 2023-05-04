function show_hide() {
    var signup = document.getElementById("container1");
    var login = document.getElementById("container2");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("account-phone2").value="";
        document.getElementById("account-password2").value="";
        signup.style.display = "none";  //signup消失
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
     
        document.getElementById("realname").value="";
        document.getElementById("account-nickname").value="";
        document.getElementById("account-price").value="";
        document.getElementById("account-mail").value="";
        document.getElementById("account-password").value="";
        document.getElementById("account-location").value="";
    }
}