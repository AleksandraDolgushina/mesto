export default class Api {
    constructor({address, token}) {
        this._addreess = address;
        this._token = token;
    }

    getUser() {
        return fetch(`${this._addreess}/users/me`, {
            headers: {
                authorization: this._token
            }
        }) .then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    }

    getCard() {
        return fetch(`${this._addreess}/cards`, {
            headers: {
                authorization: this._token
            }
        }) .then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
    }
}