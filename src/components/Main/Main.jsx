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



const Main = () => {

  const[currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popupImage, setPopupImage] = useState(null);
  const [popup, setPopup] = useState(null);
  //-----------------------------------------------------------------------------------
  const handleOpenPopUp = (newPopup) => {
    setPopup(newPopup);
  };
  const handleClosePopup = () => {
    setPopup(null);
  };
 

  const handleCreateCard = ({title, link}) => {
    api.createCard({ name: title, link })
      .then((response) => {
        setCards((state) => [response, ...state]);
        setPopup(null);
      })
      .catch((error) => {
        console.error("Error creating card:", error);
      });
  };
 
  const editProfile = () => ({
    title: "Editar Perfil",
    children: <EditProfile />,
  });
  const newCard = () => ({ title: "Nuevo lugar", children: <NewCard handleCreateCard={handleCreateCard}/> });
  const editAvatar = () => ({
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar />,
  });

 const handleIsLikeCard = (cardId,isLiked) => {
  if(isLiked){
    api.deleteLikeCard(cardId).then((response)=> {
      setCards((state) => {
        return state.map((card)=>card._id === response._id ? response : card)
      })
    })
  }else{ api.likeCard(cardId).then((response)=> {
 setCards((state) => {
  return state.map((card)=>card._id === response._id ? response : card)
 })
  })}};
 
const handleDeleteCard =(cardId)=>{
  api.deleteCard(cardId).then(() => {
    setCards((state) => state.filter((card) => card._id !== cardId));
  })

}

 useEffect(() => {
  api.getUserInfo().then((response) => {
    setCurrentUser(response)}) 
  api.getInitialCards().then((response) => {
    setCards(response || [])}) },[])

  return (
    <CurrentUserContexts.Provider value={currentUser} >
    <main className="content">
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
          <img className="profile_image" src={avatar} alt="foto de perfil" />
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
            onCardDelete={handleDeleteCard}
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
