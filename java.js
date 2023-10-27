$(document).ready(function() {
  
  $("hide1").click(function() {
    $("row").hide();
    $(this).next().slideToggle(200);
  });
 
});
