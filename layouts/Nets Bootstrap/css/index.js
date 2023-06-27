(function() {
    const element = document.querySelector('nav');
    let startX;
    let scrollLeft;
    element.addEventListener('mouseup', () => element.classList.remove('scrolling'));
    element.addEventListener('mousedown', (e) => {
      element.classList.add('scrolling');
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    });
    const move = (x) => {
      if (!element.classList.contains('scrolling')) {
        return;
      }
      const walk = (x - startX) * 3;
      element.scrollLeft = scrollLeft - walk;
    };
    element.addEventListener('mousemove', (e) => move(e.pageX - element.offsetLeft));
  })();