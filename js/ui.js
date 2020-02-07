$(document).ready(function() {
    $("#action_menu_btn").click(function() {
      $(".action_menu").toggle();
    });



$("#recording-press").hide();

$(".record").click(function() {
  //hide microphone button
  $(".record").hide();
  //show the recording timer 
  $("#recording-press").toggle();
  //timer function
// var timer2 = "00:10";
// var interval = setInterval(function() {

  
//   var timer = timer2.split(':');
//   //by parsing integer, I avoid all extra string processing
//   var minutes = parseInt(timer[0], 10);
//   var seconds = parseInt(timer[1], 10);
//   --seconds;
//   minutes = (seconds < 0) ? clearInterval(interval) : minutes;
//   if (minutes < 0) clearInterval(interval);
//   seconds = (seconds < 0) ? clearInterval(interval) : seconds;
//   seconds = (seconds < 10) ? '0' + seconds : seconds;
//   //minutes = (minutes < 10) ?  minutes : minutes;
//   //if stopwatch reached at 00:00 then break;
//   if(minutes==undefined){

//     $("#recording-press").hide();
//     $(".record").show();
//     timer2="00:10";
//         return;
//   }
//   $('.countdown').html(minutes + ':' + seconds);
//   timer2 = minutes + ':' + seconds;
// //   if(timer2=="00:00"){
// //       clearInterval(interval);
// //   }
// }, 1000);

});

$(".btn-pause").click(function() {

});

$(".btn-stop").click(function() {
  $(".record").toggle();
  $("#recording-press").toggle();
});


});