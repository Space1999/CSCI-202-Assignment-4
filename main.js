$(document).ready(function() {
  
  
    $("#showOrder").click(showOrder);
    $("#showChaos").click(showChaos);
    
    function showOrder() {
      $('.realm').hide();
      $('#order').show();
      $('body').css("background-color","white");
    }
    
    function showChaos() {
      $('.realm').hide();
      $('#chaos').show();
      $('body').css("background-color","black");
    }
  });