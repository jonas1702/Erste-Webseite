const infoBtn = Array.from(document.querySelectorAll('.info-button'))
infoBtn.forEach(element => {
    element.addEventListener('click', () => {
        let nextElm = element.previousSibling
        let nextChild = nextElm.nextChild
        console.log(nextChild)
    })
});

/*return to top*/
document.getElementById('return').addEventListener('click', () => window.scrollTo(0, 0));

const modules = document.querySelector('#module-button')
const moreModules = document.querySelector('#more-Modules')
let change = 0

modules.addEventListener('click', () => {
    if (change == 0) {
        moreModules.classList.remove(' display-none')
        change = 1
    } else {
        moreModules.classList.add(' display-none')
        change = 0
    }
    
})