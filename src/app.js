import m from 'mithril'
import css from './css/app'

m.route(document.body, '/', {
    '/': {
        view(vnode) {
            return [
                m('h1', [
                    m('a', {href: '#!/hello'}, 'Hello world!')
                ]),
                m('button', {onclick: e => {
                    m.route.set('/hello')
                }}, 'Hello!')
            ]
        }
    },
    '/hello': {
        view(vnode) {
            return [
                m('h1', 'Hi!')
            ]
        }
    }
})
