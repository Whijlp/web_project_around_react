import trash from "../../../../images/Trash.png";
const Card = (props) => {
  const { name, link, isLiked } = props.card;

  return (
    <div>
      <img className="element__image" src={link} alt={name} />
      <div className="element__text">
        <p className="element__title"> {name} </p>
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
