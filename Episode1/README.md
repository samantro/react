# Episode 1 Notes: React Basics

These notes explain the React 18 example in [index.html](./index.html),
[App.js](./App.js), and [index.css](./index.css).

## 1. What is React?

React is a JavaScript library for building user interfaces. You describe what the
UI should look like, and React works out how to update it when the description
changes. This is called **declarative UI**.

React can manage a small part of an existing page; it does not have to control the
whole website. In this episode, it manages the contents of `<div id="root">`.

## 2. CDN versus MDN

- **CDN (Content Delivery Network):** Delivers files over the internet. Our React
  scripts are downloaded from the UNPKG CDN.
- **MDN Web Docs:** A reference for HTML, CSS, JavaScript, and browser APIs. MDN
  explains browser concepts and has a React introduction, but it does not supply
  the React scripts used here.
- **React documentation:** The official reference for React and React DOM APIs.

So the two script URLs in this episode are **CDN links**, not MDN links.

## 3. React CDN link: the five W's

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

| Question | Answer |
| --- | --- |
| **What** is it? | The React 18 development build. It provides core React APIs such as `React.createElement()`. |
| **Why** do we use it? | To describe our UI using React elements instead of manually creating every DOM node. |
| **Who** provides and uses it? | The React team maintains React, UNPKG serves the package file, and our application calls its APIs. |
| **When** does it load? | When the browser reaches this script tag, before React DOM and our application script. |
| **Where** does it come from and become available? | From `unpkg.com`; this UMD build exposes the browser global `React`. |

### Breaking down the URL

- `react`: The package name.
- `@18`: Selects the React 18 major version, not an exact patch version.
- `umd`: A distribution format that supports loading through a classic browser
  script tag.
- `react.development.js`: A development build with debugging warnings. It is not
  the optimized production build.

## 4. React DOM CDN link: the five W's

The package is named **`react-dom`**, not `react-dome`.

```html
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

| Question | Answer |
| --- | --- |
| **What** is it? | The React DOM 18 development build: React's renderer for the browser DOM. |
| **Why** do we use it? | Core React describes the UI; React DOM connects that description to actual browser DOM nodes. |
| **Who** provides and uses it? | The React team maintains React DOM, UNPKG serves it, and our browser application uses it. |
| **When** does it load? | After React and before `App.js`, which calls `ReactDOM.createRoot()`. |
| **Where** does it come from and become available? | From `unpkg.com`; this UMD build exposes the browser global `ReactDOM`. |

**Remember:** React describes the UI; React DOM renders it into the browser.
React can also be used with other renderers, such as React Native for native apps.
Use compatible, matching React and React DOM versions.

> This episode intentionally uses React 18 UMD scripts. Modern React projects
> normally use package imports and build tooling. In that setup, `createRoot` is
> imported from `react-dom/client`. React 19 no longer provides UMD builds, so
> simply changing these URLs from `@18` to `@19` will not work.

## 5. Why do we use `crossorigin` here?

An **origin** is the combination of protocol, hostname, and port. Our page and
`https://unpkg.com` are different origins.

**CORS (Cross-Origin Resource Sharing)** lets a server declare which origins may
access its resources through browser-enforced response headers.

For these script tags:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

- Bare `crossorigin` is equivalent to `crossorigin="anonymous"`.
- It requests the script using CORS. In anonymous mode, cross-origin credentials
  such as cookies are not sent; same-origin credentials can still be included.
- The CDN must return an appropriate `Access-Control-Allow-Origin` header.
  The attribute alone does not grant permission or bypass browser security.
- With the appropriate server headers, it allows useful cross-origin JavaScript
  error details to be reported, rather than only a restricted `"Script error."`
  message. This improves debugging and React's error-handling experience.

**Important:** Classic external scripts can often load from another origin
without this attribute. We use it here for CORS-enabled loading and better error
reporting, not because every external script requires it.

`crossorigin="use-credentials"` is a different mode that includes credentials
across origins and requires stricter server configuration. We do not need it here.

## 6. Why does script order matter?

Our scripts are placed after the root container and run in this order:

1. `react.development.js` defines `React`.
2. `react-dom.development.js` defines `ReactDOM` and depends on React.
3. `App.js` uses both globals and finds the existing root container.

These are classic scripts without `async` or `defer`, so the browser pauses HTML
parsing while loading and executing each one. Putting `App.js` first would cause
errors such as `React is not defined`. Running it before the root container
exists would make `document.getElementById("root")` return `null`.

## 7. What does `React.createElement()` do?

```js
React.createElement(type, props, ...children);
```

| Argument | Meaning | Example |
| --- | --- | --- |
| `type` | The HTML tag name, or a React component | `"h1"` |
| `props` | Properties describing the element; use `null` when none are needed | `{ id: "title" }` |
| `children` | The content inside the element | `"Hello from React!"` |

```js
const title = React.createElement(
  "h1",
  { id: "title", className: "heading" },
  "Hello from React!"
);
```

This creates a **React element object**, not an HTML string and not an actual DOM
node. Think of it as a description of the UI. Treat React elements and their
props as immutable: create a new description rather than modifying the old one.

- `id` becomes the HTML ID.
- `className` is used for the HTML `class` attribute.
- Children can include text, numbers, other React elements, and arrays of nodes.
- `console.log(title)` shows the React element object; it does not put it on screen.

By contrast, `document.createElement("h1")` creates an actual browser DOM element.

## 8. Nested elements and siblings

In [App.js](./App.js), the outer `div` has two children: an `h1` and an `h2`.
Nesting `createElement()` calls describes a tree; an array can hold sibling
children.

Here is a cleaned-up variation of the episode example:

```js
const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h1", { key: "title" }, "Hello world from React!"),
  React.createElement("h2", { key: "subtitle" }, "Learning React basics"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

The resulting DOM inside the root is:

```html
<div id="root">
  <div id="heading">
    <h1>Hello world from React!</h1>
    <h2>Learning React basics</h2>
  </div>
</div>
```

### Details to notice in the current code

- The original example assigns `id="heading"` to three elements. HTML IDs should
  be unique in the document. Keep the ID on one element or use a shared class.
- The original children are passed as an array without keys, so the React
  development build warns about missing keys.
- A **key** identifies a child among its siblings, helping React match children
  across updates. Keys should be stable and unique among siblings, especially
  when items can move, be inserted, or be removed. A key is not a DOM attribute.
- The existing `#heading { color: red; }` rule in [index.css](./index.css) styles
  elements with that ID. In the cleaned-up example, the headings inherit the red
  text color from their parent.

## 9. What does `createRoot()` do?

```js
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
```

- `getElementById()` finds the real DOM container.
- `createRoot()` creates a React root associated with that container.
- It returns a root object with methods such as `render()` and `unmount()`.
- It does not display the heading by itself; `root.render()` requests that work.

Normally, create the root once for a container and reuse it for later renders.
Separate parts of a page may have separate roots.

## 10. What does `render()` do?

```js
root.render(heading);
```

This asks React to display the supplied React node inside the root container.

1. **Render:** React works out what the UI should look like.
2. **Commit:** React DOM creates or updates actual DOM nodes to match.
3. **Paint:** The browser draws the updated result on screen.

For this episode, the first committed render replaces the existing
`<h1>Hi Vishal</h1>` inside `#root` with the tree described by `heading`.
The root container itself remains, and content outside it is not replaced.

On later calls, React compares the new tree with the previous one and updates
the DOM where necessary. This matching process is called **reconciliation**;
React does not blindly rebuild the entire page on every render.

Important distinctions:

- `createElement()` creates a UI description; `render()` requests its display.
- `root.render()` returns `undefined`, not an HTML element.
- Do not assume the DOM has already updated on the very next line after calling
  it; the rendering work is not guaranteed to finish synchronously.
- React is not simply assigning an HTML string to `innerHTML`.
- **Virtual DOM** is a common informal name for React's in-memory UI
  representation. It is not a second browser DOM.
- For server-rendered HTML that React should preserve and make interactive, use
  `hydrateRoot()` instead. This episode is client-rendered, so `createRoot()` fits.

## 11. Where does JSX fit?

JSX is an optional syntax for describing UI:

```jsx
const title = <h1 className="heading">Hello from React!</h1>;
```

With a JSX transform, this becomes React element creation calls. The exact calls
depend on the JSX runtime; modern transforms need not use `React.createElement`.

Browsers do not understand JSX directly. This episode uses plain JavaScript and
`createElement()`, so it needs no JSX compiler, bundler, or npm installation.
React can be used without JSX.

## 12. Running and debugging this episode

Open [index.html](./index.html) in a browser. Internet access is needed to download
the CDN scripts. A local development server can also serve this folder.

Use browser developer tools:

- **Console:** Inspect the logged React element and any errors or key warnings.
- **Elements:** Inspect the real DOM after React commits the render.
- **Network:** Check that React, React DOM, the application script, and CSS load.

The React CDN development builds are appropriate for learning. Production should
use optimized builds rather than these development files.

## 13. Quick revision

| Concept | Remember |
| --- | --- |
| React | Describes UI using elements and components |
| React DOM | Renders React UI into browser DOM containers |
| CDN | Delivers the library files |
| MDN | Documents browser technologies |
| `crossorigin` | Configures CORS-enabled loading; helps expose useful script errors |
| `createElement()` | Creates a React element object |
| `props` | Properties describing an element |
| `children` | Content nested inside an element |
| `createRoot()` | Creates a React root for a DOM container |
| `root.render()` | Requests rendering of a React node into that root |
| `key` | Gives a child stable identity among siblings |
| JSX | Optional UI syntax that must be transformed before browser execution |

## 14. Reference links

### MDN

- [Getting started with React](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
- [The `crossorigin` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)
- [The script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

### Official React documentation

- [React 18 CDN links and why `crossorigin` is recommended (legacy docs)](https://legacy.reactjs.org/docs/cdn-links.html)
- [`createElement()`](https://react.dev/reference/react/createElement)
- [`createRoot()` and `root.render()`](https://react.dev/reference/react-dom/client/createRoot)
- [Render and commit](https://react.dev/learn/render-and-commit)
- [Keys in lists](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React 19 migration: UMD builds removed](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#umd-builds-removed)
