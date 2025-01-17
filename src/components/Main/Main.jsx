import { useEffect, useState } from "react";
import avatar from "../../images/jacques-cousteau.jpg";
import lapiz from "../../images/Edit_profile.png";
import cruz from "../../images/boton_cruz.png";
import EditProfile from "../EditProfile/EditProfile";
import NewCard from "../Newcard/NewCard";
import EditAvatar from "../EditAvatar/EditAvatar";
import Popup from "../Popup/Popup";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";
import CurrentUserContexts from "../../contexts/CurrentUserContexts";
import  api  from "../../utils/Api/api.js";
import PopupWhitConfirmation from "../PopupWhitConfirmation/PopupWhitConfirmation.jsx";


const Main = ({cards, handleCreateCard, handleIsLikeCard, handleDeleteCard,setCards}) => {

  const[currentUser, setCurrentUser] = useState({});
  const [popupImage, setPopupImage] = useState(null);
  const [popup, setPopup] = useState(null);
  const [popupDelete, setPopupDelete] = useState(null);
  const[currentCard, setCurrentCard] = useState({});
  //-----------------------------------------------------------------------------------
  
  const handleOpenPopUp = (newPopup) => {
   setPopup(newPopup);
    
  };
  const handleClosePopup = () => {
    setPopup(null);
  };

  //const popupWhitConfirmation =(cards)=> setPopup(cards)  
  
  const newCard = () => ({ title: "Nuevo lugar", children: <NewCard handleCreateCard={({title,link})=>{handleCreateCard(title,link)
    setPopup(null)
  }}/> });
  
  const handleChangeAvatar = (avatar) => {api.editAvatarUser({avatar:avatar}).then((response) => {
    console.log(response);
    setCurrentUser(response); setPopup(null) })
};
  const handleUpdateUser = (data)=>{api.editUserInfo(data).then((response) => {setCurrentUser(response);setPopup(null)})
  }
  const editAvatar = () => ({
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar handleChangeAvatar={handleChangeAvatar} />,
  });

  const editProfile = () => ({
    title: "Editar Perfil",
    children: <EditProfile />,
  });
  
 useEffect(() => {
  api.getUserInfo().then((response) => {
    setCurrentUser(response)}) 
  api.getInitialCards().then((response) => {
    setCards(response || [])}) },[])

  return (
    <CurrentUserContexts.Provider value={{currentUser, handleUpdateUser}} >
    <main className="content">
     { popupDelete && <PopupWhitConfirmation setPopup={setPopupDelete} handleDeleteCard={handleDeleteCard} card={currentCard}  />}
      <section className="profile">
        <button
          className="profile_avatar"
          onClick={() => handleOpenPopUp(editAvatar())}
        >
          <img
            className="profile__edit-avatar"
            src={lapiz}
            alt="Vector de lapiz"
          />
          <img className="profile_image" src={currentUser.avatar} alt="foto de perfil" />
        </button>

        <div className="profile__info">
          <div className="profile__info-container">
            <h2 className="profile__title">{currentUser.name}</h2>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="profile__edit-button"
            title="Editar perfil"
            onClick={() => handleOpenPopUp(editProfile())}
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
          onClick={() => handleOpenPopUp(newCard())}
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
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={(selectCard) => {
              setPopupImage(selectCard);
            }}
            handleIsLikeCard={handleIsLikeCard}
            onCardDelete={()=>{setPopupDelete(true); setCurrentCard(card)} }

          />
        ))}
      </section>
      <ImagePopup
        card={popupImage}
        onClose={() => {
          setPopupImage(null);
        }}
      />
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
    </CurrentUserContexts.Provider>
  );

};

export default Main;
