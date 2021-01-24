import axios from 'axios'

class EducationService {
    constructor(){
        let service = axios.create({
            baseURL: 'https://perseo-api.herokuapp.com/api/education'
        })
        this.service = service
    }
    getEducation = (userID) => {
        return this.service.get(`/${userID}`)
            .then(response => response.data)
    }
    deleteEducation = (education) => {
        return this.service.delete('/', {education})
            .then(response => response.data)
    }
    updateEducation = (education) => {
        return this.service.patch('/', {education})
            .then(response => response.data)
    }
    addEducation = (newEducation) => {
        return this.service.post('/', {newEducation})
            .then(response => response.data)
    }
}