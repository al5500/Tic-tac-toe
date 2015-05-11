$(document).ready(function() {



  $('.box').on('click', function() {

    if( ($(this).hasClass("cross")) || ($(this).hasClass("naught")) ){
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

  });






});
