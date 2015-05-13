$(document).ready(function() {

  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  $('.box').on('click', function() {

    var posi = $(this).attr('id');
    posi = posi.charAt(3);

    if (($(this).hasClass("cross")) || ($(this).hasClass("naught"))) {
      return;
    }

    var player = $("input:radio:checked").val();
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
      return alert('Algebraic! You Won!!!');
    }
    if ((board[4] === board[5]) && (board[5] === board[6])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[7] === board[8]) && (board[8] === board[9])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[1] === board[4]) && (board[4] === board[7])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[2] === board[5]) && (board[5] === board[8])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[3] === board[6]) && (board[6] === board[9])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[1] === board[5]) && (board[5] === board[9])) {
      return alert('Algebraic! You Won!!!');
    }
    if ((board[3] === board[5]) && (board[5] === board[7])) {
      return alert('Algebraic! You Won!!!');
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
