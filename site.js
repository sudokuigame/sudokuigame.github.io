document.getElementById("download").addEventListener("click", function(){
  let a = document.querySelectorAll("*")
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundImage = "url(gif.gif)"
    
    
  }
  for (let i = 0; i < 8; i++) {
    PlaySound()
  }
  document.documentElement.requestFullscreen()
}
)

PlaySound = function () {
    var audio = new Audio('cavalo.mp3');
    audio.loop = true
    audio.play(); 
}