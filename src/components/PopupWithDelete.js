import Popup from "./Popup"

export default class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');
        this._saveButton = this._form.querySelector('.popup__save-button');
        this._textButton = this._saveButton.textContent;
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    };

    renderLoading(isLoading) {
        if(isLoading) {
            this._saveButton.textContent = 'Удаление...'
        } else {
            this._saveButton.textContent = this._textButton;
        };
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitCallback();
        });
    };
};