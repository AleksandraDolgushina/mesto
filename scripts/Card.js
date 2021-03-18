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

export default class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('.element')
            .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__place').textContent = this._name;
        this._setEventListeners()

        return this._element;
    }

    _handleLike() {
        this._element.querySelector('.element__like')
        .classList
        .toggle('element__like_active'); 
    }

    _handleDelete() {
        this._element.querySelector('.element__delete')
        .closest('.element')
        .remove();
    }

    _handleOpenPopup() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupPlace.textContent = this._name;
        openPopup(popupOpenImage);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
			this._handleLike();
		});

        this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._handleDelete();
		});

        this._element.querySelector('.element__image').addEventListener('click', () => {
			this._handleOpenPopup();
		});
    }
}

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

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '.template');
    const cardElement = card.generateCard();
    document.querySelector('.elements').append(cardElement);
})