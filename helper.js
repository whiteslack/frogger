(function() {

  alert('try loading sprites');
  helpSprites = new Image();
  helpSprites.src = 'https://raw.githubusercontent.com/natetarrh/frogger/master/assets/frogger_sprites.png';
  helpSprites.onload = function() {
    alert('sprites loaded');
    $('#testp').html('why');
  };

  var drawSprite = function (imageName, x, y) {
    document.getElementById('game');
    context = board.getContext('2d');
    if (imageName == 'pinkcar' || imageName == 'pink-car' || imageName == 'pink') {
      context.drawImage(helpSprites, 8, 265, 30, 22, x, y, 30, 22);
    } else if (imageName = 'bulldozer') {
      context.drawImage(helpSprites, 9, 300, 24, 21, x, y, 24, 21);
    }
  };

  //window['frogger_drawSprite'] = drawSprite;

})();
