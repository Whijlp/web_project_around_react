import avatar from "../../images/jacques-cousteau.jpg";
import lapiz from "../../images/Edit_profile.png";
import cruz from "../../images/boton_cruz.png";

const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile_avatar">
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
          <button className="profile__edit-button" title="Editar perfil">
            <img
              className="profile__edit-image"
              src={lapiz}
              alt="Vector de lapiz"
            />
          </button>
        </div>
        <button className="profile__add-button" title="Crear tarjeta">
          <img
            className="profile__image-button"
            src={cruz}
            alt="cruz de boton"
          />
        </button>
        <dialog className="form__dialog" id="avatar_edit-profile">
          <div className="forms">
            <h2 className="forms__title">Cambiar foto de perfil</h2>
            <form className="form" id="form_edit-avatar">
              <fieldset className="form__edit">
                <input
                  required
                  name="avatar"
                  className="form__input"
                  type="url"
                  id="avatar"
                  placeholder="foto de perfil"
                  minlength="2"
                />
                <span
                  name="name-error"
                  id="avatar-error"
                  className="form__input-error-span"
                ></span>
                <button
                  disabled
                  className="forms__submit-button"
                  id="perfil-button"
                  title="Guardar cambios"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
            <button
              className="forms__close-button close__button forms-profile-button"
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
      <dialog className="form__dialog" id="popup__new-places">
        <div className="forms">
          <h2 className="forms__title">Nueva Tarjeta</h2>
          <form className="form" id="create-card">
            <fieldset className="form__edit">
              <input
                required
                name="titulo"
                className="form__input"
                type="text"
                id="titulo"
                placeholder="Nueva tarjeta"
                minlength="2"
                maxlength="30"
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
            <button
              className="forms__close-button close__button"
              id="place-close-button"
              title="cerrar"
              type="button"
            >
              <img
                className="forms__image-button"
                src="./images/formn_image.svg"
                alt="imagen de una X"
              />
            </button>
          </form>
        </div>
      </dialog>
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

      <div className="popup" id="popupProfile">
        <div className="popup__overlay"></div>
        <div className="forms">
          <h2 className="forms__title">Editar perfil</h2>
          <form className="form" id="form_edit-profile">
            <fieldset className="form__edit">
              <input
                required
                name="name"
                className="form__input"
                type="text"
                id="nombre"
                placeholder="Nombre"
                minlength="2"
                maxlength="40"
              />
              <span
                name="name-error"
                id="name-error"
                className="form__input-error-span"
              ></span>
              <input
                required
                className="form__input"
                type="text"
                id="job_info"
                name="job_info"
                placeholder="Descripcion"
                minlength="2"
                maxlength="200"
              />
              <span
                name="job_info-error"
                id="job_info-error"
                className="form__input-error-span"
              ></span>
            </fieldset>
            <button
              disabled
              className="forms__submit-button"
              id="perfil-button"
              title="Guardar cambios"
            >
              Guardar
            </button>
            <button
              className="forms__close-button close__button forms-profile-button"
              title="cerrar"
              type="button"
            >
              <img
                className="forms__image-button"
                src="./images/formn_image.svg"
                alt="imagen de una X"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Main;
