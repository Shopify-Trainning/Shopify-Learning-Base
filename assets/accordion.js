class AccordionCustom extends HTMLElement {
  constructor() {
    super();

    this.isSingle = this.dataset.single === 'true';
    this.accordions = this.querySelectorAll('.js-accordion-title');
  }

  connectedCallback() {
    this.handleClick();
  }

  closeAllItem() {
    this.accordions.forEach((accordion) => {
      const accordionParent = accordion.parentElement;
      const accordionContent = accordion.nextElementSibling;

      accordionParent.removeAttribute('is-active');
      accordionContent.style.maxHeight = 0;
    });
  }

  handleClick() {
    this.accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        if (this.isSingle) this.closeAllItem();

        const accordionParent = accordion.parentElement;
        const accordionContent = accordion.nextElementSibling;

        accordionParent.toggleAttribute('is-active');
        accordionContent.style.maxHeight = accordionParent.hasAttribute('is-active')
          ? accordionContent.scrollHeight + 'px'
          : 0;
      });
    });
  }
}

if (!customElements.get('accordion-custom')) {
  customElements.define('accordion-custom', AccordionCustom);
}
