import { createStore } from 'vuex';


export default createStore({
    state: {
        user: {
            id: 1,
            name: 'Pedro',
            email: 'pedro@email.com'
        }
    },
})