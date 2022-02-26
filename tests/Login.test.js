import { mount } from '@vue/test-utils'
import MyInput from '../src/components/MyInput.vue'
import Login from '../src/components/Login.vue'
import router from '../src/router'
import { isExportDeclaration } from 'typescript'


test('formulario de login com mock de ação', async () => {
    const wrapper = mount(Login, {
        global: {
            components: {
                MyInput
            },
            plugins: [router]
        }
    })
    await router.isReady()
    wrapper.setData({
        user: {
            email: 'pedro@email.com',
            password: '12345678'

        }
    })
    wrapper.vm.log = function(){
        wrapper.setData({
            state: 'Loading...'
        })
    }
    const button = wrapper.find('input[type=submit]')
    isExportDeclaration(button.attributes('value')).toEqual('Loading...')
})