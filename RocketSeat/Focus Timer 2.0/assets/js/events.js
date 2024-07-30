import {
  btnPlay,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace, 
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  fireplaceVolume,
  html,
  btnSun,
  btnMoon,
  toggleContainer
} from './elements.js'

export function Events (sounds, timerAndControls) {
  btnForest.addEventListener('click', sounds.playForestAudio)
  btnRain.addEventListener('click', sounds.playRainAudio)
  btnCoffeeShop.addEventListener('click', sounds.playCoffeeShopAudio)
  btnFireplace.addEventListener('click', sounds.playFireplaceAudio)

  btnPlay.addEventListener('click', timerAndControls.countdown)
  btnStop.addEventListener('click', timerAndControls.resetCountdownAndSound)
  btnAddTime.addEventListener('click', timerAndControls.addMinutes)
  btnRemoveTime.addEventListener('click', timerAndControls.removeMinutes)

  forestVolume.addEventListener('change', function(e) {
    sounds.forestAudio.volume = e.currentTarget.value / 100

  })

  rainVolume.addEventListener('change', function (e) {
    sounds.rainAudio.volume = e.currentTarget.value / 100
  })

  coffeeShopVolume.addEventListener('change', function (e) {
    sounds.coffeeShopAudio.volume = e.currentTarget.value / 100
  })

  fireplaceVolume.addEventListener('change', function (e) {
    sounds.fireplaceAudio.volume = e.currentTarget.value / 100
  })

  toggleContainer.addEventListener('click', toggleMode)
  
  function toggleMode() {
    html.classList.toggle('dark-mode')
    btnSun.classList.toggle('hide')
    btnMoon.classList.toggle('hide')
  }

}

