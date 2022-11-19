const game = function () {
  let pscore = 0;
  let cscore = 0;
  const sg = function () {
    const intro = document.querySelector(".intro");
    const button = document.querySelector(".intro button");
    const match = document.querySelector(".match");
    button.addEventListener("click", function () {
      intro.classList.add("fadeout");
      match.classList.add("fadein");
    });
  };
  const sm = function () {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hand = document.querySelectorAll(".hands img");
    hand.forEach(function (x) {
      x.addEventListener("animationend", function () {
        this.style.animation = "";
      
      });
    });
    //computer option
    const coptions = ["rock", "paper", "scissor", "rock", "paper"];
    options.forEach(function (mem) {
      mem.addEventListener("click", function () {
        // console.log(this);
        const cind = Math.floor(Math.random() * 3);
        const choice = coptions[cind];
        const pic=this.textContent;
        
        setTimeout(function(){
          result(pic, choice);
        // console.log(this.textContent);
        playerHand.src = `./images/${pic}.png`;
        computerHand.src = `./images/${choice}.png`;
        },2000);
        playerHand.style.animation = "sp 2s ease";
        computerHand.style.animation = "cp 2s ease";
      });
    });

    // console.log(cind);
  };
  const update=function(){
    const cs=document.querySelector(".computer-score p");
    cs.textContent=cscore;
    const ps=document.querySelector(".player-score p");
    ps.textContent=pscore;
  };
  const result = function (pl, cp) {
    const winner = document.querySelector(".winner");
    if (pl === cp) {
      winner.textContent = "It is a tie";
      return;
    } else if (pl === "rock") {
      if (cp == "scissor") {
        winner.textContent = "Player wins!";
        pscore++;
        update();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cscore++;
        update();
        return;
      }
    } else if (pl === "paper") {
      if (cp === "scissor") {
        winner.textContent = "Computer wins!";
        cscore++;
        update();
        return;
      } else {
        winner.textContent = "Player wins!";
        pscore++;
        update();
        return;
      }
    } else if (pl === "scissor") {
      if (cp == "paper") {
        winner.textContent = "Player wins!";
        pscore++;
        update();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cscore++;
        update();
        return;
      }
    }
  };
  sg();
  sm();
};
game();
