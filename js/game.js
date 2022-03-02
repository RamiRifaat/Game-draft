let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let player1param = document.getElementById("player1-param");
let player2param = document.getElementById("player2-param");
let player1X = 250;
let player1Y = 250;
let player2X = 250;
let player2Y = 250;
let player1Speed = 2;
let player2Speed = 2;
let player1XDir = 0;
let player1YDir = 0;
let player2XDir = 0;
let player2YDir = 0;
const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 20;
const ARENA_HEIGHT = 500;
const ARENA_WIDTH = 500;

function drawPlayer1() {
    ctx.fillRect(player1X, player1Y, PLAYER_WIDTH, PLAYER_HEIGHT)
}

function drawPlayer2() {
    ctx.fillRect(player2X, player2Y, PLAYER_WIDTH, PLAYER_HEIGHT)
}

function movePlayer() {
    player1param.innerHTML = "movePlayer:" + player1X + " " + player1Y + " " + player1XDir + " " + player1YDir;
    player1X += player1Speed * player1XDir;
    player1Y += player1Speed * player1YDir;
    if (player1X < 0) {
        player1X = 0;
    } else if (player1X > ARENA_WIDTH - PLAYER_WIDTH) {
        player1X = ARENA_WIDTH - PLAYER_WIDTH;
    }
    if (player1Y < 0) {
        player1Y = 0;
    } else if (player1Y > ARENA_HEIGHT - PLAYER_HEIGHT) {
        player1Y = ARENA_HEIGHT - PLAYER_HEIGHT;
    }

}
/*
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

*/

function movePlayer2() {
    player2param.innerHTML = "movePlayer2:" + player2X + " " + player2Y + " " + player2XDir + " " + player2YDir;
    player2X += player2Speed * player2XDir;
    player2Y += player2Speed * player2YDir;
    if (player2X < 0) {
        player2X = 0;
    } else if (player2X > ARENA_WIDTH - PLAYER_WIDTH) {
        player2X = ARENA_WIDTH - PLAYER_WIDTH;
    }

    if (player2Y < 0) {
        player2Y = 0;
    } else if (player2Y > ARENA_HEIGHT - PLAYER_HEIGHT) {
        player2Y = ARENA_HEIGHT - PLAYER_HEIGHT;
    }
}
const PLAYER1_LEFT = 37;
const PLAYER1_RIGHT = 39;
const PLAYER1_UP = 38;
const PLAYER1_DOWN = 40;

const PLAYER2_LEFT = 65;
const PLAYER2_RIGHT = 68;
const PLAYER2_UP = 87;
const PLAYER2_DOWN = 83;

function keyPressed(event) {
    let key = event.keyCode;
    if (key === PLAYER1_LEFT) {
        player1XDir = -1;

    }
    if (key === PLAYER1_RIGHT) {
        player1XDir = +1;
    }
    if (key === PLAYER1_DOWN) {
        player1YDir = +1;
    }
    if (key === PLAYER1_UP) {
        player1YDir = -1;
    }
    if (key === PLAYER2_LEFT) {
        player2XDir = -1;

    }
    if (key === PLAYER2_RIGHT) {
        player2XDir = +1;
    }
    if (key === PLAYER2_DOWN) {
        player2YDir = +1;
    }
    if (key === PLAYER2_UP) {
        player2YDir = -1;
    }
    keydownOutput.innerHTML = "Key down code:" + key + " " + player1XDir + " " + player1YDir + " " + player2XDir + " " + player2YDir;
}

function keyReleased(event) {
    let key = event.keyCode;
    if (key === PLAYER1_LEFT) {
        player1XDir = 0;
    }
    if (key === PLAYER1_RIGHT) {
        player1XDir = 0;
    }
    if (key === PLAYER1_UP) {
        player1YDir = 0;
    }
    if (key === PLAYER1_DOWN) {
        player1YDir = 0;
    }
    if (key === PLAYER2_LEFT) {
        player2XDir = 0;
    }
    if (key === PLAYER2_RIGHT) {
        player2XDir = 0;
    }
    if (key === PLAYER2_DOWN) {
        player2YDir = 0;
    }
    if (key === PLAYER2_UP) {
        player2YDir = 0;
    }
    keyupOutput.innerHTML = "Key up code:" + key + " " + player1XDir + " " + player1YDir + " " + player2XDir + " " + player2YDir;
}

function checkImpact() {
    if ((player2X < player1X + PLAYER_WIDTH) &&
        (player2X + PLAYER_WIDTH > player1X) &&
        (player2Y < player1Y + PLAYER_HEIGHT) &&
        (player2Y + PLAYER_HEIGHT > player1Y)) {
        if (player1Y < player2Y) {
            player2Y = ARENA_HEIGHT - PLAYER_HEIGHT;
        } else {
            player1Y = ARENA_HEIGHT - PLAYER_HEIGHT;
        }
    }

}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);


    drawPlayer1();
    drawPlayer2();
    // drawTriangle();
    // drawTriangle2();
    movePlayer();
    movePlayer2();

    checkImpact();

}




setInterval(refreshUI, 30)