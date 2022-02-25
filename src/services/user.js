import { http } from './config'

export default {
    register: ({name, email, password}) => {
        return http.post('user', {name, email, password})
    }
}