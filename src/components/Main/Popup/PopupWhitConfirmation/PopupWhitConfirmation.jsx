import X from "../../../images/formn_image.svg";
const PopupWhitConfirmation = () => {
  return (
    <div className="forms">
      <h2 className="forms__title">¿Estás seguro/a?</h2>
      <button
        className="forms__submit-button"
        id="confirmation-button"
        title="confirma eliminacion"
      >
        Sin miedo al Exito !!!
      </button>
      <button
        id="forms_delete_close_button"
        className="forms__close-button close__button"
        title="cerrar"
        type="button"
      >
        <img className="forms__image-button" src={x} alt="imagen de una X" />
      </button>
    </div>
  );
};
export default PopupWhitConfirmation;
