import { html } from 'lit-html';
import '../my-component.js';

export default {
  title: 'MyComponent',
  component: 'my-component',
};

export const Default = () => html`<my-component></my-component>`;
