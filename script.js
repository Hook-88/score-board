//get homescore
let homeScoreElement = document.getElementById('home-score')
let homeScore = 0
let homeScoreDisplayEl = document.getElementById('home-score-display')
//get guestscore
let guestScoreElement = document.getElementById('guest-score')
let guestScore = 0
let guestScoreDisplayEl = document.getElementById('guest-score-display')

//function to update scores
function add1(team) {
  if (team === 'HOME') {
    homeScore += 1;
    homeScoreElement.textContent = homeScore
    handleHighLight()
  } else {
    guestScore += 1;
    guestScoreElement.textContent = guestScore
    handleHighLight()
  }
}

function add2(team) {
  if (team === 'HOME') {
    homeScore += 2;
    homeScoreElement.textContent = homeScore
    handleHighLight()
  } else {
    guestScore += 2;
    guestScoreElement.textContent = guestScore
    handleHighLight()
  }
}

function add3(team) {
  if (team === 'HOME') {
    homeScore += 3;
    homeScoreElement.textContent = homeScore
    handleHighLight()
  } else {
    guestScore += 3;
    guestScoreElement.textContent = guestScore
    handleHighLight()
  }
}
//function for reset-btn
function resetGame() {
  homeScore = 0
  homeScoreElement.textContent = homeScore
  guestScore = 0
  guestScoreElement.textContent = guestScore
  handleHighLight()
}
//check if match is equal
function sameScore() {
  return homeScore === guestScore
}
// check if home is leader
function homeIsLeader() {
  return homeScore > guestScore
}

function hasHighlightClass(el) {
  return el.classList.contains('leader-highlight')
}

function handleHighLight() {
  if (sameScore()) {
    console.log('same score')
    homeScoreDisplayEl.classList.remove('leader-highlight')
    guestScoreDisplayEl.classList.remove('leader-highlight')
  } else {
    if (homeIsLeader()) {
      console.log('Home is in the lead')
      homeScoreDisplayEl.classList.add('leader-highlight')
      guestScoreDisplayEl.classList.remove('leader-highlight')
    } else {
      console.log('Guest is in the lead')
      homeScoreDisplayEl.classList.remove('leader-highlight')
      guestScoreDisplayEl.classList.add('leader-highlight')
    }
  }
}


