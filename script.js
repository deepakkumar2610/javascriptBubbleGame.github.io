var bubblesDiv = document.getElementById('mainBottom');
var gifClip = document.getElementById('gifClip');
var hitText = document.getElementById('hit');
var score = document.getElementById('score');
var sound = document.getElementById('Audio');
var scoreCard = document.getElementById('scoreCard');
var finalScore = document.getElementById('fnlScr');
var btnPlyAgn = document.getElementById('playAgain');

const makeBubble = () =>{
    for (i = 0; i < 220; i++) {
        var randNum = Math.floor(Math.random() * 10);//Not declare globally because it should be run by loop
        bubblesDiv.innerHTML += `<div class="bubble">${randNum}</div>`;
    }
}

const timer = () =>{
    var count = 60;
    var counter = setInterval(()=>{
        count--;
        document.querySelector('#timer').textContent = count;
        if(count <= 5){
            sound.play();

        }
        if(count == 0){
            clearInterval(counter);
            hitText .textContent = 0;
            bubblesDiv.style.display = 'none';
            scoreCard.style.display = 'block';
            gifClip.style.display = 'block';
            finalScore.textContent = gameScore;
            console.log('Game Over!!!')
        }
    },1000)
}

var hittedText; 
const pleaseHit = () =>{
    var rNum = Math.floor(Math.random() * 10);
    hittedText = hitText.textContent = rNum;
}

var node;
const bubbleClicked = () =>{
    bubblesDiv.addEventListener('click',(event)=>{
        numNode = Number(event.target.textContent);
        if(hittedText == numNode){
            increaseScore();
            pleaseHit();
        }else{
            sound.play();
        }
    })
}

var gameScore = 0;
const increaseScore = () =>{
        gameScore += 2;
        score.textContent = gameScore;
        console.log(gameScore)
}

const playAgain = () =>{
    window.location.reload();
}

btnPlyAgn.addEventListener('click',()=>{
    playAgain();
});

makeBubble();
timer();
pleaseHit();
bubbleClicked();
