# Deno JSX Web Component minimal repro.

When using a 3rd party Web Component (Custom Element) without an accompanying `.d.ts` file in JSX, one needs to use Typescript’s Module Augmentation to add the custom element to JSX’s table of known elements.

This minimal repo. contains two different projects using the same Web Component (`<stop-watch>` from https://webcomponents.guide/learn/). The folder `preact-webcomponent` contains a plain `preact-vite` project, bootstrapped via the `preact-cli`, with the `<stop-watch>` component served from the `/public` folder. In the `fresh-webcomponent` folder there is a Deno Fresh project using the same web component served from the `static` folder. Both projects do not use a `.d.ts` file for the Web Component, however, both do use Typescript’s Module Augmentation to add the `<stop-watch>` element to the JSX namespace.

The Preact project will happy accept the Web Component, render in the client and not show any errors in VSCode. The Deno Fresh project will render the Web Component in the client but complains about not knowing about the `<stop-watch>` element in VSCode.

## Preact project

### Usage

Make sure to install [`node.js`](https://nodejs.org/) (recommended to install via [`nvm`](https://github.com/nvm-sh/nvm)) and enter the `preact-webcomponent` folder.

Install and start the project:

```
npm i && npm run dev
```


## Fresh project

### Usage

Make sure to install Deno and enter the `fresh-webcomponent` folder.

Then start the project:

```
deno task start
```
