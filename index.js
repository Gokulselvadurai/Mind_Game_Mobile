var level=1;
var userclicked=[];
var sequence=[];
$(".btn").click(function(){
    if ( level == 1 ){
      var song= new Audio("music/click.wav");
      song.play();
      $(this).css("visibility","hidden");
      $(this).css("margin","0px");
      setTimeout(function() {
        nextlevel();
      },1000);
    }
})
$(".bx").click(function(event){
  var number;
  var touched=event.target.classList[0];
  for(var i=1;i<=4;i++){
    if (touched=="box"+i){
      number=i;
      break;
    }
  }
  userclicked.push(number);
  music(number);
  animation(number);
  check(userclicked.length-1);
})
function check(turn){
  if(userclicked[turn]==sequence[turn]){
    if(userclicked.length==sequence.length){
      setTimeout(function() {
        nextlevel()
      },1000);
    }
  }
  else{
    $("body").addClass("wrongpress");
    var song= new Audio("music/wrong.mp3");
    song.play();
    $(".inst").html("Game Over.🍂 Press button start to restart.");
    setTimeout(function() {
      $("body").removeClass("wrongpress");
    },100);
    level=1;
    sequence=[];
    $(".btn").css("visibility","visible");
    $(".btn").css("margin","30px");
  }
}
function nextlevel() {
  userclicked=[];
  var tmp = Math.floor((Math.random()*4)+1);
  sequence.push(tmp);
  $(".inst").html("level "+level);
  music(tmp);
  animation(tmp);
  $(".box"+tmp).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
}
function music(i){
  var music= new Audio("music/"+i+".mp3");
  music.play();
}
function animation(i){
  $(".box"+i).addClass("pressed");
  setTimeout(function () {
  $(".box"+i).removeClass("pressed");}, 100);
}
