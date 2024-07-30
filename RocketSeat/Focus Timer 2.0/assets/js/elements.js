const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const btnPlay = document.querySelector('.btn-play')
const btnStop = document.querySelector('.btn-stop')
const btnAddTime = document.querySelector('.btn-add-time')
const btnRemoveTime = document.querySelector('.btn-remove-time')

const btnForest = document.querySelector('.btn-forest')
const btnRain = document.querySelector('.btn-rain')
const btnCoffeeShop = document.querySelector('.btn-coffee-shop')
const btnFireplace = document.querySelector('.btn-fireplace')

const forestVolume = document.querySelector('#volume-forest')
const rainVolume = document.querySelector('#volume-rain')
const coffeeShopVolume = document.querySelector('#volume-coffee-shop')
const fireplaceVolume = document.querySelector('#volume-fireplace')

const html = document.documentElement
const btnSun = document.querySelector('#sun')
const btnMoon = document.querySelector('#moon')
const toggleContainer = document.querySelector('.toggle-mode-container')

export {
  minutesDisplay,
  secondsDisplay,
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
}