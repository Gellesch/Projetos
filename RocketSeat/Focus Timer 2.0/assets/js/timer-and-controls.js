export function TimerAndControls ({ minutesDisplay, secondsDisplay, stopAudioPlaying, timeEnd }) {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  let timerTimeout

  function countdown() {  
    timerTimeout = setTimeout(() => {
      let newSeconds = Number(secondsDisplay.textContent)
      let newMinutes = Number(minutesDisplay.textContent)
  
      if(newSeconds <=0 && newMinutes <=0) {
        resetCountdownAndSound()
        timeEnd()
        return
      }
      
      if(newSeconds <= 0) {
        newSeconds = 60
        newMinutes--
      }
      
      newSeconds -= 1
      updateDisplay(newMinutes, newSeconds)
      
      countdown()
    }, 1000);
  
  }

  function resetCountdownAndSound() {
    clearTimeout(timerTimeout)
    updateDisplay(minutes, seconds)
    stopAudioPlaying()
  }

  function addMinutes() {
    let currentSeconds = secondsDisplay.textContent
    let currentMinutes = Number(minutesDisplay.textContent)
    let newMinutes = currentMinutes + 5
    updateDisplay(newMinutes, currentSeconds)
  }

  function removeMinutes() {
    let currentSeconds = secondsDisplay.textContent
    let currentMinutes = Number(minutesDisplay.textContent)
    let newMinutes = currentMinutes - 5
    if(currentMinutes > 5) {
      newMinutes = currentMinutes - 5
      updateDisplay(newMinutes, currentSeconds)
    }
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  return {
    countdown,
    resetCountdownAndSound,
    addMinutes,
    removeMinutes
  }
}










