import axios from 'axios'

const baseUrl = '/api/notes/'
const getAll = () => {
    return axios.get(baseUrl);
}

const create = (note) => {
    return axios.post(baseUrl, note);
}

const update = (note, id) => {
    return axios.put(`${baseUrl}/${id}`, note);
}


export default {
    getAll,
    create,
    update,
}
