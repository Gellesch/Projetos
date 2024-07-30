import { forestVolume, rainVolume,coffeeShopVolume, fireplaceVolume } from "./elements.js"

export function Sounds ({ btnForest, btnRain, btnCoffeeShop, btnFireplace }) {
  const forestAudio = new Audio('./assets/audios/forest.wav')
  const rainAudio = new Audio('./assets/audios/rain.wav')
  const coffeeShopAudio = new Audio('./assets/audios/coffee-shop.wav')
  const fireplaceAudio = new Audio('./assets/audios/fireplace.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function playForestAudio() {
    const checkActiveSound = btnForest.classList.contains('active-sound')
    if(!checkActiveSound) {
      forestVolume.value = 50
      forestAudio.volume = forestVolume.value / 100
    }

    stopAudioPlaying()
    forestAudio.play()
    forestAudio.loop = true

    btnForest.classList.add('active-sound')
    btnRain.classList.remove('active-sound')
    btnCoffeeShop.classList.remove('active-sound')
    btnFireplace.classList.remove('active-sound')
  }
  
  function playRainAudio() {
    const checkActiveSound = btnRain.classList.contains('active-sound')
    if(!checkActiveSound) {
      rainVolume.value = 50
      rainAudio.volume = rainVolume.value / 100
    }

    stopAudioPlaying()
    rainAudio.play()
    rainAudio.loop = true
  
    btnRain.classList.add('active-sound')
    btnForest.classList.remove('active-sound')
    btnCoffeeShop.classList.remove('active-sound')
    btnFireplace.classList.remove('active-sound')
  }
  
  function playCoffeeShopAudio() {
    const checkActiveSound = btnCoffeeShop.classList.contains('active-sound')
    if(!checkActiveSound) {
      coffeeShopVolume.value = 50
      coffeeShopAudio.volume = coffeeShopVolume.value / 100
    }

    stopAudioPlaying()
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true

    btnCoffeeShop.classList.add('active-sound')
    btnRain.classList.remove('active-sound')
    btnForest.classList.remove('active-sound')
    btnFireplace.classList.remove('active-sound')
  }
  
  function playFireplaceAudio() {
    const checkActiveSound = btnFireplace.classList.contains('active-sound')
    if(!checkActiveSound) {
      fireplaceVolume.value = 50
      fireplaceAudio.volume = fireplaceVolume.value / 100
    }


    stopAudioPlaying()
    fireplaceAudio.play()
    fireplaceAudio.loop = true

    btnFireplace.classList.add('active-sound')
    btnRain.classList.remove('active-sound')
    btnForest.classList.remove('active-sound')
    btnCoffeeShop.classList.remove('active-sound')
  }
  
  function stopAudioPlaying() {
    let audios = [forestAudio, rainAudio, coffeeShopAudio, fireplaceAudio]

    for (const audio of audios) {
      if (audio.play) {
        audio.pause()
        btnForest.classList.remove('active-sound')
        btnRain.classList.remove('active-sound')
        btnCoffeeShop.classList.remove('active-sound')
        btnFireplace.classList.remove('active-sound')
      }
    }

  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    fireplaceAudio,
    playForestAudio,
    playRainAudio,
    playCoffeeShopAudio,
    playFireplaceAudio,
    stopAudioPlaying,
    timeEnd
  }
}