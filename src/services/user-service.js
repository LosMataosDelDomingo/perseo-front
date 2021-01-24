import axios from 'axios'

class UserService {
    constructor(){
        let service = axios.create({
            baseURL: 'https://perseo-api.herokuapp.com/api'
        })
        this.service = service
    }
    getAllUsers = () => {
        return this.service.get('')
            .then(response => response.data)
    }
    getUserById = (idUser, extended) => {
        return this.service.get(`/${idUser}/${extended}?`)
            .then(response => response.data)
    }
    createNewUser = (name, surname, email, password, phone) => {
        return this.service.post('/users', {name, surname, email, password, phone})
            .then(response => response.data)
    }
    updateUser = (updatedUser) => {
        return this.service.patch('', {updatedUser})
            .then(response => response.data)
    }
    deleteUser = (deletedUser) => {
        return this.service.delete('', {deletedUser})
            .then(response => response.data)
    }
}

export default UserService
