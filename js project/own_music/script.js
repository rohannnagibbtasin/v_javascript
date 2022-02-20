let pre = document.getElementById("pre");
let play = document.getElementById("play");
let next = document.getElementById("next");
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let image = document.getElementById("image");
let container = document.getElementById("mul");
let playIcon = document.getElementById("play-icon");
let progress = document.getElementById("progress");
let progressContainer = document.getElementById("progress-bar");

let songs = ['hey','summer','ukulele'];
let songIndex = 1;

function loadSong(song){
    title.innerHTML = song;
    image.src = `./images/${song}.jpg`;
    audio.src = `./music/${song}.mp3`;
}
loadSong(songs[songIndex]);

play.addEventListener('click',()=>{
    const isPlaying = container.classList.contains('play');
    if(isPlaying){
        pasuseSong();
    }else{
        playSong();
    }
});
function playSong(){
    container.classList.add('play');
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    audio.play()
}
function pasuseSong(){
    container.classList.remove('play');
    playIcon.classList.add('fa-play');
    playIcon.classList.remove('fa-pause');
    audio.pause();
}

pre.addEventListener('click',()=>{
    songIndex--;
    if(songIndex<0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});
next.addEventListener('click',nextSong);

function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
audio.addEventListener('ended',nextSong);
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