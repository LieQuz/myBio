// がんばりました

window.addEventListener('DOMContentLoaded', function () {
  console.log('it correctly loaded');
  cursor = document.getElementById('cursor');
  if (!cursor) {
    console.error('Cursor element not found!')
    return;
  }
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let sizeWidth = 0;
  let sizeHeight = 0;

  const buttons = document.querySelectorAll('.button');

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    let isHoveringButton = false;
    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      if (
        cursorX > rect.left &&
        cursorX < rect.right &&
        cursorY > rect.top &&
        cursorY < rect.bottom
      ) {
        isHoveringButton = true;
      }
    });

    if (isHoveringButton) {

      sizeWidth += (13 - sizeWidth) * 0.05;
      sizeHeight += (13 - sizeHeight) * 0.05;

      cursor.style.backgroundColor = 'rgb(255, 255, 255)';
      cursor.style.width = sizeWidth + 'px';
      cursor.style.height = sizeHeight + 'px';

    } else {

      sizeWidth += (10 - sizeWidth) * 0.05;
      sizeHeight += (10 - sizeHeight) * 0.05;

      cursor.style.backgroundColor = 'rgba(200, 115, 233, 0.4)';
      cursor.style.width = sizeWidth + 'px';
      cursor.style.height = sizeHeight + 'px';
    }
    requestAnimationFrame(animateCursor);
  }

  animateCursor();
});