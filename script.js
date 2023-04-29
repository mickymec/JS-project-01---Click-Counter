let redbtn = document.getElementById('red');
let greenbtn = document.getElementById('green');
let bluebtn = document.getElementById('blue');

let redCount = document.getElementById('red-count');
let greenCount = document.getElementById('green-count');
let blueCount = document.getElementById('blue-count');



redbtn.onclick = () => {
    // console.log('red')
    redCount.innerHTML = parseInt(redCount.innerHTML) + 1; 
}

greenbtn.onclick = () => {
    // console.log('green')
    greenCount.innerHTML = parseInt(greenCount.innerHTML) + 1; 
}

bluebtn.onclick = () => {
    // console.log('blue')
    blueCount.innerHTML = parseInt(blueCount.innerHTML) + 1; 
}

let clearBtn = document.getElementById('clear-btn');

clearBtn.onclick = () => {
    redCount.innerHTML = 0;
    greenCount.innerHTML = 0;
    blueCount.innerHTML = 0;
    // console.log("Hello");
}

