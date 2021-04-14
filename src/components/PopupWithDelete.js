import Popup from "./Popup"

export class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitCallback();
            super.close()
        });
    }
}