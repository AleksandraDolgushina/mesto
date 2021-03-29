export default class Card {
    constructor(data, cardSelector, {handleCardClick}) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    };
  
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);    
        return cardElement;
    };
    
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__place').textContent = this._name;
        this._setEventListeners()
        return this._element;
    };

    _handleLike() {
        this._element.querySelector('.element__like')
        .classList
        .toggle('element__like_active'); 
    };

    _handleDelete() {
        this._element.querySelector('.element__delete')
        .closest('.element')
        .remove();
    };

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
			this._handleLike();
		});

        this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._handleDelete();
		});

        this._element.querySelector('.element__image').addEventListener('click', () => {
			this._handleCardClick(this._data)
		});
    };
};