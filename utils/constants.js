export const popups = document.querySelectorAll('.popup');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupOpenEdit = document.querySelector('.profile__edit-button');
export const popupOpenAdd = document.querySelector('.profile__add-button');
export const formElementEdit = document.querySelector('[name="form-edit"]');
export const formElementAdd = document.querySelector('[name="form-add"]');
export const nameInput = document.querySelector('.popup__item_type_name');
export const jobInput = document.querySelector('.popup__item_type_description');
export const titleInput = document.querySelector('.popup__item_type_title');
export const linkInput = document.querySelector('.popup__item_type_link');
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__description');
export const cardEl = document.querySelector('.elements');
export const popupImage = document.querySelector('.popup__image');
export const popupPlace = document.querySelector('.popup__place');
export const initialCards = [
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
export const valid = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};