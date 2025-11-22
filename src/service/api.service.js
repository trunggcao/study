import axios from './axios.customize';

const CreateUserAPI = (email, username) => {

    const URL_BACKEND = "/users";
    const data = {

        email: email,
        username: username
    }
    return axios.post(URL_BACKEND, data)
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/users";
    return axios.get(URL_BACKEND)

}

export {
    CreateUserAPI, fetchAllUserAPI
}