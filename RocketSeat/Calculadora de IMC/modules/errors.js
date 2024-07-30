const Errors = {
  notification: document.querySelector('.notification'),
  error_1: document.querySelector('#error-1'),
  error_2: document.querySelector('#error-2'),
  error_3: document.querySelector('#error-3'),
  error_4: document.querySelector('#error-4'),

  open() {
    Errors.notification.classList.add('error')
  },
  close() {
    Errors.notification.classList.remove('error')
  }
}

function showError(errorIndicator) {
  disableErrors()

  Errors.open()

  if (errorIndicator == '1,0,0') {
    Errors.error_1.classList.remove('hide')
    console.log('Deu erro 1');
  }
  else if (errorIndicator == '0,1,0') {
    Errors.error_2.classList.remove('hide')
    console.log('Deu erro 2');
  }
  else if (errorIndicator == '1,1,0') {
    Errors.error_3.classList.remove('hide')
    console.log('Deu erro 3');
  }
  else {
    Errors.error_4.classList.remove('hide')
    console.log('Deu erro 4');
    console.log('Codigo: ' + errorIndicator);
  }
}

function disableErrors() {
  Errors.close()
  Errors.error_1.classList.add('hide')
  Errors.error_2.classList.add('hide')
  Errors.error_3.classList.add('hide')
  Errors.error_4.classList.add('hide')
}

export { Errors, showError, disableErrors }