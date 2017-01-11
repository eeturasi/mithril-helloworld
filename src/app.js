import m from 'mithril'

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