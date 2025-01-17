import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import api from "../utils/Api/api";
import CurrentUserContexts from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleIsLikeCard = (cardId, isLiked) => {
    if (isLiked) {
      api.deleteLikeCard(cardId).then((response) => {
        setCards((state) => {
          return state.map((card) =>
            card._id === response._id ? response : card
          );
        });
      });
    } else {
      api.likeCard(cardId).then((response) => {
        setCards((state) => {
          return state.map((card) =>
            card._id === response._id ? response : card
          );
        });
      });
    }
  };

  const handleDeleteCard = (cardId) => {
    api.deleteCard(cardId).then(() => {
      setCards((state) => state.filter((card) => card._id !== cardId));
    });
  };

  const handleCreateCard = (title, link) => {
    api
      .createCard({ name: title, link })
      .then((response) => {
        setCards((state) => [response, ...state]);
      })
      .catch((error) => {
        console.error("Error creando card:", error);
      });
  };

  return (
    <CurrentUserContexts.Provider value={{ currentUser }}>
      <div className="page">
        <Header />
        <Main
          setCards={setCards}
          cards={cards}
          handleCreateCard={handleCreateCard}
          handleIsLikeCard={handleIsLikeCard}
          handleDeleteCard={handleDeleteCard}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Footer />
      </div>
    </CurrentUserContexts.Provider>
  );
}

export default App;
