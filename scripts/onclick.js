var address;
var social_security_num;
var creditcard_num;
var creditcard_expiration;
var creditcard_cvv;
var formdiv;
window.onload = function(){
    document.getElementById("button").onclick = function(){
        //sends them to order page
        location.href="order.html";
        console.log("works!");
    }
}