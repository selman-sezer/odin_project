// FUNCTIONS
function createRandomColor()
{
    let r = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}


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



// hover

containerMain.addEventListener('mouseover', (e)=>{
    let target = e.target;
    if (target.classList.contains('grid')) {
        // target.classList.add('changeBackground');
        // target.style.backgroundColor = 'red';

        let color = createRandomColor();
        target.style.backgroundColor = color;
    }
});

containerMain.addEventListener('mouseout', (e)=>{
    let target = e.target;
    
    if (target.classList.contains('grid')) {
        // target.classList.remove('changeBackground');

        let color = createRandomColor();
        
        target.style.backgroundColor = color;
        // target.style.backgroundColor = ''
    }
});

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
        // setTimeout(() => {
        //     trailElement.style.transition = 'opacity 0.5s';
        //     trailElement.style.opacity = '0';
            
        //     // Remove the element after fade-out
        //     setTimeout(() => {
        //         trailElement.remove();
        //     }, 500); // Time after which element is removed (same as fade-out duration)
        // }, 0);


        // ========
        

    }
});





const btnAskUser = document.createElement('button');
btnAskUser.textContent = 'Please enter the number of squares per side for the new grid';
body.insertBefore(btnAskUser, body.childNodes[0]);
