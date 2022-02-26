import { mount } from '@vue/test-utils'
import Panel from '../src/components/Panel.vue'
import router from '../src/router'
import mockVuex from './mockvuex'

test('verificando nome no painel', async () => {
    const wrapper = mount(Panel, {
        global: {
            plugins: [router, mockVuex],
            mocks: {
                emitter: {on: () => {}, emit: () => {} }
            }
        }
    })
    await router.isReady()
    const span = wrapper.find('span')
    expect(span.text()).toEqual('Painel logado com Pedro')
})

test('saindo do sistema com mock, verificando se botão está lá', async () => {
    const wrapper = mount(Panel, {
        global: {
            plugins: [router, mockVuex],
            mocks: {
                emitter: {on: () => {}, emit: () => {}}
            }
        }
    })
    let action = ''
    wrapper.vm.logout = function(){
        action = 'Logged Out'
    }
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(action).toEqual('Logged Out')
})