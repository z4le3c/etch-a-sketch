function createGrid(size) {
    let grid = document.querySelector('#grid');
    const newGrid = document.createElement('div');
    newGrid.setAttribute('id', 'grid');
    grid.replaceWith(newGrid);
    grid = document.querySelector('#grid');
    for (let row = 0; row < size; row++) {
        for (let cell = 0; cell < size; cell++) {
            const div = document.createElement('div');
            div.style.width = `${100/size}%`
            div.style.height = `${100/size}%`
            div.addEventListener('mouseover', () => {
                let red = Math.floor(Math.random() * 256)
                let green = Math.floor(Math.random() * 256)
                let blue = Math.floor(Math.random() * 256)
                div.style.background = `rgb(${red}, ${green}, ${blue})`;
            });
            grid.append(div);
        }
    }    
}

const button = document.querySelector('#change-size-b')
button.addEventListener('click', () => {
    let size = +prompt('Size(min: 1, max: 100):', 16);

    if (!size || ! (0 < size && size < 101)) size = 16;

    createGrid(size)
});

createGrid(16);