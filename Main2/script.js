const audio = document.getElementById("audio1")
function playAudio(){
  if(audio){
    audio.currentTime = 0
    audio.play()
  }
}
const a = document.getElementById("button1")
const b = document.getElementById("button2")
const c = document.getElementById("button3")
const d = document.getElementById("button4")
const e = document.getElementById("label1")
const f = document.getElementById("label2")
const g = document.getElementById("button5")
const h = document.getElementById("button6")
let countedNum = 0
let taps = 0
let tapsEnabled = true
function updateLabel(){
  e.textContent = countedNum
}
function increaseCount(){
  countedNum++
  if(tapsEnabled){
    taps++
  }
  updateLabel()
  liveDisplay()
  if(taps === 10){
    countedNum = countedNum + 10
  }
  if(taps === 11){
    taps = 0
  }
}
function decreaseCount(){
  countedNum--
  taps--
  if(taps === -1){
    taps = 0
  }
  updateLabel()
  liveDisplay()
  if(countedNum === -1000){
    alert("You won and lost the game??? you can still continue.")
  }
}
function resetCount(){
  countedNum = 0
  taps = 0
  alert("Number has resetted and number of taps too.")
  updateLabel()
  liveDisplay()
}
function generaterandomNum(){
  countedNum = Math.floor(Math.random() * 1000) + 1
  updateLabel()
  liveDisplay()
  if(countedNum === 1000){
    alert("You generated the number 1000! lucky! you can still continue.")
  }
}
function disableTaps(){
  tapsEnabled = false
  if(tapsEnabled){
    taps++
  }
  else{
    taps = 0
    g.style.backgroundColor = "Red"
    g.textContent = "Move on to the second button to enable taps again."
  }
}
function enableTaps(){
  tapsEnabled = true
  if(tapsEnabled){
    taps = 1
    g.textContent = "Disable Tap Count?"
  }
}
function liveDisplay(){
  f.textContent = countedNum
}
a.addEventListener('click', increaseCount)
a.addEventListener('click', playAudio)
b.addEventListener('click', decreaseCount)
b.addEventListener('click', playAudio)
c.addEventListener('click', resetCount)
c.addEventListener('click', playAudio)
d.addEventListener('click', generaterandomNum)
d.addEventListener('click', playAudio)
g.addEventListener('click', disableTaps)
g.addEventListener('click', playAudio)
h.addEventListener('click', enableTaps)
h.addEventListener('click', playAudio)
alert("Welcome to my website! this website is mobile version only, you can use any high end device like PC for the worst experience, mobile version is most recommended for this website.")
g.style.backgroundColor = "Red"
h.style.backgroundColor = "Green"