import { mount } from '@vue/test-utils'
import Input from '../src/components/Input.vue'


test('componente sendo incializado com titulo Nome', () =>{
    const wrapper = mount(Input, {
        props: {
            titulo: 'Name'
        }
    })
    expect(wrapper.find('legend').text()).toEqual('Name')
})