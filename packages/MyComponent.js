import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../src/redux/store.js';
import { setSpinner, setError, setData } from '../src/redux/actions.js';
/* calls */
import { getPosts, getCrash } from '../src/requests.js';
/* stylesheet */
import styles from './MyComponent.style.js';
/* components */
import './atoms/my-spinner/my-spinner.js';

export class MyComponent extends connect(store)(LitElement) {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      isLoading: Boolean,
      hasError: Boolean,
      data: Array,
    };
  }

  stateChanged(state) {
    this.isLoading = state.isLoading;
    this.hasError = state.hasError;
    this.data = state.data;
  }

  render() {
    return html`
      <h2>Hello world!</h2>

      <button @click=${MyComponent.__getPosts}>Fetch data</button>
      <button @click=${MyComponent.__getCrash}>Trigger error</button>
      <button @click=${this.__setSpinner}>Toggle spinner</button>
      ${this.isLoading ? html`<my-spinner></my-spinner>` : ''}

      <br /><br />

      <div>isLoading: ${this.isLoading}</div>
      <div>hasError: ${this.hasError}</div>
      <div>data: ${this.data}</div>
    `;
  }

  __setSpinner() {
    store.dispatch(setSpinner(!this.isLoading));
  }

  static async __getPosts() {
    try {
      const response = await getPosts();
      store.dispatch(setData(response.data));
    } catch (error) {
      store.dispatch(setError(true));
      throw new Error('ERROR __getPosts(): ', error);
    }
  }

  static async __getCrash() {
    try {
      const response = await getCrash();
      store.dispatch(setData(response.data));
    } catch (error) {
      store.dispatch(setError(true));
      throw new Error('ERROR __getCrash(): ', error);
    }
  }
}
