 var ButtonPressed = [];
 $(".btn").click(function() {
   $(".btn").attr("disabled", true);
   $("button").removeClass("submit");
   ButtonPressed = Number($(this).attr("id"));
   checkAnswer(ButtonPressed);
 });



 function checkAnswer() {

   if (ButtonPressed < 7) {
     $("div").removeClass("hidden");
     $("#" + ButtonPressed).addClass("pressed");
   }
   else if (ButtonPressed>8)
   $("#" + ButtonPressed).addClass("pressed2");

   else
   $("#" + ButtonPressed).addClass("pressed3");

}
