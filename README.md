# \<my-component>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
yarn add my-component
```

## Usage

```html
<script type="module">
  import 'my-component/my-component.js';
</script>

<my-component></my-component>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

To automatically fix many linting errors, run

```bash
npm run format
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
