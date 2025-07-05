class AccordionCustom extends HTMLElement {
  constructor() {
    super();
    this.accordions = this.querySelectorAll('.js-accordion-title');
    this.isMultiple = this.dataset.multiple === 'true';
  }

  connectedCallback() {
    this.handleClick();
  }
  setMultipleMode(isMultiple) {
    this.isMultiple = isMultiple;
  }

  handleClick() {
    this.accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const accordionParent = accordion.parentElement;
        const accordionContent = accordion.nextElementSibling;
        const isCurrentlyOpen = accordionParent.hasAttribute('is-active');

        // Nếu đang ở chế độ 1 mục & mục này đang mở → chỉ đóng nó
        if (!this.isMultiple && isCurrentlyOpen) {
          accordionParent.removeAttribute('is-active');
          accordionContent.style.maxHeight = 0;
          return;
        }

        // Nếu đang ở chế độ 1 mục & mục này chưa mở → đóng hết rồi mở
        if (!this.isMultiple) this.closeAllItem();

        accordionParent.toggleAttribute('is-active');
        accordionContent.style.maxHeight = accordionParent.hasAttribute('is-active')
          ? accordionContent.scrollHeight + 'px'
          : 0;
      });
    });
  }

  closeAllItem() {
    this.accordions.forEach((accordion) => {
      const accordionParent = accordion.parentElement;
      const accordionContent = accordion.nextElementSibling;

      accordionParent.removeAttribute('is-active');
      accordionContent.style.maxHeight = 0;
    });
  }
}

if (!customElements.get('accordion-custom')) {
  customElements.define('accordion-custom', AccordionCustom);
}
