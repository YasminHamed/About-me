function opennNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}
var myProfile =["YasminHamed", "front end developer"]
document.getElementById("profile").innerHTML = myProfile;
function DarkMode(){
    document.body.classList.toggle("dark")
}
function ClickBtn(a,b,c,d) {
    return a+b+c+d
}
ClickBtn(3,5,2,4)
document.getElementById("num").innerHTML = ClickBtn(2,6,1,5)