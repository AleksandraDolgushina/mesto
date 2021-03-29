import Card from './components/Card.js'
import FormValidator from '../scripts/FormValidator.js'
import Section from './components/Section.js'
import { cardEl, initialCards} from '../utils/constants.js';
import PopupWithImage from './components/PopupWithImage.js';

const addCards = new Section({
  items: initialCards, 
  renderer: (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    addCards.addItem(cardElement)
  }
}, cardEl);
addCards.renderItems();

function createCard(data) {
  return new Card(data, '.template', {
    handleCardClick: (data) => {
    new PopupWithImage('.popup_open-image').open(data)
    } 
  })
};

const editFormValidator = new FormValidator(valid, formElementEdit);
editFormValidator.enableValidation()
const addFormValid = new FormValidator(valid, formElementAdd);
addFormValid.enableValidation()




function handlerAdd(evt, popup) {
  evt.preventDefault();
  cardEl.prepend(createCard(titleInput.value, linkInput.value));
  titleInput.value = '';
  linkInput.value = ''; 
  closePopup(popup);
};

function handleSubmitHandler(evt, popup) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popup);
};


popupOpenEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  editFormValidator.resetValidation()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

formElementEdit.addEventListener('submit', (evt) => {handleSubmitHandler(evt, popupEdit)});

popupOpenAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  addFormValid.resetValidation()
  titleInput.value = '';
  linkInput.value = '';
});

formElementAdd.addEventListener('submit', (evt) => {handlerAdd(evt, popupAdd)});
