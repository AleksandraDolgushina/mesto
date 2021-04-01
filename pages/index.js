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
      openImage.open(data);
    }
  });
  return card.generateCard();
};

const addCards = new Section({
  items: initialCards, 
  renderer: (data) => {
    const cardElement = createCard(data);
    addCards.addItem(cardElement)
  }
}, cardEl);

addCards.renderItems();

const openImage = new PopupWithImage('.popup_open-image');
openImage.setEventListeners();

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
    cardEl.prepend(card);
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