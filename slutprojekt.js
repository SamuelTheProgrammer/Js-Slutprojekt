/* Alla dessa funktioner beskrivs i html koden */
function changeBackground() {
    document.body.style.backgroundColor = "blue";
}

function changeImage() {
    document.getElementById("image").src = "R1.jpg";
}

function hideImage() {
    document.getElementById("image").style.display = "none";
}

function showImage() {
    document.getElementById("image").style.display = "initial";
}

function changeHeader() {
    document.getElementById("h1").innerHTML = "Du hittade rätt knapp!";
}

function removeHeader() {
    document.getElementById("h1").style.display = "none"; 

}
