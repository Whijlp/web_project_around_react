import trash from "../../images/Trash.png";
const Card = ({ card, handleOpenPopup }) => {
  {
    /*const { link, name, isLiked, handleOpenPopup } = props.card;*/
  }
  const imageComponent = {
    name: card.name,
    link: card.link,
  };
  const handleClick = () => {
    handleOpenPopup(imageComponent);
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={() => handleClick()}
      />
      <div className="element__text">
        <p className="element__title"> {card.name} </p>
        <button
          className="element__like"
          aria-label="Like card"
          type="button"
        ></button>
        <button className="element__trash" title="eliminar" id="delete_button">
          <img src={trash} alt="imagen de basurera" />
        </button>
      </div>
    </div>
  );
};
export default Card;
