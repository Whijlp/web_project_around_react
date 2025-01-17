import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import api from "../utils/Api/api";
function App() {

  const [cards, setCards] = useState([]);

  const handleIsLikeCard = (cardId,isLiked) => {
    if(isLiked){
      api.deleteLikeCard(cardId).then((response)=> {
        setCards((state) => {
          return state.map((card)=>card._id === response._id ? response : card)
        })
      })
    }else {
  
       api.likeCard(cardId).then((response)=> {
   setCards((state) => {
    return state.map((card)=>card._id === response._id ? response : card)
   }) })}};
   
  const handleDeleteCard =(cardId)=>{
    api.deleteCard(cardId).then(() => {
      setCards((state) => state.filter((card) => card._id !== cardId));
    })}

  const handleCreateCard = (title, link) => {
    api.createCard({name:title,link})
      .then((response) => {
        setCards((state) => [response, ...state]);
       })
       .catch((error) => {
         console.error("Error creando card:", error);
      });
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main setCards={setCards} cards={cards} handleCreateCard={handleCreateCard} handleIsLikeCard={handleIsLikeCard} handleDeleteCard={handleDeleteCard} />
        <Footer />
      </div>
    </>
  );
}

export default App;
