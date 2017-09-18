function test_one() {
  alert('trying test one again');
}

helpSprites = new Image();
helpSprites.src = 'https://raw.githubusercontent.com/natetarrh/frogger/master/assets/frogger_sprites.png';
helpSprites.onload = function() {
  alert('sprites loaded');
};

function draw_sprite(x, y) {
  alert('x is ' + x + ' and y is ' + y);
}

test_one();
