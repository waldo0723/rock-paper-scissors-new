$(".paperbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".paperchoice").show();
    $(".score").hide();


    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)



    if(window.innerWidth < 768)
  {
    div1.animate({
      height: '170px',
      width: '170px'
    }, "slow");

    div1.animate({
      height: '150px',
      width: '150px'
    }, "slow");
  }
  else{
    div1.animate({
      height: '220px',
      width: '220px'
    }, "slow");

    div1.animate({
      height: '200px',
      width: '200px'
    }, "slow");
  }


  var results  =   won(div);

    $(".headyou").delay(500).fadeIn();

    $(".headhouse").delay(500).fadeIn();

var you = 0;
if(results === "1")
{
  you ="1";
  win = "YOU WIN"
  score = parseInt(score) + parseInt(you);

}
else if(results === "-1")
{
  win= "YOU LOSE"
  you = "1";
  score = parseInt(score) - parseInt(you);
}
else{
  win = "DRAW"
}
    $(".score").text(score);
    $(".win").text(win);


    $(".win").delay(3500).fadeIn();
    $(".play").delay(3500).fadeIn();
    $(".score").delay(3500).fadeIn();
    console.log(results);

  }

)
$(".rockbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".rockchoice").show();
    $(".score").hide();


    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)



    if(window.innerWidth < 768)
  {
    div1.animate({
      height: '170px',
      width: '170px'
    }, "slow");

    div1.animate({
      height: '150px',
      width: '150px'
    }, "slow");
  }
  else{
    div1.animate({
      height: '220px',
      width: '220px'
    }, "slow");

    div1.animate({
      height: '200px',
      width: '200px'
    }, "slow");
  }


  var results  =   wonrock(div);

    $(".headyou").delay(500).fadeIn();

    $(".headhouse").delay(500).fadeIn();

var you = 0;
if(results === "1")
{
  you ="1";
  win = "YOU WIN"
  score = parseInt(score) + parseInt(you);

}
else if(results === "-1")
{
  win= "YOU LOSE"
  you = "1";
  score = parseInt(score) - parseInt(you);
}
else{
  win = "DRAW"
}
    $(".score").text(score);
    $(".win").text(win);


    $(".win").delay(3500).fadeIn();
    $(".play").delay(3500).fadeIn();
    $(".score").delay(3500).fadeIn();
    console.log(results);

  }

)
$(".sicbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".scissorschoice").show();
    $(".score").hide();


    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)



    if(window.innerWidth < 768)
  {
    div1.animate({
      height: '170px',
      width: '170px'
    }, "slow");

    div1.animate({
      height: '150px',
      width: '150px'
    }, "slow");
  }
  else{
    div1.animate({
      height: '220px',
      width: '220px'
    }, "slow");

    div1.animate({
      height: '200px',
      width: '200px'
    }, "slow");
  }


  var results  =   wonsicssors(div);

    $(".headyou").delay(500).fadeIn();

    $(".headhouse").delay(500).fadeIn();

var you = 0;
if(results === "1")
{
  you ="1";
  win = "YOU WIN"
  score = parseInt(score) + parseInt(you);

}
else if(results === "-1")
{
  win= "YOU LOSE"
  you = "1";
  score = parseInt(score) - parseInt(you);
}
else{
  win = "DRAW"
}
    $(".score").text(score);
    $(".win").text(win);


    $(".win").delay(3500).fadeIn();
    $(".play").delay(3500).fadeIn();
    $(".score").delay(3500).fadeIn();
    console.log(results);

  }

)

$(".play").click(function() {

  $(".dotyou1").hide();
  $(".dotyou2").hide();
  $(".dotyou3").hide();
  $(".dothouse1").hide();
  $(".dothouse2").hide();
  $(".dothouse3").hide();
  $(".play").hide();
  $(".win").hide();
  $(".img-fluid").show();
  $(".paperbut").show();
  $(".sicbut").show();
  $(".rockbut").show();
  $(".scissorshouse").hide();
  $(".paperhouse").hide();
  $(".rockhouse").hide();
  $(".pick").hide();
  $(".dot1").hide();
  $(".paperchoice").hide();
  $(".rockchoice").hide();
  $(".scissorschoice").hide();

})

function showHouse() {

  let options = ['rock', 'paper', 'scissors'];

  var n = Math.floor(Math.random() * 11);

  while (n > 2) {
    n = Math.floor(Math.random() * 11);
  }

  return options[n];



};


function won(div) {

  if (div === ".paperhouse") {
    return "0"

  } else if (div === ".rockhouse") {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();

    return "1";


  } else {
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();

  return "-1"

  }
}

function wonsicssors(div)
{
  if(div === ".scissorshouse")
  {
    return 0;
  }

  else if(div ===".paperhouse"){

  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";


} else {
$(".dothouse1").delay(3000).fadeIn();
$(".dothouse2").delay(3000).fadeIn();
$(".dothouse3").delay(3000).fadeIn();

return "-1"

}
}

function wonrock(div)
{
  if(div === ".rockhouse")
  {
    return 0;
  }

  else if(div ===".scissorshouse"){

  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";


} else {
$(".dothouse1").delay(3000).fadeIn();
$(".dothouse2").delay(3000).fadeIn();
$(".dothouse3").delay(3000).fadeIn();

return "-1"

}
}
