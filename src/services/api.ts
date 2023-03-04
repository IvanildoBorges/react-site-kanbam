import axios from "axios";

const BASE_URL = "https://api-site-kanban-deploy.onrender.com";

const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
    }, 
    withCredentials: false,
});

const setMessageError = (error: any) => {
    console.error("Ops! Ocorreu um erro! ", error);
}

export default {
    getUsers: async () => {
        let users = await api.get('/users')
        .then((response) => response)
        .catch((error) => setMessageError(error))

        return users
    },
    setUsers: async (nome: string, email: string) => {
        let users = await api.post('/users', {
            name: nome,
            email: email
        }).then((response) => response.status)
        .catch((error) => setMessageError(error))

        return users
    },
}