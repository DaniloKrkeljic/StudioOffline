let cursorNodeH = document.getElementById('crosshair-h')
let cursorNodeV = document.getElementById('crosshair-v');


let bjelilo = document.getElementById('bjelilo');
let h3 = document.getElementById('naslov');

rect = bjelilo.getBoundingClientRect();

if(window.innerWidth <= 480){
  bjelilo.addEventListener("touchmove",(e) => {
    cursorNodeH.style.top = e.touches[0].clientY + 'px';
    cursorNodeV.style.left = e.touches[0].pageX + 'px';
  
    // console.log(e.pageX, e.offsetY)
  });
} else {
  bjelilo.addEventListener("mousemove",(e) => {
    cursorNodeH.style.top = e.clientY + 'px';
    cursorNodeV.style.left = e.pageX + 'px';
  
    // console.log(e.pageX, e.offsetY)
  });
}

let crnilo = document.querySelector('.crnilo')

crnilo.addEventListener('click', (e) => {
  smoothScroll(e);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetPosition = bjelilo.offsetTop +1;
  const startPosition = 0;
  const distance = targetPosition - startPosition;
  const duration = 1500;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutQuart(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}



function easeInOutExpo(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
}

function easeInOutCirc(t, b, c, d) {
	t /= d/2;
	if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	t -= 2;
	return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
}

function easeInOutQuart (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
};
