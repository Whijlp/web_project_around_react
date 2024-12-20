import { useState } from "react";
import avatar from "../../images/jacques-cousteau.jpg";
import lapiz from "../../images/Edit_profile.png";
import cruz from "../../images/boton_cruz.png";
import EditProfile from "./Popup/EditProfile/EditProfile";
import NewCard from "./Popup/Newcard/NewCard";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";

const Main = () => {
  const [popup, setPopup] = useState(null);
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const newCard = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = {
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar />,
  };
  const HandleOpenPopUp = () => {
    setPopup(popup);
  };

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile_avatar"
          onClick={() => HandleOpenPopUp(editAvatar)}
        >
          <img
            className="profile__edit-avatar"
            src={lapiz}
            alt="Vector de lapiz"
          />
          <img className="profile_image" src={avatar} alt="foto de perfil" />
        </button>

        <div className="profile__info">
          <div className="profile__info-container">
            <h2 className="profile__title">Jacques Cousteau</h2>
            <p className="profile__subtitle">Explorador</p>
          </div>
          <button
            className="profile__edit-button"
            title="Editar perfil"
            onClick={() => HandleOpenPopUp(editProfile)}
          >
            <img
              className="profile__edit-image"
              src={lapiz}
              alt="Vector de lapiz"
            />
          </button>
        </div>
        <button
          className="profile__add-button"
          title="Crear tarjeta"
          onClick={() => HandleOpenPopUp(newCard)}
        >
          <img
            className="profile__image-button"
            src={cruz}
            alt="cruz de boton"
          />
        </button>
      </section>
      <section className="elements">
        <template id="card-template">
          <div className="element">
            <img className="element__image" src="" alt="foto de moto" />
            <div className="element__text">
              <p className="element__title"></p>
              <div className="element__like"></div>
              <button
                className="element__trash"
                title="eliminar"
                id="delete_button"
              >
                <img src="./images/Trash.png" alt="imagen de basurera" />
              </button>
            </div>
          </div>
        </template>
        <dialog className="popup_dialog">
          <img className="popup__img" src="" alt="" />
          <div className="popup__description"></div>
          <button className="close__button popup__close-button" title="cerrar">
            <img
              className="forms__image-button"
              src="./images/formn_image.svg"
              alt="imagen de una X"
            />
          </button>
        </dialog>
      </section>

      <dialog className="form__dialog popup_confirmation">
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
            <img
              className="forms__image-button"
              src="./images/formn_image.svg"
              alt="imagen de una X"
            />
          </button>
        </div>
      </dialog>

      {popup && (
        <Popup key={popup._id} onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
