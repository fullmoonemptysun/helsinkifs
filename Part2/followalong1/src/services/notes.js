import axios from 'axios'


const getAll = () => {
    return axios.get("http://localhost:3001/notes");
}

const create = (note) => {
    return axios.post("http://localhost:3001/notes", note);
}

const update = (note, id) => {
    return axios.put(`http://localhost:3001/notes/${id}`, note);
}


export default {
    getAll,
    create,
    update,
}
