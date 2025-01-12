const EditProfile = () => {
  return (
    <form className="form" id="form_edit-profile">
      <fieldset className="form__edit">
        <input
          required
          name="name"
          className="form__input"
          type="text"
          id="nombre"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
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
          minLength="2"
          maxLength="200"
        />
        <span
          name="job_info-error"
          id="job_info-error"
          className="form__input-error-span"
        ></span>
      </fieldset>
      <button
        
        className="forms__submit-button"
        id="perfil-button"
        title="Guardar cambios"
      >
        Guardar
      </button>
    </form>
  );
};
export default EditProfile;
