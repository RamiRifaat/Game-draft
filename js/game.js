let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let player1param = document.getElementById("player1-param");
let player2param = document.getElementById("player2-param");
const GRAVITY = 1;
const UP_VELOCITY = -10;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;
const ARENA_HEIGHT = 500;
const ARENA_WIDTH = 500;

const PLAYER1_LEFT = 74;
const PLAYER1_RIGHT = 76;
const PLAYER1_UP = 73;
const PLAYER1_DOWN = 75;

const PLAYER2_LEFT = 65;
const PLAYER2_RIGHT = 68;
const PLAYER2_UP = 87;
const PLAYER2_DOWN = 83;

const STARTING_SIDE_DISTANCE = 50;
const STARTING_HEIGHT = 250;

let player1X = 400;
let player1Y = STARTING_HEIGHT;
let player2X = 100;
let player2Y = STARTING_HEIGHT;
let player1XSpeed = 4;
let player2XSpeed = 4;
let player1YSpeed = 0;
let player2YSpeed = 0;
let player1XDir = 0;
let player1YDir = 0;
let player2XDir = 0;
let player2YDir = 0;
let player1Lives = 5;
let player2Lives = 5;
let health1meter = document.getElementById("health1Meter");

health1meter.value = player1Lives;

let health2meter = document.getElementById("health2Meter");

health2meter.value = player2Lives;

function drawPlayer1() {
    ctx.fillStyle = '#FFA500';
    ctx.fillRect(player1X, player1Y, PLAYER_WIDTH, PLAYER_HEIGHT)
}

function drawPlayer2() {
    ctx.fillStyle = '#3370d4';
    ctx.fillRect(player2X, player2Y, PLAYER_WIDTH, PLAYER_HEIGHT)
}

function movePlayer() {
    player1param.innerHTML = "movePlayer:" + player1X + " " + player1Y + " " + player1XDir + " " + player1YDir;
    player1X += player1XSpeed * player1XDir;

    player1YSpeed += GRAVITY;

    player1Y = player1Y + player1YSpeed;
    if (player1X < 0) {
        player1X = 0;
    } else if (player1X > ARENA_WIDTH - PLAYER_WIDTH) {
        player1X = ARENA_WIDTH - PLAYER_WIDTH;
    }
    if (player1Y < 0) {
        player1Y = 450;
    } else if (player1Y > ARENA_HEIGHT - PLAYER_HEIGHT) {
        player1Y = ARENA_HEIGHT - PLAYER_HEIGHT;
    }

}


function movePlayer2() {
    player2param.innerHTML = "movePlayer2:" + player2X + " " + player2Y + " " + player2XDir + " " + player2YDir;
    player2X += player2XSpeed * player2XDir;
    player2YSpeed += GRAVITY;
    player2Y = player2Y + player2YSpeed;
    if (player2X < 0) {
        player2X = 0;
    } else if (player2X > ARENA_WIDTH - PLAYER_WIDTH) {
        player2X = ARENA_WIDTH - PLAYER_WIDTH;
    }

    if (player2Y < 0) {
        player2Y = 450;
    } else if (player2Y > ARENA_HEIGHT - PLAYER_HEIGHT) {
        player2Y = ARENA_HEIGHT - PLAYER_HEIGHT;
    }
}



function keyPressed(event) {
    let key = event.keyCode;
    if (key === PLAYER1_LEFT) {
        player1XDir = -1;

    }
    if (key === PLAYER1_RIGHT) {
        player1XDir = 1;
    }
    if (key === PLAYER1_DOWN) {
        //player1YDir = +1;
    }
    if (key === PLAYER1_UP) {
        //player1YDir = -1;
    }
    if (key === PLAYER2_LEFT) {
        player2XDir = -1;

    }
    if (key === PLAYER2_RIGHT) {
        player2XDir = 1;
    }
    if (key === PLAYER2_DOWN) {
        //player2YDir = +1;
    }
    if (key === PLAYER2_UP) {
        //player2YDir = -1;
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
        //player1YDir = 0;
        // player1Y = player1Y - 15;
        player1YSpeed = UP_VELOCITY;
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
        //player2YDir = 0;
    }
    if (key === PLAYER2_UP) {
        //player2YDir = 0;
        player2YSpeed = UP_VELOCITY;
    }
    keyupOutput.innerHTML = "Key up code:" + key + " " + player1XDir + " " + player1YDir + " " + player2XDir + " " + player2YDir;
}

function checkImpact() {
    if ((player2X < player1X + PLAYER_WIDTH) &&
        (player2X + PLAYER_WIDTH > player1X) &&
        (player2Y < player1Y + PLAYER_HEIGHT) &&
        (player2Y + PLAYER_HEIGHT > player1Y)) {
        if (player1Y < player2Y) {

            updatelives(1);

        } else {

            updatelives(2);
        }
    }


}

function updatelives(playerhit) {

    if (playerhit == 1) {
        alert("Player 1 has been hit");
        player1Lives = player1Lives - 1;
        let health1meter = document.getElementById("health1Meter");
        health1meter.value = player1Lives;


    }
    if (playerhit == 2) {
        alert("Player 2 has been hit");
        player2Lives = player2Lives - 1;
        let health2meter = document.getElementById("health2Meter");
        health2meter.value = player2Lives;
    }
    player1X = 400;
    player1Y = 500;
    player2X = 100;
    player2Y = 500;
    player1XDir = 0;
    player1YDir = 0;
    player2XDir = 0;
    player2YDir = 0;


    if (player1Lives == 0) {
        endGame(1);

    }
    if (player2Lives == 0) {
        endGame(2);

    }

}


function endGame(losingplayer) {

    alert("Player " + losingplayer + " has won");

    player1Lives = 5;
    player2Lives = 5;
    health1meter = document.getElementById("health1Meter");
    health1meter.value = player1Lives;
    health2meter = document.getElementById("health2Meter");
    health2meter.value = player2Lives;

    alert("Restarting Game")


}

function gravity() {
    // player1Y = player1Y + 0.15;
    // player2Y = player2Y + 0.15;
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);



    movePlayer();
    movePlayer2();

    drawPlayer1();
    drawPlayer2();
    checkImpact();



}



// setInterval(gravity, 1.5)
setInterval(refreshUI, 30)