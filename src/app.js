import m from 'mithril'
import css from './css/app'

m.route.prefix('#')
m.route(document.body, '/', {
    '/': {
        view: vnode => {
            return [
                m('h1', 'Hello world!')
            ]
        }
    }
})