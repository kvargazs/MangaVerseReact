import axios from "axios"; //importando o axios

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"}) //crando api com o axios

//função getLivros
async function getLivros() {
    const response = await livrosAPI.get('/')

    return response.data //retorna dados
}

export default getLivros
