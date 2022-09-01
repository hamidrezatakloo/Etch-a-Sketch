const container = document.querySelector('.container');
const size = 16;
for(let i =0; i<size; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j =0; j<size; ++j){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height =`${100/size}% `;
        row.appendChild(square);
    }
}


document.addEventListener('mouseover',(e)=>{
    if (! e.target.matches('.row > .square'))
        return;    
})