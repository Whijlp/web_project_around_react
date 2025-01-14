import Popup from "../Popup/Popup";

const PopupWhitConfirmation = (props) => {
  const { card, popup, onCardDelete, handleDeleteCard} = props;

  const handleConfirmation = (evt) => {
    evt.preventDefault();
    handleDeleteCard(popup);
    onCardDelete(card._id); 
    popup(null); }

    return (
    <Popup title="¿Estás seguro/a?" onClose={popup}>
      <button
        className="forms__submit-button"
        id="confirmation-button"
        title="confirma eliminacion"
        onClick={handleConfirmation}
      >
        Sin miedo al Exito !!!
      </button>
    </Popup>
  );
};
export default PopupWhitConfirmation;
