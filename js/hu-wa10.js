var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

const alts = ['A mountain surrounded by fog.','a green and pink spiral','a very cute bunny','an ocean wave.','a field of California Poppies.'];

/* img loop access */
  function thumbnailLoop() {
  var i;
  for (i = 0; i < 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "/img/pic" + (i+1) + ".jpg");
  newImage.setAttribute('alt',alts[i]);
  thumbBar.appendChild(newImage);
}
}

thumbnailLoop();

/* click thumbnail --> main img */
thumbBar.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}
}); 

/* darken/lighten button */
btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});