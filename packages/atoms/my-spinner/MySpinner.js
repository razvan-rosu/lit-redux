import { html, LitElement } from 'lit-element';
/* stylesheet */
import styles from './MySpinner.style.js';

export class MySpinner extends LitElement {
  static get is() {
    return 'my-spinner';
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <i class="Spinner"></i
      ><!--
      --><span class="Label">Loading...</span>
    `;
  }
}
