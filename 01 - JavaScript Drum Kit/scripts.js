
function playAudio(e){
    //get the audio element to play sound
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    //get the key to show transition
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
}

//listen for key event to play audio
window.addEventListener('keydown',playAudio);

function removeTransition(e){
    if(e.propertyName !== "transform") return; //skip if the element is not transformed
    e.currentTarget.classList.remove("playing"); 
}

//listen for transitionend event to remove the transition from the keys
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));