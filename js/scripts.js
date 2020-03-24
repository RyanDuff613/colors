$(document).ready(function() {
  
  $(".hidden").click(function() {
    $(".shown").show();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("span#clickable").click(function() {
    $("body").removeClass();
    $("body").addClass("darkBackground");
  });

  $("span#clickable").click(function(){
    $("body").removeClass();
    $("body").addClass("lightBackground");
  });

});