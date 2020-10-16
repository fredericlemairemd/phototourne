let degreeNum = 130;
let rotationAllowed = true;

function rotate() {
    setInterval(rotateFull,100);
}

function rotateFull(){
    if (rotationAllowed === true) {
    let image = document.getElementById("image1");
    let degree = "rotate("+degreeNum+"deg)";
    image.style.transform = degree;
    degreeNum += 25;
    } 
}

function rotateReverse(){
rotationAllowed = false;
}

let number = 12345
let string = number.toString();
console.log(string);
let splitNumber = string.split("");
console.log(splitNumber);
