import axios from 'axios'

class UserService {
    constructor(){
        let service = axios.create({
            baseURL: 'https://perseo-api.herokuapp.com/api/auth'
        })
        this.service = service
    }
    getAllUsers = () => {
        return this.service.get('')
            .then(response => response.data)
    }
    getUserByEmail = (email, password) => {
        const user = {
            email,
            password
        }
        console.log(user)
        return this.service.post('/signin', user)
            .then(response => response.data)
    }
    createNewUser = (name, surname, email, password) => {
        const birthAge = 1990
        const admin = false
        const newUser = 
            {
                name,
                surname,
                email,
                password,
                birthAge,
                admin
            }
        return this.service.post('/signup', newUser)
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
