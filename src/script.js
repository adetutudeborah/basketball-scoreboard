let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let homeTeamBadge = document.getElementsByClassName("home-badge");
let guestTeamBadge = document.getElementsByClassName("guest-badge");

let home = 0;
let guest = 0;

// Home Increment function
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

 // Guest Increment function
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

  // Reset function 

  function resetScore(){
    home = 0;
    guest = 0;
    homeScore.textContent = home 
    guestScore.textContent = guest

  }

  // Game Badge 

function gameBadge(home, guest) {
   if (home > guest) {
      homeTeamBadge.textContent = "WINNER";
      guestTeamBadge.style.display = none;

   } else if (home < guest) {
      guestTeamBadge.textContent = "WINNER";
      homeTeamBadge.style.display = none;

   } else {
      homeTeamBadge.textContent = "DRAW";
      guestTeamBadge.textContent = "DRAW";
   }
}

gameBadge(home, guest);