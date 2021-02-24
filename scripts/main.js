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
const templateEl = document.querySelector('.template');
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

function handleSubmitHandler(evt, popup) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popup);
};

function render() {
  const image = initialCards
    .map(getItem);
  cardEl.append(...image);
};

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
 
  const placeEl = newItem.querySelector('.element__place');
  placeEl.textContent = item.name;
  
  const imageEl = newItem.querySelector('.element__image');
  imageEl.src = item.link;
  imageEl.alt = item.name;

  newItem.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  newItem.querySelector('.element__delete').addEventListener('click', function(evt) {
    const targetEl = evt.target;
    const targetItem = targetEl.closest('.element');
    targetItem.remove();
  });
    
  imageEl.addEventListener('click', function() {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupPlace.textContent = item.name;
    openPopup(popupOpenImage);
  });

  return newItem;
}

function handlerAdd(evt, popup) {
  evt.preventDefault();
  const titleEl = titleInput.value;
  const linkEl = linkInput.value;
  cardEl.prepend(getItem({name: titleEl, link: linkEl}));
  titleInput.value = '';
  linkInput.value = '';
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

render();

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