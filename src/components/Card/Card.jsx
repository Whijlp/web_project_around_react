import trash from "../../images/Trash.png";
const Card = ({ card, handleOpenPopup, handleIsLikeCard, onCardDelete= {}}) => {
  {
    /*const { link, name, isLiked, handleOpenPopup } = props.card;*/
  }
  
  const { link = "", name = "" ,_id,isLiked} = card;
  const imageComponent = {
    name,
    link,
  };
  const handleClick = () => {
    handleOpenPopup(imageComponent);
  };

  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__like-active' : ''
  }`;

  return (
    <div className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={() => handleClick()}
      />
      <div className="element__text">
        <p className="element__title"> {name} </p>
        <button
          className={cardLikeButtonClassName}
          aria-label="Like card"
          type="button"
          onClick={() => handleIsLikeCard(_id, isLiked)}
        ></button>
        <button className="element__trash" title="eliminar" id="delete_button" onClick={()=>onCardDelete(_id)}>
          <img src={trash} alt="imagen de basurera" />
        </button>
      </div>
    </div>
  );
};
export default Card;
