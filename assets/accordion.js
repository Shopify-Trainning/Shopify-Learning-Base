document.addEventListener('DOMContentLoaded', function () {


  const accordionHeaders = document.querySelectorAll('.accordion__header');

  accordionHeaders.forEach((accordion) => {
    accordion.addEventListener('click', function () {
      const activeAccordion = document.querySelector('.accordion__header.active');

      if (activeAccordion && activeAccordion !== accordion) {
        activeAccordion.classList.remove('active');
        const activeBody = activeAccordion.nextElementSibling;
        if (activeBody) activeBody.style.maxHeight = 0;
        activeAccordion.querySelector('.accordion__icon').textContent = '+';
      }

      accordion.classList.toggle('active');
      const accordionBody = accordion.nextElementSibling;

      if (accordion.classList.contains('active')) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        accordion.querySelector('.accordion__icon').textContent = '−';
      } else {
        accordionBody.style.maxHeight = 0;
        accordion.querySelector('.accordion__icon').textContent = '+';
      }
    });
  });
});
