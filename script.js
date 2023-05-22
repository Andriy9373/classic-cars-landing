document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach(el => {
        el.classList.toggle('change');
    });
})

document.querySelectorAll('.wrapper').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach(el => {
            el.classList.remove('change');
        }); 
    })
})

document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    })
    video.addEventListener('mouseout', () => {
        video.pause();
    })
})

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
})