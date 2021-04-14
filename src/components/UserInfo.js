export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._userNameSelector = nameSelector;
        this._userJobSelector = jobSelector;
        this._userAvatarSelector = avatarSelector
        this._nameSelector = document.querySelector(this._userNameSelector);
        this._jobSelector = document.querySelector(this._userJobSelector);
        this._avatarSelector = document.querySelector(this._userAvatarSelector)
    };

    getUserInfo() {
        const data = {        
            name: this._nameSelector.textContent,
            about: this._jobSelector.textContent
        }
        return data;
    };

    setUserAvatar(data) {
        this._avatarSelector.src = data.avatar;
    }

    setUserInfo(data) {
        this._nameSelector.textContent = data.name;
        this._jobSelector.textContent = data.about;
        this._id = data._id;
        this.setUserAvatar(data)
    };


    getId() {
        return this._id;
    }
};