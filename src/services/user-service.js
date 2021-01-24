import axios from 'axios'

class UserService {
    constructor(){
        let service = axios.create({
            baseURL: 'https://perseo-api.herokuapp.com/api/users'
        })
        this.service = service
    }
    getAllUsers = () => {
        return this.service.get('/')
            .then(response => response.data)
    }
    getUserById = (idUser, extended) => {
        return this.service.get(`/${idUser}/${extended}?`)
            .then(response => response.data)
    }
    createNewUser = (newUser) => {
        return this.service.post('/', {newUser})
            .then(response => response.data)
    }
    updateUser = (uptadedUser) => {
        return this.service.patch('/', {updatedUser})
            .then(response => response.data)
    }
    deleteUser = (deletedUser) => {
        return this.service.delete('/', {deletedUser})
            .then(response => response.data)
    }
}

export default UserService
