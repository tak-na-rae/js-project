//비쥬얼
function videoResize(){
  let winW = window.innerWidth;
  let winH = window.innerHeight;
  let vidW = document.getElementById("mainVideo").clientWidth;
  let vidH = document.getElementById("mainVideo").clientHeight;
  console.log(winW, winH, vidW, vidH);

  document.querySelector(".m-video").style.width = "100%";
  document.querySelector(".m-video").style.height =  `${winH}px`;

  if(winW > vidW){
    document.getElementById("mainVideo").style.width = `${winW}px`;
    document.getElementById("mainVideo").style.height = "auto";
  }
  if(winH > vidH){
    document.getElementById("mainVideo").style.width = "auto";
    document.getElementById("mainVideo").style.height = `${winH}px`;
  }

}
videoResize();
window.addEventListener("resize", videoResize);


let videoPlay = "on";
let soundMuted = "off";

let mainVideo = document.getElementById("mainVideo");
mainVideo.autoplay = true;
mainVideo.loop = 0;
mainVideo.muted = true;

//재생
document.querySelector(".pauseIcon").addEventListener("click", function(){
  if(videoPlay === "on"){
    mainVideo.pause();
    document.querySelector(".pauseIcon i").className = "fas fa-play";
    videoPlay = "off";
  } else{
    mainVideo.play();
    document.querySelector(".pauseIcon i").className = "fas fa-pause";
    videoPlay = "on";
  }
})

//음소거
document.querySelector(".mutedIcon").addEventListener("click", function(){
  if(soundMuted === "off"){
    mainVideo.muted = false;
    document.querySelector(".mutedIcon i").className = "fas fa-volume-up";
    soundMuted = "on";
  } else{
    mainVideo.muted = true;
    document.querySelector(".mutedIcon i").className = "fas fa-volume-mute";
    soundMuted = "off";
  }
})

//키보드제어
document.addEventListener("keypress", function(e){
  if(e.keyCode === 32){
    e.preventDefault();
    if(videoPlay === "on"){
      mainVideo.pause();
      document.querySelector(".pauseIcon i").className = "fas fa-play";
      videoPlay = "off";
    } else{
      mainVideo.play();
      document.querySelector(".pauseIcon i").className = "fas fa-pause";
      videoPlay = "on";
    } 
  } else if(e.keyCode === 13){
    e.preventDefault();
    if(soundMuted === "off"){
      mainVideo.muted = false;
      document.querySelector(".mutedIcon i").className = "fas fa-volume-up";
      soundMuted = "on";
    } else{
      mainVideo.muted = true;
      document.querySelector(".mutedIcon i").className = "fas fa-volume-mute";
      soundMuted = "off";
    }
  }
})

//비디오 다시보기 버튼
let setId = setInterval(()=>{
  if(mainVideo.ended){
    videoPlay = "off";
    document.querySelector(".m-again").style.display = "block";
    document.querySelector(".pauseIcon i").className = "fas fa-pause";
    clearInterval(setId);
  }
},100)

//비디오 리플레이
document.querySelector(".m-again").addEventListener("click", function(){
  mainVideo.play();
  document.querySelector(".pauseIcon i").className = "fas fa-pause";
  videoPlay = "on";
  this.style.display = "none";
})

//비디오 끝난 후 스크롤 이동
let nextTop = document.querySelector("#section2").offsetTop - 80;
document.querySelector(".nextIcon").addEventListener("click", ()=>{
  window.scrollTo({top: nextTop, behavior:"smooth"}); 
})








