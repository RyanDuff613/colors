$(document).ready(function() {

  $(".shown").click(function() {
    $(".hidden").show();
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

  $("#clickable").click(function() {
    $("body").removeClass("red-background green-background yellow-background");
    $("body").toggleClass("darkBackground");
  });

  // $(".shown#clickable").click(function(){
  //   $("body").removeClass();
  //   $("body").addClass("lightBackground");
  // });

});