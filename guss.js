const words=['apple','mango','watermelon','capsicum','blueberry','grapes','pineapple'];
targetText=words[Math.floor(Math.random()*words.length)];
//console.log(targetText);
function displaytext(targetText){
      targetText=targetText.split("");
    textln=targetText.length-1;
    for(var i=0;i<=textln;i++){
        temp=targetText[i];
    randIndex=Math.floor(Math.random()*textln);
        targetText[i]=targetText[randIndex];
        targetText[randIndex]=temp;

}
targetText=targetText.join('');
document.getElementById('displayedText').innerHTML=targetText;
}

function checkText(){
  var guess=guessInput.value.toLowerCase();
  if(guess==targetText){
    message.innerHTML='Congratulation! You Guess the Word';
    message.style.color='green';
 }
 else{
    message.innerHTML='Sorry! wrong Guess Plz try again';
    message.style.color='red';
 }
}

displaytext(targetText);