import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete';
import { 
  avatarProfile,
  cardEl,
  formElementAdd,
  formElementEdit,
  formElementAvatar,
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
  popupOpenEdit,
  valid
} from '../utils/constants.js';
  
const editFormValidator = new FormValidator(valid, formElementEdit);
editFormValidator.enableValidation();
const addFormValid = new FormValidator(valid, formElementAdd);
addFormValid.enableValidation();
const editAvatarValidator = new FormValidator(valid, formElementAvatar);
editAvatarValidator.enableValidation();

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
}) .catch(err => console.log(err));

function createCard(data) {
  const card = new Card(data, '.template', user.getId(), {
    handleCardClick: (data) => {
      popupImage.open(data);
    },
    handleDeleteButtonClick: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitAction(() => {
        popupDeleteCard.renderLoading(true)
        api.deleteCard(id)
          .then(() => {
            card.handleDelete();
            popupDeleteCard.close()
          }) .catch(err => console.log(err))
          .finally(() => {
            popupDeleteCard.renderLoading(false)
          })
      })
    },
    handleLikeClick: (id) => {
      api.setLike(id)
        .then((res) => {
          card.setCounter(res);
        })
        .catch(err => console.log(err));
    },
    handleLikeDelete: (id) => {
      api.deleteLike(id)
        .then((res) => {
          card.setCounter(res);
        })
        .catch(err => console.log(err));
    }
  });
  return card.generateCard();
};

const cardSection = new Section({ 
  renderer: (data) => {
    const cardElement = createCard(data);
    cardSection.addItemAppend(cardElement);
  }
}, cardEl);

const popupImage = new PopupWithImage('.popup_open-image');
popupImage.setEventListeners();

const popupDeleteCard = new PopupWithDelete(popupDelete)
popupDeleteCard.setEventListeners();

const formEdit = new PopupWithForm(popupEdit, {
  handleSubmit: (data) => {
    formEdit.renderLoading(true);
    api.editUser(data)
      .then((result) => {
        user.setUserInfo(result);
        formEdit.close();
      }) .catch(err => console.log(err))
      .finally(() => {
        formEdit.renderLoading(false);
      })
  }
});
formEdit.setEventListeners();

const formAdd = new PopupWithForm(popupAdd, {
  handleSubmit: (data) => {
    formAdd.renderLoading(true);
    api.addCard(data)
      .then((result) => {
        const card = createCard(result);
        cardSection.addItemPrepend(card);
        formAdd.close();
      }) .catch(err => console.log(err))
      .finally(() => {
        formAdd.renderLoading(false)
      });
  }
});
formAdd.setEventListeners();

const avatarEdit = new PopupWithForm(popupAvatar, {
  handleSubmit: (data) => {
    avatarEdit.renderLoading(true);
    api.setAvatar(data)
      .then((result) => {
        user.setUserAvatar(result);
        avatarEdit.close();
      }) .catch(err => console.log(err))
      .finally(() => {
        avatarEdit.renderLoading(false)
      });
  }
});
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
  editAvatarValidator.resetValidation();
})