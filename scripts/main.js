import Card from './Card.js'

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

function handlerAdd(evt, popup) {
  evt.preventDefault();
  const newCard = new Card(titleInput.value, linkInput.value, '.template');
  const cardElement = newCard.generateCard();
  cardEl.prepend(cardElement);
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
      closePopup(popup)
    };
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

popupOpenEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

formElementEdit.addEventListener('submit', (evt) => {handleSubmitHandler(evt, popupEdit)});

popupOpenAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  titleInput.value = '';
  linkInput.value = '';
});

formElementAdd.addEventListener('submit', (evt) => {handlerAdd(evt, popupAdd)});
