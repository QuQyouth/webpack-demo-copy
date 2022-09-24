import './css/style.scss'
import png from './assets/image/1.png'

const div = document.getElementById('app')
div.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise =
        import ('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {})
}

div.appendChild(button)