import axios from 'axios'

class WorkService {
    constructor(){
        let service = axios.create({
            baseURL: 'https://perseo-api.herokuapp.com/api/work'
        })
        this.service = service
    }
    getWorkExperience = (userID) => {
        return this.service.get(`/${userID}`)
            .then(response => response.data)
    }
    addWorkExperience = (newWork) => {
        return this.service.post('/', {newWork})
            .then(response => response.data)
    }
    deleteWorkExperience = (work) => {
        return this.service.delete('/', {work})
            .then(response => response.data)
    }
    updateWorkExperience = (work) => {
        return this.service.patch('/', {work})
            .then(response => response.data)
    }
}

export default WorkService