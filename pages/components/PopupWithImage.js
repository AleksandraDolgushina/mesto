import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popupElement.querySelector('.popup__image');
        this._popupPlase = this._popupElement.querySelector('.popup__place')
    }

    open(data) {
        this._imageElement.src = data.link;
        this._imageElement.alt = data.name;
        this._popupPlase = data.name;
        super.open()
    }
}