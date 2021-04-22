(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleDeleteButtonClick,u=o.handleLikeClick,c=o.handleLikeDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._cardSelector=n,this._handleCardClick=i,this._handleDeleteButtonClick=a,this._ownerId=r,this._handleLikeClick=u,this._handleLikeDelete=c,this._likeActive="element__like_active"}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(".element__delete"),this._elementImage=this._element.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".element__place").textContent=this._name,this._likeButton=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__likes"),this.checkId(),this.checkLike(),this.setCounter(this._data),this._setEventListeners(),this._element}},{key:"setCounter",value:function(e){this._likeCounter.textContent=e.likes.length}},{key:"_handleLike",value:function(){this._likeButton.classList.add(this._likeActive)}},{key:"_handleRemoveLike",value:function(){this._likeButton.classList.remove(this._likeActive)}},{key:"checkId",value:function(){this._data.owner._id===this._ownerId&&this._deleteButton.classList.add("element__delete_active")}},{key:"checkLike",value:function(){var e=this;this._likes.find((function(t){t._id===e._ownerId&&e._handleLike()}))}},{key:"handleDelete",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._ownerId}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains(e._likeActive)?(e._handleRemoveLike(),e._handleLikeDelete(e._cardId)):(e._handleLike(),e._handleLikeClick(e._cardId))})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteButtonClick(e._cardId)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasNotValidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasNotValidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&o(t.prototype,n),e}(),a=document.querySelector(".elements"),u=document.querySelector('[name="form-add"]'),c=document.querySelector('[name="form-edit"]'),s=document.querySelector('[name="form-avatar"]'),l=document.querySelector(".popup__item_type_description"),f=document.querySelector(".popup__item_type_name"),p=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__avatar-edit"),d=document.querySelector(".profile__edit-button"),_=(document.querySelector(".popup__save-button"),{inputSelector:".popup__item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&y(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageElement=t._popupElement.querySelector(".popup__image"),t._popupPlase=t._popupElement.querySelector(".popup__place"),t}return t=a,(n=[{key:"open",value:function(e){this._imageElement.src=e.link,this._imageElement.alt=e.name,this._popupPlase=e.name,k(E(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),a}(v);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n._form=n._popupElement.querySelector(".popup__form"),n._saveButton=n._form.querySelector(".popup__save-button"),n._textButton=n._saveButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".popup__item"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Сохранение...":this._textButton}},{key:"setEventListeners",value:function(){var e=this;O(P(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){O(P(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),a}(v);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=t,this._userJobSelector=n,this._userAvatarSelector=r,this._nameSelector=document.querySelector(this._userNameSelector),this._jobSelector=document.querySelector(this._userJobSelector),this._avatarSelector=document.querySelector(this._userAvatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._jobSelector.textContent}}},{key:"setUserAvatar",value:function(e){this._avatarSelector.src=e.avatar}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.name,this._jobSelector.textContent=e.about,this._id=e._id,this.setUserAvatar(e)}},{key:"getId",value:function(){return this._id}}])&&R(t.prototype,n),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUser",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"getCard",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"editUser",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?Promise.resolve("success"):Promise.reject("Ошибка ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}}])&&A(t.prototype,n),e}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popupElement.querySelector(".popup__form"),t._saveButton=t._form.querySelector(".popup__save-button"),t._textButton=t._saveButton.textContent,t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Удаление...":this._textButton}},{key:"setEventListeners",value:function(){var e=this;V(N(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&D(t.prototype,n),a}(v);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new r(_,c);M.enableValidation();var $=new r(_,u);$.enableValidation();var F=new r(_,s);F.enableValidation();var G=new q(".profile__name",".profile__description",".profile__avatar"),K=new T({address:"https://mesto.nomoreparties.co/v1/cohort-22",token:"0ee2eb4c-0866-4cef-874b-bf3a6be10df9"});function Q(e){var n=new t(e,".template",G.getId(),{handleCardClick:function(e){X.open(e)},handleDeleteButtonClick:function(e){Y.open(),Y.setSubmitAction((function(){Y.renderLoading(!0),K.deleteCard(e).then((function(){n.handleDelete(),Y.close()})).catch((function(e){return console.log(e)})).finally((function(){Y.renderLoading(!1)}))}))},handleLikeClick:function(e){K.setLike(e).then((function(e){n.setCounter(e)})).catch((function(e){return console.log(e)}))},handleLikeDelete:function(e){K.deleteLike(e).then((function(e){n.setCounter(e)})).catch((function(e){return console.log(e)}))}});return n.generateCard()}Promise.all([K.getCard(),K.getUser()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i._id,G.setUserInfo(i),W.renderItems(o)})).catch((function(e){return console.log(e)}));var W=new i({renderer:function(e){var t=Q(e);W.addItemAppend(t)}},a),X=new C(".popup_open-image");X.setEventListeners();var Y=new J(".popup_delete");Y.setEventListeners();var Z=new B(".popup_edit",{handleSubmit:function(e){Z.renderLoading(!0),K.editUser(e).then((function(e){G.setUserInfo(e),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){Z.renderLoading(!1)}))}});Z.setEventListeners();var ee=new B(".popup_add",{handleSubmit:function(e){ee.renderLoading(!0),K.addCard(e).then((function(e){var t=Q(e);W.addItemPrepend(t),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){ee.renderLoading(!1)}))}});ee.setEventListeners();var te=new B(".popup_avatar",{handleSubmit:function(e){te.renderLoading(!0),K.setAvatar(e).then((function(e){G.setUserAvatar(e),te.close()})).catch((function(e){return console.log(e)})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners(),d.addEventListener("click",(function(){Z.open();var e=G.getUserInfo();f.value=e.name,l.value=e.about,M.resetValidation()})),p.addEventListener("click",(function(){ee.open(),$.resetValidation()})),h.addEventListener("click",(function(){te.open(),F.resetValidation()}))})();