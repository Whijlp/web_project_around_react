 class Api {
    constructor(options) {
      this.baseURL = options.baseURL;
      this.headers = options.headers || {};
      this.likeCard = this.likeCard.bind(this);
      this.deleteLikeCard = this.deleteLikeCard.bind(this);
    }
  
    getInitialCards() {
      return fetch(`${this.baseURL}/cards`, {
        method: "GET",
        headers: {
          ...this.headers,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
    getUserInfo() {
      return fetch(`${this.baseURL}/users/me`, {
        method: "GET",
        headers: {
          ...this.headers,
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  
    editUserInfo(body) {
      return fetch(`${this.baseURL}/users/me`, {
        method: "PATCH",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  
    editAvatarUser(avatar) {
      return fetch(`${this.baseURL}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(avatar),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  
    createCard(body) {
      return fetch(`${this.baseURL}/cards/`, {
        method: "POST",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  
    deleteCard(cardId) {
      return fetch(`${this.baseURL}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          ...this.headers,
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
    likeCard(cardId) {
      return fetch(`${this.baseURL}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: {
          ...this.headers,
        },
      
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  
    deleteLikeCard(cardId) {
      return fetch(`${this.baseURL}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: {
          ...this.headers,
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }
 
  const api = new Api({
    baseURL: "https://around-api.es.tripleten-services.com/v1",
    headers: {
      authorization: "327c3904-1c97-4a31-961f-faa6d3ffb204",
      "Content-Type": "application/json",
    },
  });

  export default api;