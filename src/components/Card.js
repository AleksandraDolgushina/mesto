export default class Card {
    constructor(data, cardSelector, ownerId, {handleCardClick, handleDeleteButtonClick, handleLikeClick, handleLikeDelete}) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._ownerId = ownerId;
        this._handleLikeClick = handleLikeClick;
        this._handleLikeDelete = handleLikeDelete;
        this._likeActive = 'element__like_active';
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
        this._deleteButton = this._element.querySelector('.element__delete')
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector('.element__place').textContent = this._name;
        this._likeButton = this._element.querySelector('.element__like');
        this._likeCounter = this._element.querySelector('.element__likes');
        this.checkId();
        this.checkLike();
        this.setCounter(this._data);
        this._setEventListeners();
        return this._element;
    };

    setCounter(data) {
        this._likeCounter.textContent = data.likes.length;
    };

    _handleLike() {
        this._likeButton.classList.add(this._likeActive);
    };

    _handleRemoveLike() {
        this._likeButton.classList.remove(this._likeActive);
    };

    checkId() {
        if(this._data.owner._id === this._ownerId) {
            this._deleteButton.classList.add('element__delete_active')
        };
    };

    checkLike() {
        this._likes.find((el) => {
            if (el._id === this._ownerId) {
                this._handleLike()
            };
        });
    };

    handleDelete() {
        this._element.remove();
        this._element = null;
    };

    getId() {
        return this._ownerId;
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
			if (this._likeButton.classList.contains(this._likeActive)) {
                this._handleRemoveLike()
                this._handleLikeDelete(this._cardId);
            } else {
                this._handleLike();
                this._handleLikeClick(this._cardId);
            };
        });

        this._deleteButton.addEventListener('click', () => {
			this._handleDeleteButtonClick(this._cardId);
		});

        this._elementImage.addEventListener('click', () => {
			this._handleCardClick(this._data)
		});
    };
};