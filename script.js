$(".paperbut").click(function() {
    $(".img-fluid").hide();
    $(".paperbut").hide();
    $(".sicbut").hide();
    $(".rockbut").hide();
    $(".pick").show();

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


    won(div);

    $(".headyou").delay(500).fadeIn();

    $(".headhouse").delay(500).fadeIn();


    console.log(div);

  }

)

$(".play").click(function() {
  $(".img-fluid").show();
  $(".paperbut").show();
  $(".sicbut").show();
  $(".rockbut").show();
  $(".scissorshouse").hide();
  $(".paperhouse").hide();
  $(".rockhouse").hide();
  $(".pick").hide();
  $(".dot1").hide();
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

  } else if (div === ".rockhouse") {
    $(".dotyou1").delay(3000).fadeIn();
    $(".dotyou2").delay(3000).fadeIn();
    $(".dotyou3").delay(3000).fadeIn();


  } else {




  $(".dothouse1").delay(3000).fadeIn();



  $(".dothouse2").delay(3000).fadeIn();


  $(".dothouse3").delay(3000).fadeIn();


  }
}
