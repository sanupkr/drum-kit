


function add_animation(key)
{

  var current_key = document.querySelector("."+key);
  current_key.classList.add("pressed");

  setTimeout(function(){
    current_key.classList.remove("pressed");
  },100);
}


function play_sound(key)
{


  switch(key)
  {
    case "w" :
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a" :
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s" :
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d" :
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j" :
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "k" :
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "l" :
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

  }
}

document.addEventListener("keypress",function(event){
  play_sound(event.key);
  add_animation(event.key);
});


for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var btn_clicked = this.innerText;

  play_sound(btn_clicked);
  add_animation(btn_clicked);
  });


}
