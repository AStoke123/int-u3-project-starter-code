/* Image Storage
title: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws30CXtu1XIV-wgUV4NwnT5IEip-bMiy7gMGnpcUGL0DKGffYeZCyP5nBmuBik3vKiQE&usqp=CAU
chef: https://i.pinimg.com/474x/3c/35/36/3c3536050f0e6349f36b4617a924e8de.jpg
base walt: https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/250px-Walter_White_S5B.png
 explosion: https://media.tenor.com/nANqORN7qhQAAAAM/explosion-explode.gif
 this is art yo : https://64.media.tumblr.com/7e12e1a961c94e8c94dd5d11180a4c99/25e3ec6958f00365-d8/s540x810/6b7fbd6e45e42319b08785c6efdcdabf8697b2a5.gifv

*/
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionThree = document.querySelector(".option-three");
let mainText = document.querySelector(".main-text");
let mainImg = document.querySelector(".story-opening img")
let sProgress =  0;
let rv = true;
let restart = false;

optionThree.addEventListener("click",function(){
  if(restart === true){
    sProgress =0;
    restart = false;
    optionThree.innerHTML = "continue";
      }
  if (sProgress === 0) {
    mainText.textContent = "You are Walter White, a famous chef who's cooking was so good it was made illegal all over the US. But now you are out of money and have cancer so you and your partner must turn to a life of crime doing what you know best.";
    mainImg.src = "https://i.pinimg.com/474x/3c/35/36/3c3536050f0e6349f36b4617a924e8de.jpg";
  } else if (sProgress === 1) {
    mainText.textContent = "Do you  want to cook for yourseleves or under someone else";
    mainImg.src = "https://i.pinimg.com/736x/3d/e0/6f/3de06f8950f474cd775a0b03aac7e3f7.jpg";
    optionOne.style.display = "block";
    optionOne.innerHTML = "On your own"
    optionTwo.style.display = "block";
    optionTwo.innerHTML = " For a boss";
    optionThree.style.display = "none";
  }
    else if (sProgress ===4 && rv === true ){
        mainText.textContent = "Great now all you have to do is pick someone to sell it to"
        mainImg.src = "https://i.redd.it/9afzt4xnidq41.jpg";
        optionOne.style.display = "block";
    optionOne.innerHTML = "Left"
    optionTwo.style.display = "block";
    optionTwo.innerHTML = " Right";
    optionThree.style.display = "none";
    }
  
  sProgress++;
});
optionOne.addEventListener("click", function(){
    if(sProgress === 2){
     mainText.textContent = "You start cooking, what do you want to use while cooking?"
     optionOne.innerHTML = "Sodium Bicarbonate";
     optionTwo.innerHTML = "Nitrogen Triiodide";

    }
    if(sProgress ===3){
     mainText.textContent = "Good job, you used baking soda and finished your meal";
     mainImg.src = "https://64.media.tumblr.com/7e12e1a961c94e8c94dd5d11180a4c99/25e3ec6958f00365-d8/s540x810/6b7fbd6e45e42319b08785c6efdcdabf8697b2a5.gifv"
     optionThree.style.display = "block";
        optionThree.innerHTML = "continue";
        optionOne.style.display = "none";
        optionTwo.style.display = "none";
    }
 sProgress++;
});

optionTwo.addEventListener("click", function(){
    if(sProgress === 3){
        mainImg.src = "https://media.tenor.com/nANqORN7qhQAAAAM/explosion-explode.gif";
        mainText.textContent = "wrong one, you blew up :(";
        restart = true;
        optionThree.style.display = "block";
        optionThree.innerHTML = "Restart";
        optionOne.style.display = "none";
        optionTwo.style.display = "none";
    }
    sProgress++;
})