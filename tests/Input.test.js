import { mount } from '@vue/test-utils'
import MyInput from '../src/components/MyInput.vue'


test('componente sendo incializado com titulo Nome', () =>{
    const wrapper = mount(MyInput, {
        props: {
            titulo: 'Name'
        }
    })
    expect(wrapper.find('legend').text()).toEqual('Name')
})