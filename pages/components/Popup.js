export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector)
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this.setEventListeners()
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        this._removeEventListener()
        this._popupElement.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {   
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    _handleClickClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        };
        if (evt.target.classList.contains('popup__close')) {
            this.close();
        };
    }

    setEventListeners() {
        this._popupElement.addEventListener('click',this._handleClickClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

    _removeEventListener() {
        this._popupElement.removeEventListener('click', this._handleClickClose);
        document.removeEventListener('keydown', this._handleEscClose);
    }
}