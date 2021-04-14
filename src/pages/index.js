import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  avatarProfile,
  cardEl,
  formElementAdd,
  formElementEdit,
  formElementAvatar,
  initialCards,
  jobInput,
  jobProfile,
  nameInput,
  nameProfile,
  popupAdd,
  popupAvatar,
  popupDelete,
  popupEdit,
  popupOpenAdd,
  popupOpenAvatar,
  popupOpenDelete,
  popupOpenEdit,
  valid
} from '../utils/constants.js';
import Api from '../components/Api.js';
import { PopupWithDelete } from '../components/PopupWithDelete';
  
const editFormValidator = new FormValidator(valid, formElementEdit);
editFormValidator.enableValidation();
const addFormValid = new FormValidator(valid, formElementAdd);
addFormValid.enableValidation();
const editAvatarValidator = new FormValidator(valid, formElementAvatar);
editAvatarValidator.enableValidation()

const user = new UserInfo(nameProfile, jobProfile, avatarProfile);

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '0ee2eb4c-0866-4cef-874b-bf3a6be10df9'
});

let userId;

Promise.all([api.getCard(), api.getUser()])
.then(([ cardsArray, userData ]) => {
  userId = userData._id;
  user.setUserInfo(userData);
  cardSection.renderItems(cardsArray);
}) .catch(err => console.log(err))

function createCard(data) {
  const card = new Card(data, '.template', user.getId(), {
    handleCardClick: (data) => {
      popupImage.open(data);
    },
    handleDeleteButtonClick: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitAction(() => {
        api.deleteCard(id)
          .then(() => {
            card.handleDelete()
          }) .catch(err => console.log(err))
      })
    },
    handleLikeClick: (id) => {
      api.setLike(id)
        .then((res) => {
          card.setCounter(res)
        })
        .catch(err => console.log(err))
    },
    handleLikeDelete: (id) => {
      api.deleteLike(id)
        .then((res) => {
          card.setCounter(res)
        })
        .catch(err => console.log(err))
    }
  });
  return card.generateCard();
};

const cardSection = new Section({ 
  renderer: (data) => {
    const cardElement = createCard(data);
    cardSection.addItemAppend(cardElement)
  }
}, cardEl);

const popupImage = new PopupWithImage('.popup_open-image');
popupImage.setEventListeners();

const popupDeleteCard = new PopupWithDelete(popupDelete)
popupDeleteCard.setEventListeners();

const formEdit = new PopupWithForm(popupEdit, {
  handleSubmit: (data) => {
    api.editUser(data)
      .then((result) => {
        user.setUserInfo(result)
      }) .catch(err => console.log(err))
  }
});
formEdit.setEventListeners();

const formAdd = new PopupWithForm(popupAdd, {
  handleSubmit: (data) => {
    api.addCard(data)
      .then(result => {
        const card = createCard(result);
        cardSection.addItemPrepend(card);
        formAdd.close();
      }) .catch(err => console.log(err))
  }
});
formAdd.setEventListeners();

const avatarEdit = new PopupWithForm(popupAvatar, {
  handleSubmit: (data) => {
    api.setAvatar(data)
      .then(result => {
        user.setUserAvatar(result)
      }) .catch(err => console.log(err))
  }
})
avatarEdit.setEventListeners()

popupOpenEdit.addEventListener('click', () => {
  formEdit.open();
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.about;
  editFormValidator.resetValidation();
});

popupOpenAdd.addEventListener('click', () => {
  formAdd.open();
  addFormValid.resetValidation();
});

popupOpenAvatar.addEventListener('click', () => {
  avatarEdit.open();
  editAvatarValidator.resetValidation()
})