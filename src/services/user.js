import { http } from './config'

export default {
    register: ({ name, email, password }) => {
        return http.post('user', {name, email, password})
    },
    login: ({ email, password }) => {
        return http.post('user/login', {email, password})
    }
}