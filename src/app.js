import m from 'mithril'

m.route.mode = 'hash'
m.route(document.body, '/', {
    '/': {
        view: ctrl => {
            return [
                m('h1', 'Hello world!')
            ]
        }
    }
})