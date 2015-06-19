var box = document.getElementsByClassName('box');
var counter = 1;
var moveCounter = 0;
var xmatches = 0;
var omatches = 0;
var victory = false;



//Winning conditons
var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],
    xmoves = [],
    omoves = [];

//adds event listener to each one of the spaces and alternates X's and O's on click.
for(var i = 0; i < box.length; i++){
  box[i].value = i;
  box[i].addEventListener('click', function(el){
  if(moveCounter < 9){
    if(this.innerHTML === ""){
      if(counter === 1){
        this.innerHTML = '<img src="images/X.png" width="50px" height="50px">';
        xmoves.push(this.value);
        counter++;
        moveCounter++;
        testWinConditions();
        res();
      }else{
        this.innerHTML = '<img src="images/O.jpg" width="50px" height="50px">';
        omoves.push(this.value);
        counter--;
        moveCounter++;
        testWinConditions();
        res();
      }
    }
  }
  })
}

//Test for winning conditions on each click
var testWinConditions = function(){
  if(xmoves.length >= 3){
    for(var i = 0; i < winConditions.length; i++){
      xmatches = 0;
      xmoves.forEach(function(el,i,arr){
        for(var j = 0; j < winConditions[i].length; j++){
          if(el === winConditions[i][j]){
            xmatches++;
            }
          }
      })
      if(xmatches === 3){
        victory = true;
        alert('Player One Wins');
        return;
    }
    }
  }if (omoves.length >= 3){
    for(var i = 0; i < winConditions.length; i++){
      omatches = 0;
      omoves.forEach(function(el,i,arr){
        for(var j = 0; j < winConditions[i].length; j++){
          if(el === winConditions[i][j]){
            omatches++;
            }
          }
      })
      if(omatches === 3){
        victory = true;
        alert('Player Two Wins')
        return;
    }
    }
  }
}

//Game resetter
function res (){
  if(moveCounter === 9 && victory === false){
    alert('Draw game, resetting the board');
    for(var i = 0; i < box.length; i++){
      box[i].innerHTML = "";
      box[i].value = undefined;
    }
    moveCounter = 0;
    xmoves = [];
    omove = [];
    victory = false;
    counter = 1;
  }else if(moveCounter < 9 && victory === true){
    alert('Good Game! resetting the board');  
    for(var i = 0; i < box.length; i++){
      box[i].innerHTML = "";
      box[i].value = undefined;
    }
    moveCounter = 0;
    xmoves = [];
    omoves = [];
    vicory = false;
    counter = 1;
  }
}
