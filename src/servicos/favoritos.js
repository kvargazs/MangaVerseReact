import axios from "axios"; //importando o axios

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"}) //crando api com o axios

//função getLivros
async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data //retorna dados
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)
}
async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
