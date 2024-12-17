// main container
const containerMain = document.createElement('div');
containerMain.setAttribute('class', 'mainContainer');

const body = document.querySelector('body');



for (let index = 0; index < 4; index++) {
    let groupOf4 = document.createElement('div');
    groupOf4.setAttribute('class', 'groupOf4');

    for (let k = 0; k < 4; k++) {
        let grid = document.createElement('div');
        // grid.textContent = `grid ${index} ${k}`
        grid.setAttribute('class', 'grid');
        groupOf4.appendChild(grid);
    }
    containerMain.appendChild(groupOf4);

}

body.appendChild(containerMain);

