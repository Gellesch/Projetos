import { TimerAndControls } from './timer-and-controls.js'
import { Sounds } from './sounds.js'
import { Events } from './events.js'

import {
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace
} from './elements.js'

const sounds = Sounds({btnForest, btnRain, btnCoffeeShop, btnFireplace})
const timerAndControls = TimerAndControls({minutesDisplay, secondsDisplay, stopAudioPlaying: sounds.stopAudioPlaying, timeEnd: sounds.timeEnd})

Events(sounds, timerAndControls)



