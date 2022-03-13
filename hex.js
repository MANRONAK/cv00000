const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$("#btn").click(function(){
  var randomNumber=["#"];
  for(var i=0;i<6;i++)
  {
    var element=hex[Math.floor(Math.random()*16)];
    randomNumber.push(element);
    var newElement=randomNumber.join("");
    $("body").css("background-color", newElement) ;

    $(".color").text(newElement);
  }

  });
