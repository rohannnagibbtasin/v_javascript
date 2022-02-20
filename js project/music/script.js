const musicContainer = document.querySelector(".music-container");
const progressContainer = document.querySelector(".progress-container");
const progess = document.querySelector(".progess");
const play = document.getElementById("play")
const prev = document.getElementById("pre")
const next = document.getElementById("next")
const audio = document.getElementById("audio")
const title = document.getElementById("title")
const cover = document.getElementById("cover")
const songs=['hey','summer','ukulele']
let songIndex = 2
loadSong(songs[songIndex])
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}
play.addEventListener("click",()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pasuseSong()
    }else{
        playSong()
    }
})
function playSong(){
    musicContainer.classList.add('play')
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}
function pasuseSong(){
    musicContainer.classList.remove('play')
    play.querySelector('i.fas').classList.remove('fa-pause')
    play.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}
prev.addEventListener('click',prevSong);
next.addEventListener('click',nextSong);
function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex=songIndex.length-1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex>songs.length - 1){
        songIndex=0
    }
    loadSong(songs[songIndex])
    playSong()
}
audio.addEventListener("timeupdate",updateProgress)
function updateProgress(e){
    const {duraton,currentTime}= e.srcElement.currentTime
    const progressPercent = (currentTime/duraton)*100
    progess.style.width = `${progressPercent}`
}
progressContainer.addEventListener('click',set)
function set(e){
    const width = this.clientWidth
    const clickX =e.offsetX
    const duraton = audio.duraton
    audio.currentTime = (clickX/width)*duraton
}
audio.addEventListener('ended',nextSong)