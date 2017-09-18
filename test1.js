function test_one() {
  alert('trying test one again');
}

helpSprites = new Image();
helpSprites.src = 'https://raw.githubusercontent.com/natetarrh/frogger/master/assets/frogger_sprites.png';
helpSprites.onload = function() {
  alert('sprites loaded');
  $('#testp').html('why');
};

test_one();
