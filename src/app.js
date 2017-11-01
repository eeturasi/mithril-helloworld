import m from 'mithril'
import css from './css/app'

m.route(document.body, '/', {
    '/': {
        view(vnode) {
            return [
                m('h1', [
                    m('a', {href: '#!/hello'}, 'Hello world!')
                ])
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
