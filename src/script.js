let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest")

let home = 0;
let guest = 0;


function plusOne() {
   home += 1
   homeScore.textContent = home
}

function plusTwo() {
    home += 2
    homeScore.textContent = home
 }

 function plusThree() {
    home += 3
    homeScore.textContent = home 
 }

 function scorePlusOne() {
    guest += 1
    guestScore.textContent = guest
 }
 
 function scorePlusTwo() {
    guest += 2
    guestScore.textContent = guest
  }
 
  function scorePlusThree() {
    guest += 3
    guestScore.textContent = guest
  }

  function resetScore(){
    home = 0;
    guest = 0;
    homeScore.textContent = home 
    guestScore.textContent = guest

  }