
import { useRef } from "react";


const EditAvatar = (props) => {
  const {handleChangeAvatar} = props
  const inputAvatarRef = useRef(null)
  const handleSubmitForm =(evt)=>{
    evt.preventDefault()
    handleChangeAvatar(inputAvatarRef?.current.value)
  }
  return (
    <form className="form" id="form_edit-avatar">
      <fieldset className="form__edit">
        <input
          required
          name="avatar"
          className="form__input"
          type="url"
          id="avatar"
          placeholder="foto de perfil"
          minLength="2"
          ref={inputAvatarRef}
        />
        <span
          name="name-error"
          id="avatar-error"
          className="form__input-error-span"
        ></span>
        <button
        onClick={handleSubmitForm}
          className="forms__submit-button"
          id="perfil-button"
          title="Guardar cambios"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
};
export default EditAvatar;
