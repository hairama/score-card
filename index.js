/*create variables to display homeScore and guestScore numbers & initialize at 0 */
let homeScore = 0
let guestScore = 0

/*create variables to update the HTML element text */
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

/*create a function to update the score
Use arguments to take a value from each button so I don't have to build 6 functions */
function updateScore(team, plusPoints) {
    /*update score and element display for the appropriate team */
    if(team == 'home') {
        homeScore += plusPoints
        homeScoreEl.textContent = homeScore    
    } else if(team == 'guest') {
        guestScore += plusPoints
        guestScoreEl.textContent = guestScore
    }
    leader()
}

/*reset the scores and element displays to 0 */
function resetScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    leader()
}

/*highlight the score elecment of the side with more points */
function leader() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add('winner');
        guestScoreEl.classList.remove('winner');
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add('winner');
        homeScoreEl.classList.remove('winner');
    } else {
        guestScoreEl.classList.remove('winner');
        homeScoreEl.classList.remove('winner');
    }
}