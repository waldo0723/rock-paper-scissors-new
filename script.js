$(".paperbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".paperchoice").show();
    $(".score").hide();
    $(".imagepen").hide();
    $(".spockbut").hide();
    $(".lizardbut").hide();


    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)

    if(window.innerWidth < 575 )
    {
      $(".paperchoice").toggleClass("btn");
      $(".d2").toggleClass("d");
    }

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


  var results  =   wonpaper(div);

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
    $(".imagepen").hide();
    $(".spockbut").hide();
    $(".lizardbut").hide();


    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)

    if(window.innerWidth < 575 )
    {
      $(".rockchoice").toggleClass("btn");
      $(".d2").toggleClass("d");
    }


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
    $(".imagepen").hide();
    $(".spockbut").hide();
    $(".lizardbut").hide();

    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)

    if(window.innerWidth < 575 )
    {
      $(".scissorschoice").toggleClass("btn");
      $(".d2").toggleClass("d");
    }

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
$(".spockbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".spockchoice").show();
    $(".score").hide();
    $(".imagepen").hide();
    $(".spockbut").hide();
    $(".lizardbut").hide();

    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)


    if(window.innerWidth < 575 )
    {
      $(".spockchoice").toggleClass("btn");
      $(".d2").toggleClass("d");
    }


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


  var results  =   wonspock(div);

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
$(".lizardbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();
    $(".lizardchoice").show();
    $(".score").hide();
    $(".imagepen").hide();
    $(".spockbut").hide();
    $(".lizardbut").hide();

    var score = $(".score").text();

    var house = showHouse();

    console.log(house);


    var div = "." + house + "house";

    console.log('here' + div);

    $(div).delay(2000);

    var div1 = $("." + house + "house");

    console.log('hh' + div1)

    if(window.innerWidth < 575 )
    {
      $(".lizardchoice").toggleClass("btn");
      $(".d2").toggleClass("d");
    }

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


  var results  =   wonlizard(div);

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
  $(".imagepen").show();
  $(".paperbut").show();
  $(".sicbut").show();
  $(".rockbut").show();
  $(".scissorshouse").hide();
  $(".paperhouse").hide();
  $(".rockhouse").hide();
  $(".lizardhouse").hide();
  $(".spockhouse").hide();
  $(".pick").hide();
  $(".dot1").hide();
  $(".paperchoice").hide();
  $(".rockchoice").hide();
  $(".scissorschoice").hide();
  $(".spockchoice").hide();
  $(".lizardchoice").hide();
  $(".spockbut").show();
  $(".lizardbut").show();
  if(window.innerWidth < 575 )
  {
    $(".paperchoice").toggleClass("btn");
    $(".d2").toggleClass("d");
  }


})

function showHouse() {

  let options = ['rock', 'paper', 'scissors','spock','lizard'];

  var n = Math.floor(Math.random() * 11);

  while (n > 4) {
    n = Math.floor(Math.random() * 11);
  }

  return options[n];



};


function wonpaper(div) {

  if (div === ".lizardhouse") {
    $(".dothouse1").delay(3000).fadeIn();
    $(".dothouse2").delay(3000).fadeIn();
    $(".dothouse3").delay(3000).fadeIn();

    return "-1"

  } else if (div === ".rockhouse") {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();

    return "1";


  } else if(div === ".scissorshouse") {
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();

  return "-1"

  }
  else if(div === ".spockhouse")
  {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();

    return "1";
  }

  else{
    return 0;
  }
}

function wonsicssors(div)
{
  if(div === ".lizardhouse")
  {
    $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";
  }

  else if(div ===".paperhouse"){

  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";


} else if(div ===".rockhouse") {
$(".dothouse1").delay(3000).fadeIn();
$(".dothouse2").delay(3000).fadeIn();
$(".dothouse3").delay(3000).fadeIn();

return "-1"

}
else if(div === ".spockhouse")
{
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();

  return "-1"

}
else{
  return 0;
}
}

function wonrock(div)
{
  if(div === ".lizardhouse")
  {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();

    return "1";
  }

  else if(div ===".scissorshouse"){

  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";


} else if (div ===".spockhouse") {
$(".dothouse1").delay(3000).fadeIn();
$(".dothouse2").delay(3000).fadeIn();
$(".dothouse3").delay(3000).fadeIn();

return "-1"

}
else if(div === ".paperhouse")
{
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();

  return "-1"
}
else{
  return 0;
}
}

function wonspock(div)
{
  if(div === ".rockhouse")
  {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();

    return "1";
  }

  else if(div ===".scissorshouse"){

  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";


} else if(div ===".paperhouse" ) {
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();

  return "-1"

}
else if(div === ".lizardhouse")
{
  $(".dothouse1").delay(3000).fadeIn();
  $(".dothouse2").delay(3000).fadeIn();
  $(".dothouse3").delay(3000).fadeIn();
  return "-1";
}
else {
  return 0;
}
}

function wonlizard(div)
{
  if(div === ".rockhouse")
  {
    $(".dothouse1").delay(3000).fadeIn();
    $(".dothouse2").delay(3000).fadeIn();
    $(".dothouse3").delay(3000).fadeIn();

    return "-1"
  }

  else if(div ===".scissorshouse"){

    $(".dothouse1").delay(3000).fadeIn();
    $(".dothouse2").delay(3000).fadeIn();
    $(".dothouse3").delay(3000).fadeIn();

    return "-1"


} else if(div ===".paperhouse" ) {
  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";

}
else if(div ===".spockhouse")
{
  $(".dotyou1").delay(3000).fadeIn();
  $(".dotyou2").delay(3000).fadeIn();
  $(".dotyou3").delay(3000).fadeIn();

  return "1";
}
else{
  return 0;
}
}
