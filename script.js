$(document).ready(function() {

  var board = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var player;
  var winsX = 0;
  var winsO = 0;
  var nextPlayer;


  $('.box').on('click', function() {

    var posi = $(this).attr('id').charAt(3);

    if (($(this).hasClass("cross")) || ($(this).hasClass("naught"))) {
      return;
    }

    player = $("input[name=player]:radio:checked").val();
    board[posi] = player;
    if (player === "playerX") {
      $(this).addClass("cross");
      nextPlayer = 'playerO';
      $("#playerO").prop("checked", true);
    } else {
      $(this).addClass("naught");
      nextPlayer = 'playerX';
      $("#playerX").prop("checked", true);
    }
    

    if (checkWin() === true) {
      alert("Algebraic! You Won!!!");
      whoWins();
    } else if (noMoreMoves() === true) {
      alert('Game Over Man!');
      return;
    };

  });

  var checkWin = function() {
    if ((board[1] === board[2]) && (board[2] === board[3])) {
      return true;
    }
    if ((board[4] === board[5]) && (board[5] === board[6])) {
      return true;
    }
    if ((board[7] === board[8]) && (board[8] === board[9])) {
      return true;
    }
    if ((board[1] === board[4]) && (board[4] === board[7])) {
      return true;
    }
    if ((board[2] === board[5]) && (board[5] === board[8])) {
      return true;
    }
    if ((board[3] === board[6]) && (board[6] === board[9])) {
      return true;
    }
    if ((board[1] === board[5]) && (board[5] === board[9])) {
      return true;
    }
    if ((board[3] === board[5]) && (board[5] === board[7])) {
      return true;
    }
  }

  var whoWins = function() {
    if (player === "playerX") {
      winsX += 1
      $(".finnWin").html('Finn Wins = ' + winsX)
    }
    if (player === "playerO") {
      winsO += 1
      $(".jakeWin").html('Jake Wins = ' + winsO)
    }
  }
  var clearBoard = function() {
    $('.container').children().removeClass('naught cross');
    board = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  }

  var noMoreMoves = function() {
    var number = $('.naught').length + $('.cross').length;
    if (number === 9) {
      return true;
    }
  }
  var resetCount = function() {
    winsX = 0;
    winsO = 0;
    $(".finnWin").html('Finn Wins = 0');
    $(".jakeWin").html('Jake Wins = 0');
  }

  $('.clearBoard').on('click', clearBoard);

  $('.resetCount').on('click', resetCount);

// Provides a hint for the next move

  $('.nextMove').on('click', function(){
    // Check to see if i can win next move 

    player = $("input[name=player]:radio:checked").val();
    var nextMove = ifNextMoveWins(player);
    if(nextMove > 0){
      return boxAlert(nextMove);
    }

    // Check to see if the other player can win in the next move, and block

    if(player === 'playerX'){
      var nextPlayer = 'playerO';
    }else{
      nextPlayer = 'playerX'
    } 
    nextMove = ifNextMoveWins(nextPlayer);
    if(nextMove > 0){
      return boxAlert(nextMove);
    }

    // Check to see if there is a fork
    // with only one on row or col
    var fork = lineForkPlayer(player);
    if(fork > 0){
            return boxAlert(fork);
    } 
    fork = lineForkPlayer(nextPlayer);
    if(fork > 0){
            return boxAlert(fork);
    }
       
    

    //Check to see if middle box is empty on the second move or later

    var number = $('.naught').length + $('.cross').length;
    if (board[5] === '5' && number > 0 ){
      return boxAlert(5);
    }

    boxAlert(randomNumber19());


  });



  var ifNextMoveWins = function(playerCheck) {
    var nextBox;
    nextBox = lineCheck(playerCheck, 1, 2, 3);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 4, 5, 6);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 7, 8, 9);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 1, 4, 7);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 2, 5, 8);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 3, 6, 9);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 1, 5, 9);
    if (nextBox > 0) {
      return nextBox;
    }
    nextBox = lineCheck(playerCheck, 3, 5, 7);
    if (nextBox > 0) {
      return nextBox;
    }
    return 0;
  }

  var boxAlert = function(box){
    alert('Click Box ' + box);
  };

  // Find an empty spot on the line if i occupy the other 2 spots on the line

  var lineCheck = function(playerCheck, box1, box2, box3) {
    var line = board[box1] + board[box2] + board[box3];
   
    // If 2 players are on the line
    // Verify they are the same player

    if (line.length === 15) {
      var firstIndex = line.indexOf(playerCheck);
      if (firstIndex >= 0) {
        var lastIndex = line.lastIndexOf(playerCheck);
        if (firstIndex != lastIndex) {
          line = line.replace(playerCheck, "");
          line = line.replace(playerCheck, "");
          return parseInt(line);
        }
      }
    }
    return 0;

  };
// Find a line with two empty spots
// return the empty spots

  var lineCheckTwo = function(playerCheck, box1, box2, box3) {
    var line = board[box1] + board[box2] + board[box3];
    // If 2 players are on the line
    // Verify they are the same player
    if (line.length === 9) {
      var firstIndex = line.indexOf(playerCheck);
      if (firstIndex >= 0) {
          line = line.replace(playerCheck, "");
          return parseInt(line);
        }
      }
    return 0;
    }

//checks for a fork between a row and col
   var lineFork = function(playerCheck, row1, row2, row3, col1, col2, col3){
       var rowEmptyCell = lineCheckTwo(playerCheck, row1, row2, row3);
    if(rowEmptyCell > 0){
      var colEmptyCell = lineCheckTwo(playerCheck, col1, col2, col3);
      if( colEmptyCell > 0){
        var commonCell = commonNum(rowEmptyCell, colEmptyCell);
          if(commonCell > 0 ){
            return commonCell;
          }
      } 
    }
      return 0;
   } 

   var lineForkPlayer = function(playerCheck){
    var fork = lineFork(playerCheck, 1, 2, 3, 1, 4, 7);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 1, 2, 3, 2, 5, 8);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 1, 2, 3, 3, 6, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 1, 2, 3, 1, 5, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 1, 2, 3, 3, 5, 7);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 4, 5, 6, 1, 4, 7);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 4, 5, 6, 2, 5, 8);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 4, 5, 6, 3, 6, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 4, 5, 6, 1, 5, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 4, 5, 6, 3, 5, 7);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 7, 8, 9, 1, 4, 7);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 7, 8, 9, 2, 5, 8);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 7, 8, 9, 3, 6, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 7, 8, 9, 1, 5, 9);
    if(fork > 0){
            return fork;
    }
    var fork = lineFork(playerCheck, 7, 8, 9, 3, 5, 7);
    if(fork > 0){
            return fork;
    }
    return 0;

   }

   var randomNumber19 = function(){
    var num = 0;
    while (num === 0){ 
      num = Math.floor((Math.random() * 10));
      if(num > 0){
        if(board[num].length < 2){
          return num;
        }
        num = 0;
      }
    }
  };
  
  
  // Returns the common number for a row or col 
  // Otherwise return zero

  var commonNum = function(rowCells,colCells){
    var a = parseInt(rowCells.toString().charAt(0));
    var b = parseInt(rowCells.toString().charAt(1));
    var c = parseInt(colCells.toString().charAt(0));
    var d = parseInt(colCells.toString().charAt(1));
    if(a === b || a === c || a === d) {
      return a;
  } else if (b === c || b === d) {
    return b;
  } else if (c === d) {
    return c;
  }
  return 0;
 };

});
