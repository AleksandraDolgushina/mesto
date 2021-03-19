import Card from './Card.js'
import FormValidator from './FormValidator.js'

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupOpenEdit = document.querySelector('.profile__edit-button');
const popupOpenAdd = document.querySelector('.profile__add-button');
const formElementEdit = document.querySelector('[name="form-edit"]');
const formElementAdd = document.querySelector('[name="form-add"]');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_description');
const titleInput = document.querySelector('.popup__item_type_title');
const linkInput = document.querySelector('.popup__item_type_link');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const cardEl = document.querySelector('.elements');
const popupOpenImage = document.querySelector('.popup_open-image');
const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const valid = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const editFormValidator = new FormValidator(valid, formElementEdit);
editFormValidator.enableValidation()
const addFormValid = new FormValidator(valid, formElementAdd);
addFormValid.enableValidation()

initialCards.forEach((item) => {
  cardEl.append(createCard(item.name, item.link));
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape); 
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape); 
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function handleCardClick(name, link) {
  popupImage.src = link;
  popupPlace.textContent = name;
  openPopup(popupOpenImage);
};

function createCard(name, link) {
  return new Card(name, link, '.template', handleCardClick).generateCard();
};

function handlerAdd(evt, popup) {
  evt.preventDefault();
  cardEl.prepend(createCard(titleInput.value, linkInput.value));
  titleInput.value = '';
  linkInput.value = ''; 
  closePopup(popup);
};

function handleSubmitHandler(evt, popup) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popup);
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

popupOpenEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  editFormValidator.resetValidation()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

formElementEdit.addEventListener('submit', (evt) => {handleSubmitHandler(evt, popupEdit)});

popupOpenAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  addFormValid.resetValidation()
  titleInput.value = '';
  linkInput.value = '';
});

formElementAdd.addEventListener('submit', (evt) => {handlerAdd(evt, popupAdd)});
