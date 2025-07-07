class FooterCustom extends HTMLElement {
  constructor() {
    super();
    this.checkbox = this.querySelectorAll('.js-footer-checkbox');
    this.button = this.querySelectorAll('.js-footer-button');
  }
  connectedCallback() {
    this.handleCheckbox();
  }

  handleCheckbox() {
    this.checkbox.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        this.button.forEach((btn) => {
          btn.disabled = !isChecked;
        });
      });
    });
  }
}
if (!customElements.get('footer-custom')) {
  customElements.define('footer-custom', FooterCustom);
}
