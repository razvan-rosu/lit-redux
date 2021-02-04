import { MySpinner } from './MySpinner.js';

if (!customElements.get(MySpinner.is)) {
  customElements.define(MySpinner.is, MySpinner);
}
