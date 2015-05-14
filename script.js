$(document).ready(function() {

  var board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var player;
  var winsX = 0;
  var winsO = 0; 
  var nextPlayer; 

  $('.box').on('click', function() {

    var posi = $(this).attr('id').charAt(3);

    if (($(this).hasClass("cross")) || ($(this).hasClass("naught"))) {
      return;
    }

    player = $("input:radio:checked").val();
    if (player === "playerX") {
      $(this).addClass("cross");
      nextPlayer = 'playerO';
      $("#playerO").prop("checked", true);
    } else {
      $(this).addClass("naught");
      nextPlayer = 'playerX';
      $("#playerX").prop("checked", true);
    }
    board[posi] = player;
    
    if (checkWin() === true) {
      alert("Algebraic! You Won!!!");
      whoWins();
    }else if(noMoreMoves() === true) {
      alert('Game Over Man!');
     return;
   };
   alert(ifNextMoveWins(nextPlayer));

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
      $(".finnWin").html('Finn Wins = '+winsX)
    }
    if (player === "playerO") {
      winsO += 1
      $(".jakeWin").html('Jake Wins = '+winsO)
    }
  }
  var clearBoard = function() {
    $('.container').children().removeClass('naught cross');
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  var noMoreMoves = function() {
    var number = $('.naught').length + $('.cross').length;
    if (number === 9) {
      return true;
    }
  }
  var resetCount = function(){
    winsX = 0;
    winsO = 0;
    $(".finnWin").html('Finn Wins = 0');
    $(".jakeWin").html('Jake Wins = 0');
  }

  $('.clearBoard').on('click', clearBoard);
 
  $('.resetCount').on('click', resetCount);

  var ifNextMoveWins = function (playerCheck){
    var line = board[1] + board[2] + board[3];
    if (line.length === 15){
      var firstIndex = line.indexOf(playerCheck);
      if (firstIndex >= 0){
        var lastIndex = line.lastIndexOf(playerCheck);
        if (firstIndex != lastIndex) {
          line = line.replace(playerCheck, "");
          line = line.replace(playerCheck, "");
          return parseInt(line);
        }
      }
    }
    return 0;
    
  }


});
