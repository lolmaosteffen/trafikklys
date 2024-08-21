function makeItRed() {
    document.getElementById("rødt").style.opacity = '1'
    document.getElementById('gult').style.opacity = '0.2'
    document.getElementById("grønnt").style.opacity = '0.2'
}
function makeItRedAndYellow() {
    document.getElementById("rødt").style.opacity = '1'
    document.getElementById('gult').style.opacity = '1'
    document.getElementById("grønnt").style.opacity = '0.2'
}
function avKnapp() {
    document.getElementById("rødt").style.opacity = '0.2'
    document.getElementById('gult').style.opacity = '0.2'
    document.getElementById("grønnt").style.opacity = '0.2'
}
function makeItGreen() {
    document.getElementById("grønnt").style.opacity = '1'
    document.getElementById("rødt").style.opacity = '0.2'
    document.getElementById('gult').style.opacity = '0.2'
}