const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//color array//
$(".btn").click(function(){
  var  randomNumber=Math.floor(Math.random()*4)

  $("body").css("background-color", colors[randomNumber]);
  $(".color").text(colors[randomNumber]);
  
});
