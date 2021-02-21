const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const toggleButtonState = (inputList, buttonElement) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  
    if (hasNotValidInput) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add("popup__save-button_inactive");
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove("popup__save-button_inactive");
    }
  };

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement)
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(setEventListeners)
}

enableValidation();