import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  cardEl,
  formElementAdd,
  formElementEdit,
  initialCards,
  jobInput,
  jobProfile,
  nameInput,
  nameProfile,
  popupAdd,
  popupEdit,
  popupOpenAdd,
  popupOpenEdit,
  valid
} from '../utils/constants.js';
  
const editFormValidator = new FormValidator(valid, formElementEdit);
editFormValidator.enableValidation();
const addFormValid = new FormValidator(valid, formElementAdd);
addFormValid.enableValidation();

function createCard(data) {
  const card = new Card(data, '.template', {
    handleCardClick: (data) => {
      popupImage.open(data);
    }
  });
  return card.generateCard();
};

const cardSection = new Section({
  items: initialCards, 
  renderer: (data) => {
    const cardElement = createCard(data);
    cardSection.addItemAppend(cardElement)
  }
}, cardEl);

cardSection.renderItems();

const popupImage = new PopupWithImage('.popup_open-image');
popupImage.setEventListeners();

const user = new UserInfo(nameProfile, jobProfile);

const formEdit = new PopupWithForm(popupEdit, {
  handleSubmit: (item) => {
    user.setUserInfo({name: item.name, job: item.description})
  }
});
formEdit.setEventListeners();

const formAdd = new PopupWithForm(popupAdd, {
  handleSubmit: (item) => {
    const card = createCard({name: item.title, link: item.link});
    cardSection.addItemPrepend(card);
    formAdd.close();
  }
});
formAdd.setEventListeners();

popupOpenEdit.addEventListener('click', () => {
  formEdit.open();
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  editFormValidator.resetValidation();
});

popupOpenAdd.addEventListener('click', () => {
  formAdd.open();
  addFormValid.resetValidation();
});