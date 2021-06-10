let lastKnownScrollPosition = 0;
let ticking = false;

function header(scrollPos) {
  var header = document.querySelector('header');
  if (header) {
    if (scrollPos > 540) {
      if (header.className === "invert") {
        header.className = "";
        setTimeout(function() {
          document.querySelector('#logo').style.display = 'block';
        }, 500);
      }
    } else {
      if (header.className !== "invert") {
        header.className = "invert";
      }
    }
  }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      header(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});