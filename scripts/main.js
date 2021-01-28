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
    popup.classList.toggle('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value
    openPopup()
}
popupOpenButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', openPopup); 

formElement.addEventListener('submit', formSubmitHandler);