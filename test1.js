helpSprites = new Image();
helpSprites.src = 'https://raw.githubusercontent.com/natetarrh/frogger/master/assets/frogger_sprites.png';
helpSprites.onload = function() {
  alert('sprites loaded');
};

function stamp(imageName, x, y) {
    x = if (x) ? x : 0;
    y = if (y) ? y: 0;
    var board = document.getElementById('game');
    var context = board.getContext('2d');
    // Cars
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
    // Logs
    } else if (imageName == 'big-log' || imageName == 'biglog') {
      context.drawImage(helpSprites, 6, 165, 179, 21, x, y, 179, 21);
    } else if (imageName == 'medium-log' || imageName == 'mediumlog' || imageName == 'log') {
      context.drawImage(helpSprites, 5, 197, 118, 21, x, y, 118, 21);
    } else if (imageName == 'small-log' || imageName == 'smalllog') {
      context.drawImage(helpSprites, 6, 229, 85, 22, x, y, 85, 22);
    // Background
    } else if (imageName == 'frogger-banner' || imageName == 'banner') {
      // frogger banner goes at 0, 0
      context.drawImage(helpSprites, 0, 0, 399, 113, x, y, 399, 113);
    } else if (imageName == 'purple-sidewalk' || imageName == 'sidewalk') {
      // purple sidewalk goes at 0,283 and 0,495
      context.drawImage(helpSprites, 0, 119, 399, 34, x, y, 399, 34);
    // frogs
    } else if (imageName == 'safe-frog' || imageName == 'safe') {
      context.drawImage(helpSprites, 80, 369, 23, 17, x, y, 23, 17);
    } else if (imageName == 'frog') {
      context.drawImage(helpSprites, 12, 369, 23, 17, x, y, 23, 17);
    }
}
