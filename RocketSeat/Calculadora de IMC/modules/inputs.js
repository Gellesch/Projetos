import * as Notification from './errors.js'

const Inputs = {
  weight: document.querySelector('#weight-input'),
  height: document.querySelector('#height-input')
}

Inputs.weight.addEventListener('input', () => {
  const errorIndicator = validateWeightInput()

  if (errorIndicator != '0,0,0') {
    Notification.showError(errorIndicator)
    console.log(errorIndicator);
  } else {
    Notification.disableErrors()
  }
})

Inputs.height.addEventListener('input', () => {
  const errorIndicator = validateHeightInput()

  if (errorIndicator != '0,0,0') {
    Notification.showError(errorIndicator)
  } else {
    Notification.disableErrors()
  }
})

function validateInput() {
  let combinationErrors = []

  if (Number(Inputs.weight.value) > 0 && Inputs.weight.value != '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Number(Inputs.height.value) > 0 && Inputs.height.value != '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Inputs.weight.validity.valid || Inputs.height.validity.valid) {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  return combinationErrors.toString()
}

function validateWeightInput() {
  let combinationErrors = []

  if (Number(Inputs.weight.value) > 0 || Inputs.weight.value == '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Number(Inputs.height.value) > 0 || Inputs.height.value == '') {
    combinationErrors.push('0')
  } else if (Number(Inputs.height.value) === 0) {
    combinationErrors.push('1')
  }

  if (Inputs.weight.validity.valid) {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  return combinationErrors.toString()
}

function validateHeightInput() {
  let combinationErrors = []

  if (Number(Inputs.weight.value) > 0 || Inputs.weight.value == '') {
    combinationErrors.push('0')
  } else if (Number(Inputs.weight.value) === 0) {
    combinationErrors.push('1')
  }

  if (Number(Inputs.height.value) > 0 || Inputs.height.value == '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Inputs.height.validity.valid) {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  return combinationErrors.toString()
}

export { Inputs, validateInput }