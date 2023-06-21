// Define animation frames
const sprite = new Image();
sprite.src = 'assets/img/KyleSpriteSheet.png';

const frameWidth = 48;
const frameHeight = 96;
const numFrames = 24;
const frames = [];
for (let i = 0; i < numFrames; i++) {
  frames.push({ x: i * frameWidth, y: 0 });
}

// Define animation state
let currentFrame = 0;

// Get canvas element and context
const canvas = document.getElementById('sprite-animation');
const ctx = canvas.getContext('2d');

// Define animation speed
const frameRate = 5; // Change this value to adjust the animation speed

// Draw animation frame
function drawFrame() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw current frame
  const frame = frames[currentFrame];
  ctx.drawImage(sprite, frame.x, frame.y, frameWidth, frameHeight, 0, 0, canvas.width, canvas.height);

  // Update current frame
  currentFrame = (currentFrame + 1) % numFrames;

  // Request next frame
  setTimeout(() => {
    drawFrame();
  }, 1000 / frameRate);
}

// Start animation loop
drawFrame();

// Export animation module
export default function() {
  return {
    play: function() {
      drawFrame();
    },
    pause: function() {
      clearTimeout();
    }
  };
}
