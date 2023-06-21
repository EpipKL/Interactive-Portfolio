



const canvas = document.getElementById('m-canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

console.log(CANVAS_HEIGHT, CANVAS_WIDTH);

const playerImage = new Image();
playerImage.src = 'img/KyleSpriteSheet.png';

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50,50,100,100)
    requestAnimationFrame(animate);
}

animate();