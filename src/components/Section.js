export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector
    }

    addItemAppend(element) {
        this._container.append(element)
    }

    addItemPrepend(element) {
        this._container.prepend(element)
    }

    renderItems(cardsItem) {
        cardsItem.forEach((item) => {
            this._renderer(item)
        });
    }
}