 var clearBoard = function() {
   $('.container').children().removeClass('naught cross');
 };

var noMoreMoves = function(){
    var number = $('.naught').length + $('.cross').length;
    if(number === 9){
      return alert('Game Over Man!')
    }

}

 $(document).ready(function() {

   $('.box').on('click', function() {

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
     noMoreMoves();
   });

   $('.clearBoard').on('click', clearBoard);

   

   



 });
