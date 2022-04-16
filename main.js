x = 0;
y = 0;
width=0;
height=0;
apple="";
speak_data="";
to_number="";
draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload(){
loadImage("apple.png");
apple=loadImage();
}

function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 to_number=Number(content);
if(Number.isInteger(to_number)){
  draw_apple="set";
}
else{
document.getElementById("status").innerHTML="The speech has not recognized a number";
}
}

function setup() {
  width=window.innerWidth;
  height=window.innerHeight;
  canvas= createCanvas(900,600);
  canvas.position(50,60);
}

function draw() {
if(apple=="set"){
  for (var i = 1; i <= to_number; i++){
  x = Math.floor(Math.random()*700);
  y = Math.floor (Math.random()*400);
  image (apple, x, y, 50, 50);
  }
  document.getElementById("status").innerHTML=to_number + "Apples Drawn";
  speak_data = to_number + "Apples Drawn";
  speak();
}

}

function speak(){
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  speak_data = "";
}
