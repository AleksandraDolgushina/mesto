import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
        this._saveButton = this._form.querySelector('.popup__save-button');
        this._textButton = this._saveButton.textContent;
    };

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__item');
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value});
        return this._formValues;
    };

    renderLoading(isLoading) {
        if(isLoading) {
            this._saveButton.textContent = 'Сохранение...'
        } else {
            this._saveButton.textContent = this._textButton;
        };
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._form.reset();      
    };
};