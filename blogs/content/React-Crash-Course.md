---
title: "React Crash Course"
img: "https://files.ably.io/ghost/prod/2023/11/best-react-component-libraries.png"
desc: "Quickly get up to speed with the React library for building UIs."
slug: "React-Crash-Course"
---

# React Crash Course

React is a popular JavaScript library for building user interfaces, especially single-page applications. This crash course covers all the core concepts you need to know.

---

## Table of Contents

1. [What is React?](#what-is-react)
2. [JSX](#jsx)
3. [Components](#components)
4. [Props](#props)
5. [State](#state)
6. [Event Handling](#event-handling)
7. [Conditional Rendering](#conditional-rendering)
8. [Lists and Keys](#lists-and-keys)
9. [useEffect Hook](#useeffect-hook)
10. [useState Hook](#usestate-hook)
11. [Forms](#forms)
12. [Lifting State Up](#lifting-state-up)
13. [Context API](#context-api)
14. [React Router](#react-router)
15. [Lifecycle Methods (Class Components)](#lifecycle-methods-class-components)
16. [Custom Hooks](#custom-hooks)
17. [Error Boundaries](#error-boundaries)
18. [Best Practices](#best-practices)
19. [Useful Resources](#useful-resources)

---

## 🚀 What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called "components".

---

## JSX

JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like.

```jsx showLineNumbers
const element = <h1>Hello, world!</h1>;
```

---

## Components

Components are the building blocks of React applications. They can be functional or class-based.

**Functional Component:**
```jsx showLineNumbers
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Class Component:**
```jsx showLineNumbers
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## Props

Props (short for "properties") are used to pass data from parent to child components.

```jsx showLineNumbers
<Welcome name="Alice" />
```

---

## State

State is a built-in object that stores property values that belong to a component. When state changes, the component re-renders.

```jsx showLineNumbers
const [count, setCount] = useState(0);
```

---

## Event Handling

React handles events similarly to DOM elements, but with camelCase syntax.

```jsx showLineNumbers
<button onClick={handleClick}>Click me</button>
```

---

## Conditional Rendering

Render elements based on conditions.

```jsx showLineNumbers
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

---

## Lists and Keys

Render lists using `map()`. Keys help React identify which items have changed.

```jsx showLineNumbers
const items = ['A', 'B', 'C'];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

---

## useEffect Hook

Performs side effects in functional components (e.g., data fetching, subscriptions).

```jsx showLineNumbers
useEffect(() => {
  // code here runs after every render
}, [dependencies]);
```

---

## useState Hook

Adds state to functional components.

```jsx showLineNumbers
const [value, setValue] = useState(initialValue);
```

---

## Forms

Handle form inputs with controlled components.

```jsx showLineNumbers
function MyForm() {
  const [input, setInput] = useState('');
  return (
    <form>
      <input value={input} onChange={e => setInput(e.target.value)} />
    </form>
  );
}
```

---

## Lifting State Up

Move state to the closest common ancestor to share data between components.

---

## Context API

Provides a way to pass data through the component tree without passing props manually.

```jsx showLineNumbers
const MyContext = React.createContext();
<MyContext.Provider value={/* some value */}>
  <Child />
</MyContext.Provider>
```

---

## React Router

For navigation and routing in React apps.

```jsx showLineNumbers
import { BrowserRouter, Route, Link } from 'react-router-dom';
```

---

## Lifecycle Methods (Class Components)

Special methods in class components:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

---

## Custom Hooks

Create your own hooks to reuse logic.

```jsx showLineNumbers
function useCustomHook() {
  // custom logic
}
```

---

## Error Boundaries

Catch JavaScript errors in components.

```jsx showLineNumbers
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // handle error
  }
  render() { /* ... */ }
}
```

---

## Best Practices

- Use functional components and hooks.
- Keep components small and focused.
- Use keys in lists.
- Avoid prop drilling with Context.
- Use error boundaries for robustness.

---

## Useful Resources

- [React Official Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Awesome React](https://github.com/enaqx/awesome-react)

---

Happy coding!