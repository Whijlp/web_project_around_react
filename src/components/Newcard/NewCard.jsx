import { useState } from "react";


const NewCard = (props) => {
  const { handleCreateCard } = props;
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const validatedTitle = title.trim() !== "" ? title : "❌sin título❌";
    const validatedLink =
      link.trim() !== ""
        ? link
        : "https://i.pinimg.com/736x/35/6e/40/356e403878f3694ab491b406e49bdfd7.jpg";

    handleCreateCard({ title: validatedTitle, link: validatedLink });

    setTitle("");
    setLink("");
  };

  const titleCard = (evt) => {
    setTitle(evt.target.value);
  };

  const linkCard = (evt) => {
    setLink(evt.target.value);
  };

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
          value={title}
          onChange={titleCard}
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
          placeholder="Enlace de la imagen"
          value={link}
          onChange={linkCard}
        />
        <span
          name="photo_info-error"
          id="form_photo_info-error"
          className="form__input-error-span"
        ></span>
      </fieldset>
      <button
        className="forms__submit-button"
        type="submit"
        title="Crear tarjeta nueva "
        id="create-button"
        onClick={handleSubmitForm}
      >
        Crear
      </button>
    </form>
  );
};
export default NewCard;
