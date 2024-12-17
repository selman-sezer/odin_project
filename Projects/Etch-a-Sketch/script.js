// FUNCTIONS
function createRandomColor()
{
    let r = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(n)
{
    // main container for the grid
    const containerMain = document.createElement('div');
    containerMain.setAttribute('class', 'mainContainer');

    const body = document.querySelector('body');

    for (let index = 0; index < n; index++) {
        let group = document.createElement('div');
        group.setAttribute('class', 'groupOf4');
    
        for (let k = 0; k < n; k++) {
            let grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            group.appendChild(grid);
        }
        containerMain.appendChild(group);
    }
    
    body.appendChild(containerMain);
}


createGrid(4);
// hover
const containerMain = document.querySelector('.mainContainer');

containerMain.addEventListener('mouseover', (e)=>{
    let target = e.target;
    if (target.classList.contains('grid')) {
        let color = createRandomColor();
        target.style.backgroundColor = color;
    }
});

// containerMain.addEventListener('mouseout', (e)=>{
//     let target = e.target;
    
//     if (target.classList.contains('grid')) {

//         let color = createRandomColor();
        
//         target.style.backgroundColor = color;
//         // target.style.backgroundColor = ''
//     }
// });

containerMain.addEventListener('mousemove', (e)=>{
    let target = e.target;
    
    if (target.classList.contains('grid')) {

        // ========

        const trailElement = document.createElement('div');
        
        // Set initial position of the trail element to where the mouse is
        trailElement.style.position = 'absolute';
        trailElement.style.left = `${e.pageX - 3}px`; // Adjust the positioning of the trail element
        trailElement.style.top = `${e.pageY - 3}px`; // Adjust the positioning of the trail element
        trailElement.style.width = '8px'; // Width of the trail
        trailElement.style.height = '8px'; // Height of the trail
        trailElement.style.borderRadius = '50%'; // Make it a circle
        trailElement.style.backgroundColor = 'black'; // Color of the trail
        trailElement.style.pointerEvents = 'none'; // Prevent the trail from interfering with other elements
        
        // Append the trail element to the body or containerMain
        containerMain.appendChild(trailElement);
    
        // Fade the trail element out after a short time and then remove it
        setTimeout(() => {
            trailElement.style.transition = 'opacity 0.5s';
            trailElement.style.opacity = '0';
            
            // Remove the element after fade-out
            setTimeout(() => {
                trailElement.remove();
            }, 500); // Time after which element is removed (same as fade-out duration)
        }, 0);


        

    }
});





const btnAskUser = document.createElement('button');
btnAskUser.textContent = 'Press the button to enter the number of grids !!!';
body.insertBefore(btnAskUser, body.childNodes[0]);

btnAskUser.addEventListener(()=>{
    let numberOfGrid = prompt('Please enter the number');
    createGrid(numberOfGrid);
});

