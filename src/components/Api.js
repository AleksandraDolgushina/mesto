export default class Api {
    constructor({address, token}) {
        this._address = address;
        this._token = token;
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json()
        } return Promise.reject(`Ошибка ${response.status}`)
    };
    
    getUser() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        }) .then(this._handleResponse)
    ;}
    
    getCard() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        }) .then(this._handleResponse)
    };
        
    editUser(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }) .then(this._handleResponse)
    };

    addCard(data) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }) .then(this._handleResponse)
    };

    deleteCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            },
        }) 
        .then(response => response.ok
            ? Promise.resolve('success')
            : Promise.reject(`Ошибка ${response.status}`))
    };

    setLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
            },
        }) .then(this._handleResponse)
    };

    deleteLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            },
        }) .then(this._handleResponse)
    };

    setAvatar(data) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        }) .then(this._handleResponse)
    };
}