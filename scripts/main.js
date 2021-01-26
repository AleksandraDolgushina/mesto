let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');

function openPopup() {
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', openPopup);

let formElement = document.querySelector('.popup__form')

let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__description')
let saveButton = formElement.querySelector('.popup__save-button')

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    let nameProfile = document.querySelector('.profile__name');
    let jobProfile = document.querySelector('.profile__description');

    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value
}
saveButton.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);