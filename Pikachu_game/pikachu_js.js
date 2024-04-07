let cellWidth = 50;
let cellHeight = 50;
let gameWidth = 12;
let gameHeight = 12;
let shuffleTimes = [25, 20, 18, 15, 12, 10]
let shuffleIndex
let timeDuration = [5000, 4500, 4000, 3500, 3000, 2500]
let timeIndex
let totalCells = gameHeight * gameWidth;
var DONE = false
const cell_images = [
    "image/pokemon-1.jpg",
    "image/pokemon-2.jpg",
    "image/pokemon-3.jpg",
    "image/pokemon-4.jpg",
    "image/pokemon-5.jpg",
    "image/pokemon-6.jpg",
    "image/pokemon-7.jpg",
    "image/pokemon-8.jpg",
    "image/pokemon-9.jpg",
    "image/pokemon-11.jpg",
    "image/pokemon-12.jpg",
    "image/pokemon-13.jpg",
    "image/pokemon-14.jpg",
    "image/pokemon-15.jpg",
    "image/pokemon-16.jpg",
    "image/pokemon-17.jpg",
    "image/pokemon-18.jpg",
    "image/pokemon-19.jpg",
    "image/pokemon-20.jpg",
    "image/pokemon-21.jpg",
    "image/pokemon-22.jpg",
    "image/pokemon-23.jpg",
    "image/pokemon-24.jpg",
    "image/pokemon-25.jpg",
    "image/pokemon-26.jpg",
    "image/pokemon-27.jpg",
    "image/pokemon-28.jpg",
    "image/pokemon-29.jpg",
    "image/pokemon-30.jpg",
    "image/pokemon-30.jpg",
    "image/pokemon-30.jpg",
    "image/pokemon-31.jpg",
    "image/pokemon-32.jpg",
    "image/pokemon-33.jpg",
    "image/pokemon-34.jpg",
    "image/pokemon-35.jpg",
    "image/pokemon-36.jpg",
    "image/pokemon-37.jpg",
    "image/pokemon-38.jpg",
    "image/pokemon-39.jpg",
    "image/pokemon-40.jpg",
    "image/pokemon-41.jpg",
    "image/pokemon-42.jpg",
    "image/pokemon-43.jpg",
    "image/pokemon-44.jpg",
    "image/pokemon-45.jpg",
    "image/pokemon-46.jpg",
    "image/pokemon-47.jpg",
    "image/pokemon-48.jpg",
    "image/pokemon-49.jpg",
    "image/pokemon-50.jpg",
    "image/pokemon-51.jpg",
    "image/pokemon-52.jpg",
    "image/pokemon-53.jpg",
    "image/pokemon-54.jpg",
    "image/pokemon-55.jpg",
    "image/pokemon-56.jpg",
    "image/pokemon-57.jpg",
    "image/pokemon-58.jpg",
    "image/pokemon-59.jpg",
    "image/pokemon-60.jpg"
];
let wrapper = document.getElementById("wrapper")
let introFrame = document.getElementById("introFrame")
let gameFrame = document.getElementById("gameFrame")
let score_label = document.getElementById("score")
let score_title = document.getElementById("score_title")

let level_select = document.getElementById("levels")
let level = document.getElementById("level_index")
let shuffle = document.getElementById("shuffle_index")

let content = document.getElementById("content")
let start_button = document.getElementById("startButton")

let end_frame = document.getElementById("end_game")
let end_score = document.getElementById("score_end")
let return_button = document.getElementById("backToMenu")
let retry_button = document.getElementById("tryAgain")
let level_retry
var cells = []
const themeAudio = new Audio()
themeAudio.src = "audio/theme.mp3"
themeAudio.volume = 0.8

const scoreAudio = new Audio()
scoreAudio.src = "audio/connect (1).mp3"
scoreAudio.volume = 0.8
return_button.onclick = function (){
    returnToMenuButton()
}

const returnToMenuButton = () => {
    location.reload() // reload the current page
}

start_button.onclick = function () {
    init()
    introFrame.style.display = "none"
    gameFrame.style.display = "block"
    timer_bar.style.display = "inline-flex"
    labels.style.display = "inline-flex"
    score_label.style.display = "block"
    content.style.display = "flex"
    clearInterval(countDown)
    timer.style.width = "300px"
    interval = 100
    countDown = null
    levelController()
    shuffle.innerHTML = shuffleIndex
    themeAudio.play()
    level.innerHTML = level_select.options[level_select.selectedIndex].text
}
