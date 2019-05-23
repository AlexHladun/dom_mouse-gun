'use strict';
function destroTarget() {
  document.addEventListener('click', (evnt) => {
    const target = document.elementFromPoint(evnt.clientX, evnt.clientY);
    target.remove();
  });
};
destroTarget();
