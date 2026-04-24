import axios from 'axios'


const baseUrl = "/api/persons"

const getAll = () => {
    const request = axios.get(`${baseUrl}`);

    return request.then(response => response.data);
}

const update = (newContact, id) => {
    const request = axios.put(`${baseUrl}/${id}`, newContact);
    return request.then(response => response.data);
}

const del = (id) => {
    const request  = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

const create = (person) => {
    const request = axios.post(`${baseUrl}`, person);
    return request.then(response => response.data);
}


export default {
    getAll,
    update,
    del,
    create,
}

