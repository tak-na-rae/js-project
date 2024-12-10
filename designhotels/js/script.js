// const appBtn = $(".header-appbar-wrap");
// const mobileMenu = $(".mobile-menu");
// const mobileMenuBar = $("#header");
// const closeBtn = $(".appbarCloseBtn");

// appBtn.on({click:function(){
//   mobileMenu.css("display","block").stop().animate({left:0},500);
//   mobileMenuBar.stop().animate({left:"-100%"},500);
// }})

// closeBtn.on({click:function(){
//   mobileMenu.stop().animate({left:"-100%"},500, function(){
//     mobileMenu.css("display","none");
//   });
//   mobileMenuBar.stop().animate({left:0},500);
// }})

const appBtn = document.querySelector(".header-appbar-wrap");
const mobileMenuBar = document.querySelector("#header");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".appbarCloseBtn");

appBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  mobileMenu.animate([{ left: "-100%" }, { left: "0" }], {
    duration: 500,
    easing: "ease-in-out",
    fill: "forwards",
  });
  mobileMenuBar.style.left = "100%";
});

closeBtn.addEventListener("click", () => {
  const animation = mobileMenu.animate([{ left: "0" }, { left: "-100%" }], {
    duration: 500,
    easing: "ease-in-out",
    fill: "forwards",
  });
  animation.finished.then(()=>{
    mobileMenu.style.display = "none";
  })
  mobileMenuBar.style.left = "0%";
});

//section3 이미지 마우스
const trandingWrap = document.querySelector(".tranding-wrap");
let trandingOffset = trandingWrap.getBoundingClientRect().left;
trandingWrap.addEventListener("mousemove", (e)=>{
  if(e.pageX >= window.innerWidth - 100){
    return false;
  } else{
    trandingWrap.style.left = -(e.pageX - trandingOffset) + "px";
  }
})

