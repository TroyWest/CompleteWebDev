var target = document.getElementById("target");
var canvas = document.getElementById("canvas");
var timer = document.getElementById("timer");
var average = document.getElementById("average");
var startTime;
var times = [];

function setSize() {
    var sizeNumber = Math.floor((3 * Math.random())) + 1;
    if (sizeNumber == 1) {
        return " small ";
    }

    if (sizeNumber == 2) {
        return " medium ";
    }

    return " large "
}

function setShape() {
    var shapeNumber = Math.floor((2 * Math.random())) + 1;

    if (shapeNumber == 1) {
        return " square ";
    }
    return " circle ";
}

function setColor() {
    var red = Math.floor((255 * Math.random())) + 1;
    var blue = Math.floor((255 * Math.random())) + 1;
    var green = Math.floor((255 * Math.random())) + 1;

    return "rgb(" + red + ", " + blue + ", " + green + ")"
}

function setPosition(targetDimension, canvasDimension) {
    var max = canvasDimension - targetDimension;
    return (Math.floor((max * Math.random()))) + "px";
}

function clearTarget() {
    target.className = "";
}

function showTarget() {
    target.className += setSize();
    target.className += setShape();
    target.style.backgroundColor = setColor();
    target.style.top = setPosition(target.clientHeight, canvas.clientHeight);
    target.style.left = setPosition(target.clientWidth, canvas.clientWidth);
    startTime = new Date().getTime();
}

function getSum(total, number) {
    return total + number;
}

showTarget();

target.onclick = function () {
    var endTime = new Date().getTime();
    var elapsed = (endTime - startTime) / 1000;
    times.push(elapsed);
    var averageTime = (times.reduce(getSum) / times.length).toFixed(3);
    timer.innerText = elapsed + "s";
    average.innerText = averageTime + "s";

    clearTarget();
    setTimeout(function () {
        showTarget();
        
    }, (Math.random() * 3000));
};