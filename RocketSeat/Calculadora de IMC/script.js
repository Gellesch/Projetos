import { Inputs, validateInput } from './modules/inputs.js'
import { Modal } from './modules/modal.js'
import * as Notification from './modules/errors.js'
import calculateIMC from './utils/calculateIMC.js'


const form = document.querySelector('form')

form.onsubmit = () => {
  event.preventDefault()

  let errorIndicator = validateInput()

  Notification.disableErrors()

  if (errorIndicator != '0,0,0') {
    Notification.showError(errorIndicator)
  } else {
    displayResultMessage()
  }
}

function displayResultMessage() {
  Modal.imcValue.innerHTML = calculateIMC(Number(Inputs.weight.value), Number(Inputs.height.value))
  Modal.open()
}