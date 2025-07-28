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
let countedNum = 0
function updateLabel(){
  e.textContent = countedNum
}
function increaseCount(){
  countedNum++
  updateLabel()
  liveDisplay()
  if(countedNum === 1000){
    alert("Congrats, you won the game you can still continue.")
  }
}
function decreaseCount(){
  countedNum--
  updateLabel()
  liveDisplay()
  if(countedNum === -1000){
    alert("You won and lost the game??? you can still continue.")
  }
}
function resetCount(){
  countedNum = 0
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
function liveDisplay(){
  f.textContent = countedNum
}
a.addEventListener('touchstart', increaseCount)
a.addEventListener('touchstart', playAudio)
b.addEventListener('touchstart', decreaseCount)
b.addEventListener('touchstart', playAudio)
c.addEventListener('touchstart', resetCount)
c.addEventListener('touchstart', playAudio)
d.addEventListener('touchstart', generaterandomNum)
d.addEventListener('touchstart', playAudio)
alert("Welcome to my website! this website is mobile version only, you can use any high end device like PC for the worst experience, mobile version is most recommended for this website.")