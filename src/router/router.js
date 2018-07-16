import App from '../components/App';

console.log(App)

export default [
    {
        path: '/',
        component: App,
        children: [{
            path: '',
            component: r => require.ensure([], () => r(require('../components/home')), 'home')
        },
        {
            path: 'test',
            component: r => require.ensure([], () => r(require('../components/test')), 'test')
        },
        {
            path: 'test/:id',
            component: r => require.ensure([], () => r(require('../components/test')), 'test'),
            props:true
        }]
    }
]