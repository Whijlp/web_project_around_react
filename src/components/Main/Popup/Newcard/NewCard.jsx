const NewCard = () => {
  return (
    <form className="form" id="create-card">
      <fieldset className="form__edit">
        <input
          required
          name="titulo"
          className="form__input"
          type="text"
          id="titulo"
          placeholder="Nueva tarjeta"
          minLength="2"
          maxLength="30"
        />
        <span
          name="titulo-error"
          id="titulo-error"
          className="form__input-error-span"
        ></span>
        <input
          required
          name="photo_info"
          className="form__input"
          type="url"
          id="photo_info"
          placeHolder="Enlace de la imagen"
        />
        <span
          name="photo_info-error"
          id="photo_info-error"
          className="form__input-error-span"
        ></span>
      </fieldset>
      <button
        disabled
        className="forms__submit-button"
        type="submit"
        title="Crear tarjeta nueva "
        id="create-button"
      >
        Crear
      </button>
    </form>
  );
};
export default NewCard;
