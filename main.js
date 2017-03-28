function controles(option){
 switch(option) {
    case 1:
    document.getElementById("myAudio").play()
    break;
    case 2:
    document.getElementById("myAudio").load()
    break;
    case 3:
    document.getElementById("myAudio").pause()
    break;
    case 4:
    document.getElementById("myAudio").volume+=0.1
    break;
    case 5:
    document.getElementById("myAudio").volume-=0.1
    break;
    case 6:
    document.getElementById("myAudio").currentTime-= 30.0
    break;
    case 7:
    document.getElementById("myAudio").currentTime+= 30.0
    break;
 }  
} 
   var audio =document.getElementById("myAudio");
    audio.ontimeupdate = function() {
    var rango = document.getElementById("progreso");
    rango.value = audio.currentTime;
};

 
 
 