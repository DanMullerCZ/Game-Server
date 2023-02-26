// const startButton = document.getElementById('startGame');

// startButton.addEventListener('click', (e) => {
//     startGame();
// });

// function startGame() {
//     container.removeChild();
// }

const container = document.getElementById('container');

const div = document.createElement('div');
let posY = 200;
div.className = 'player';
div.style.position = 'relative';
div.style.left = '0px';
div.style.top = '200px';
div.style.width = '15px';
div.style.height = '50px';
div.style.background = 'black';

container.appendChild(div);

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowDown'){
        posY += 3;
        if (posY > 370){
            posY -= 3;
        }
        div.style.top = posY + 'px';
    }
    if (e.code === 'ArrowUp'){
        posY -= 3;
        if (posY < 0){
            posY += 3;
        }
        div.style.top = posY + 'px';
    }
});
