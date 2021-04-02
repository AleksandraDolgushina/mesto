export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._userNameSelector = nameSelector;
        this._userJobSelector = jobSelector;
        this._nameSelector = document.querySelector(this._userNameSelector);
        this._jobSelector = document.querySelector(this._userJobSelector);
    };

    getUserInfo() {
        const data = {        
            name: this._nameSelector.textContent,
            job: this._jobSelector.textContent
        }
        return data;
    };

    setUserInfo({name, job}) {
        this._nameSelector.textContent = name;
        this._jobSelector.textContent = job;
    };
};