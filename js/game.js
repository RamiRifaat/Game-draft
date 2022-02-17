let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let keydownOutput2 = document.getElementById("keydown-output2");
let keyupOutput2 = document.getElementById("keyup-output2");
let playerX = 250;
let playerY = 250;
let player2X = 250;
let player2Y = 250;
let playerSpeed = 2;
let player2Speed = 2;
let playerXDir = 0;
let playerYDir = 0;
let player2XDir = 0;
let player2YDir = 0;


function drawPlayer1() {
    ctx.fillRect(playerX, playerY, 100, 20)
}

function drawPlayer2() {
    ctx.fillRect(player2X, player2Y, 100, 20)
}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 400) {
        playerX = 400;
    }
    if (playerY < 0) {
        playerY = 0;
    }
}

function drawTriangle() {

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

}

function drawTriangle2() {

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

}



function movePlayer2() {
    player2X += player2Speed * player2XDir;
    player2Y += player2Speed * player2YDir;
    if (player2X < 0) {
        player2X = 0;
    } else if (player2X > 400) {
        player2X = 400;
    }
    if (player2Y < 0) {
        player2Y = 0;
    }
}

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code:" + key;
    if (key === 37) {
        playerXDir = -1;

    } else if (key === 39) {
        playerXDir = +1;
    }
    if (key === 40) {
        playerYDir = +1;
    }
    if (key === 38) {
        playerYDir = -1;
    }
}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code:" + key;
    if (key === 37) {
        playerXDir = 0;
    }
    if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    }
    if (key === 40) {
        playerYDir = 0;
    }
}

function keyPressed2(event) {
    let key2 = event.keyCode;
    keydownOutput2.innerHTML = "Key down code:" + key2;
    if (key2 === 65) {
        player2XDir = -1;

    } else if (key2 === 68) {
        player2XDir = +1;
    }
    if (key2 === 83) {
        player2YDir = +1;
    }
    if (key2 === 87) {
        player2YDir = -1;
    }
}

function keyReleased2(event) {
    let key2 = event.keyCode;
    keyupOutput2.innerHTML = "Key up code:" + key2;
    if (key2 === 65) {
        player2XDir = 0;
    }
    if (key2 === 68) {
        player2XDir = 0;
    }
    if (key2 === 83) {
        player2YDir = 0;
    }
    if (key2 === 87) {
        player2YDir = 0;
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);

    movePlayer();
    drawPlayer1();
    drawPlayer2();
    drawTriangle();
    drawTriangle2();
    movePlayer();
    movePlayer2();
}




setInterval(refreshUI, 30)