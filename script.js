function newGradient() {
  var c1 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  var c2 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
  c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
  return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
  $('.bg.hidden').css('background', newGradient());
  $('.bg').toggleClass('hidden');
}
