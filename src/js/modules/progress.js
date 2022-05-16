const progress = document.querySelector('.progress');
const dashboard = document.querySelector('.dashboard');

const progress__next = document.querySelector('#progress__next');

export default function(){
    progress__next.addEventListener('click',()=>{
        progress.classList.remove('show');
        dashboard.classList.add('show');
    })
}