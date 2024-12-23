import X from "../../../../images/formn_image.svg";
const ImagePopup = ({ card, onclose }) => {
  {
    if (!card) return null;
  }
  return (
    <div className={card ? "popup_dialog" : ""}>
      <img className="popup__img" src={card.link} alt={card.name} />
      <div className="popup__description">{card.name}</div>
      <button
        className="close__button popup__close-button"
        title="cerrar"
        onClick={onclose}
      >
        <img className="forms__image-button" src={X} alt="imagen de una X" />
      </button>
    </div>
  );
};

export default ImagePopup;
