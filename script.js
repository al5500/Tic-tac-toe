$(document).ready(function() {

  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var player;
  var winsX = 0;
  var winsO = 0;  

  $('.box').on('click', function() {

    var posi = $(this).attr('id');
    posi = posi.charAt(3);

    if (($(this).hasClass("cross")) || ($(this).hasClass("naught"))) {
      return;
    }

    player = $("input:radio:checked").val();
    if (player === "playerX") {
      $(this).addClass("cross");
      $("#playerO").prop("checked", true);
    } else {
      $(this).addClass("naught");
      $("#playerX").prop("checked", true);
    }
    board[posi] = player;
    checkWin();

    noMoreMoves();
  });

  var checkWin = function() {
    if ((board[1] === board[2]) && (board[2] === board[3])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[4] === board[5]) && (board[5] === board[6])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[7] === board[8]) && (board[8] === board[9])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[1] === board[4]) && (board[4] === board[7])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[2] === board[5]) && (board[5] === board[8])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[3] === board[6]) && (board[6] === board[9])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[1] === board[5]) && (board[5] === board[9])) {
      alert('Algebraic! You Won!!!');
      whoWins();
    }
    if ((board[3] === board[5]) && (board[5] === board[7])) {
      alert('Algebraic! You Won!!!');
      whoWins();
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
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  var noMoreMoves = function() {
    var number = $('.naught').length + $('.cross').length;
    if (number === 9) {
      return alert('Game Over Man!')
    }
  }

  $('.clearBoard').on('click', clearBoard);


});
