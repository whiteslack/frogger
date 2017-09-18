helpSprites = new Image();
helpSprites.src = 'https://raw.githubusercontent.com/natetarrh/frogger/master/assets/frogger_sprites.png';
helpSprites.onload = function() {
  alert('sprites loaded');
};

function draw_sprite(imageName, x, y) {
    document.getElementById('game');
    context = board.getContext('2d');
    if (imageName == 'pinkcar' || imageName == 'pink-car' || imageName == 'pink') {
      context.drawImage(helpSprites, 8, 265, 30, 22, x, y, 30, 22);
    } else if (imageName == 'whitecar' || imageName == 'white-car' || imageName == 'white') {
      context.drawImage(helpSprites, 45, 264, 29, 24, x, y, 29, 24);
    } else if (imageName == 'yellowcar' || imageName == 'yellow-car' || imageName == 'yellow') {
      context.drawImage(helpSprites, 81, 263, 24, 26, x, y, 24, 26);
    } else if (imageName = 'bulldozer') {
      context.drawImage(helpSprites, 9, 300, 24, 21, x, y, 24, 21);
    } else if (imageName = 'truck') {
      context.drawImage(helpSprites, 105, 301, 46, 19, x, y, 46, 19);
    }
}

test_one();
