const grid = document.querySelector('#grid');
for (let row = 0; row < 16; row++) {
    for (let cell = 0; cell < 16; cell++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.background = 'red';
        });
        grid.appendChild(div);
    }
}