const playControlsPanel =  document.querySelector('.playControlsPanel');
const volumeButton = document.querySelector('.volume__button');
const volume = document.querySelector('.volume');

const observer = new MutationObserver(()=>{
  console.log(`play controls mutation observed`);
    const {display} = window.getComputedStyle(playControlsPanel);
    if(display === 'none'){
      if(volume.classList.contains('.muted')){
        console.log(`unmuting`);
        volumeButton.click();
      }
    }else{
      if(!volume.classList.contains('.muted')){
        volumeButton.click();
        console.log(`muting`);
      }
    }
});

observer.observe(playControlsPanel, {attributes: true});

function clickDismiss(){
  const dismiss = document.querySelector('.playControlsPanel__dismissButton');
  if(dismiss){
    dismiss.click();
  }
  pollForDismiss();
}

function pollForDismiss(){
  setTimeout(clickDismiss, 1000);
}

pollForDismiss();

console.log(`running soundcloud auto mute ads`);
