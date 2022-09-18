function sendlink() {
    var link = document.getElementById("foat").value;
}
function hide() {

    var hide = document.getElementById("text");
    if (hide.style.display === "none") {
        hide.style.display = "block";
    } else {
        hide.style.display = "none";

    }
}
function hide1() {
    var hide1 = document.getElementById("text1");

    if (hide1.style.display === "none") {
        hide1.style.display = "block";
    } else {
        hide1.style.display = "none";
    }
    
}
function getkey() {
    var key = document.getElementById("text").value;
    if (key == "") {
        window.alert("Code cannot be empty")
    }
    //window.alert(key);

}