let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__item_type_name')
let jobInput = formElement.querySelector('.popup__item_type_description')
let saveButton = formElement.querySelector('.popup__save-button')
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value
    closePopup()
}
popupOpenButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup); 

formElement.addEventListener('submit', formSubmitHandler);