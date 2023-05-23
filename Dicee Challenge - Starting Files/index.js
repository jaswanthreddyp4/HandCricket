var random1=Math.floor(Math.random()*6)+1;
var randomDice1Image="images/"+random1+".jpg";//images from dice 1 to dice 6

var random2=Math.floor(Math.random()*6)+1;
var randomDice2Image="images/"+random2+".jpg";//images from dice 1 to dice 6


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1Image);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2Image);


if(random1>random2){
    document.querySelector("h1").innerHTML="🏆player 1 wins!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="🏆player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw , betterLuck this time😁";
}