import { useState } from "react";
import avatar from "../../images/jacques-cousteau.jpg";
import lapiz from "../../images/Edit_profile.png";
import cruz from "../../images/boton_cruz.png";
import EditProfile from "./Popup/EditProfile/EditProfile";
import NewCard from "./Popup/Newcard/NewCard";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import Popup from "./Popup/Popup";
import Card from "../Main/components/Card/Card";
import ImagePopup from "./Popup/ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

const Main = () => {
  const [popup, setPopup] = useState(null);
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const newCard = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = {
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar />,
  };
  const handleOpenPopUp = (newPopup) => {
    setPopup(newPopup);
  };
  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile_avatar"
          onClick={() => handleOpenPopUp(editAvatar)}
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
            onClick={() => handleOpenPopUp(editProfile)}
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
          onClick={() => handleOpenPopUp(newCard)}
        >
          <img
            className="profile__image-button"
            src={cruz}
            alt="cruz de boton"
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </section>
      <ImagePopup card={Card} onClose={handleClosePopup} />

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
