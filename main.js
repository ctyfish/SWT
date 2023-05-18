/*import navbar and footer*/
$(function() {
    $("#includenavbar").load("navbar.html");
    $("#includelogin").load("login.html");
    $("#includefooter").load("footer.html");
});

/*function show_hide(){
    var forget = document.getElementById("containerforget");
    var login = document.getElementById("containerlogin");
    if(forget.style.display === "none"){
        forget.style.display === "block";
        login.style.display === "none";
    }
    else{
        login.style.display === "block";
        forget.style.display === "none";
    }
}*/