
let posX1 = 50;
let posY1 = 50;

let posX2 = 50;
let posY2 = 50;

let targetX = 0;
let targetY = 0;


//player 1
topBtn.onclick = function(){

    
    posY1--;
    checkWinner();
    player1.style.top = posY1+'vh';
}
bottomBtn.onclick = function(){
    posY1++;
    checkWinner();
    player1.style.top = posY1+'vh';
}
leftBtn.onclick = function(){
    if(posX1>0){
    posX1--;
    checkWinner();
    player1.style.left = posX1+'%';
    }
    else{
        posX1 = 100;
        posX1--;
        checkWinner();
        player1.style.left = posX1+'%';
    }
}
rightBtn.onclick = function () {
   if(posX1<100){
    posX1++;
    checkWinner();
    player1.style.left = posX1+'%';
   }else{
    posX1 = 0;
    posX1++;
    checkWinner();
    player1.style.left = posX1+'%';
   }


}

//player 2
topBtn2.onclick = function(){
    posY2--;
    checkWinner();
    player2.style.top = posY2+'vh';
}
bottomBtn2.onclick = function(){
    posY2++;
    checkWinner();
    player2.style.top = posY2+'vh';
}
leftBtn2.onclick = function(){
    posX2--;
    checkWinner();
    player2.style.left = posX2+'%';
}
rightBtn2.onclick = function () {
    posX2++;
    checkWinner();
    player2.style.left = posX2+'%';
}



function setRandom() {
    targetX = Math.floor(Math.random()*100);
    targetY = Math.floor(Math.random()*100);
    target.style.top = targetY+'%';
    target.style.left = targetX+'%';
}
setRandom();

let score1 = 0;
let score2 = 0;


function checkWinner(){
    if (targetX==posX1 && targetY==posY1) {
        setRandom();
        score1++;
        player1Score.innerText = score1;
    }else if (targetX==posX2 && targetY==posY2) {
        setRandom();
        score2++;
        player2Score.innerText = score2;
    }
}


red.onclick = function(){
    player1.style.backgroundColor = 'red';
}
green.onclick = function(){
    player1.style.backgroundColor = 'green';
}
blue.onclick = function(){
    player1.style.backgroundColor = 'blue';
}
skin1.onclick = function(){
    player1.style.backgroundImage = `url(https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-PNG-Clipart-Background.png)`;
    player1.style.backgroundColor = 'transparent';
    player1.style.borderRadius = '0';
}
skin2.onclick = function(){
    player1.style.backgroundImage = `url(https://www.freeiconspng.com/thumbs/birds-png/angry-birds-png-29.png)`;
    player1.style.backgroundColor = 'transparent';
    player1.style.borderRadius = '0';
}

let openWindow = false;

settings.onclick = function() {
    if (openWindow==false) {
        settingsWindow.style.display = 'flex';
        settings.style.transform = 'rotate(90deg)';
        openWindow = true;
    }else{
        settingsWindow.style.display = 'none';
        settings.style.transform = 'rotate(0)';
        openWindow = false;
    }
}

let openWindow1 = false;

settings1.onclick = function() {
    if (openWindow1==false) {
        settingsWindow1.style.display = 'flex';
        settings1.style.transform = 'rotate(90deg)';
        openWindow1 = true;
    }else{
        settingsWindow1.style.display = 'none';
        settings1.style.transform = 'rotate(0)';
        openWindow1 = false;
    }
}

red1.onclick = function(){
    player2.style.backgroundColor = 'red';
}
green1.onclick = function(){
    player2.style.backgroundColor = 'green';
}
blue1.onclick = function(){
    player2.style.backgroundColor = 'blue';
}

skin3.onclick = function(){
    player2.style.backgroundImage = `url(https://приз.укр/image/95?w=500&h=500&stamp=585303285)`;
    player2.style.backgroundColor = 'transparent';
    player2.style.borderRadius = '0';
}
skin4.onclick = function(){
    player2.style.backgroundImage = `url(https://arenamax.com.ua/wp-content/uploads/2021/09/rostovaja-figura-minon-minony-vid-1-850-mm.jpg)`;
    player2.style.backgroundColor = 'transparent';
    player2.style.borderRadius = '0';
}

//Зміна кольору цілі
redTarget.onclick = function(){
    target.style.backgroundColor = 'red';
}
blueTarget.onclick = function(){
    target.style.backgroundColor = 'blue';
}

//Задній фон гри
redBackgame.onclick = function(){
    document.body.style.backgroundColor= 'rgb(255, 176, 176)';
}
blueBackgame.onclick = function(){
    document.body.style.backgroundColor= 'rgb(150, 150, 253)';
}
yellowBackgame.onclick = function(){
    document.body.style.backgroundColor= 'rgb(249, 255, 199)';
}

let gamepadOpen = true;
gamepadSwither.onclick = function(){
    if(gamepadOpen==true){
    gamePad1.style.bottom =  '-200px';
    gamePad2.style.bottom =  '-200px';
        gamepadOpen = false;
}else{
    gamePad1.style.bottom =  '30px';
    gamePad2.style.bottom =  '30px';
    gamepadOpen = true;
}

}


document.body.onkeydown = function(e){
    console.log(e.keyCode);
    if(e.keyCode == 39){
        posX1++;
        player1.style.left = posX1+'%';
    }else if(e.keyCode == 37){
        posX1--;
        player1.style.left= posX1+'%';
    }else if(e.keyCode == 38){
        posY1--;
        player1.style.top = posY1+'vh';
    }else if(e.keyCode == 40){
        posY1++;
        player1.style.top = posY1+'vh';
    }else if(e.keyCode == 87){
        posY2--;
        player2.style.top = posY2+'vh';
    }else if(e.keyCode == 83){
        posY2++;
        player2.style.top = posY2+'vh';
    }else if(e.keyCode == 65){
        posX2--;
        player2.style.left = posX2+'%';
    }else if(e.keyCode == 68){
        posX2++;
        player2.style.left = posX2+'%';
    }
}


