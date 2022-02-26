import { mount } from '@vue/test-utils'
import Register from '../src/components/Register.vue'
import MyInput from '../src/components/MyInput.vue'

test('formulário de registro com mock de ação', async () =>{
    const wrapper = mount(Register, {
        global: {
            components: {
                MyInput
            }
        }
    })

    wrapper.setData({
        user: {
            name: 'Pedro',
            email: 'pedro@email.com',
            password: '12345678'
        }
    })

    wrapper.vm.register = function () {
        wrapper.setData ({
            state: 'Loading...'
        })
    }
    const button = wrapper.find('input[type=submit]')
    await button.trigger('click')
    
    expect(button.attributes('value')).toEqual('Loading...')
})