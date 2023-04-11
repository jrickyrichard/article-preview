window.addEventListener('DOMContentLoaded', function(){
    let share = document.querySelector('#share').querySelector('svg').querySelector('path');
    let pop = document.querySelector('#pop');
    let arrow = document.querySelector('#arrow-down')

    document.querySelector('#share').addEventListener('mousedown', () => {
        console.log('click')
        pop.classList.toggle('invisible');
        share.setAttribute('fill', '#fff');
    });

    document.querySelector('#share').addEventListener('click', () => {
        share.setAttribute('fill', 'hsl(214, 17%, 51%)');
    });


})