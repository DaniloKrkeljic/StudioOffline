let cursorNodeH = document.getElementById('crosshair-h')
let cursorNodeV = document.getElementById('crosshair-v');


let bjelilo = document.getElementById('bjelilo');
let h3 = document.getElementById('naslov');

rect = bjelilo.getBoundingClientRect();

bjelilo.addEventListener('mousemove touchmove',(e) => {
  cursorNodeH.style.top = e.clientY + 'px';
  cursorNodeV.style.left = e.pageX + 'px';

  // console.log(e.pageX, e.offsetY)
});




