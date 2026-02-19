Here are **short and clear answers** 👇

---

### **1️⃣ Where does React put all of the elements I create in JSX when I call `root.render()`?**

React puts all the JSX elements **inside the root DOM element** (the div you selected, usually `<div id="root">` in HTML).

---

### **2️⃣ What would show up in my console if I run:**

```js
console.log(<h1>Hello world!</h1>)
```

It will show a **JavaScript object**.

Because JSX is converted into a **React element object**, not real HTML.

---

### **3️⃣ What’s wrong with this code?**

```js
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

❌ You cannot return two sibling elements like this.
React needs **one parent element**.

✅ Correct version:

```js
root.render(
  <div>
    <h1>Hi there</h1>
    <p>This is my website!</p>
  </div>
)
```

(or use `<> </>` fragment)

---

### **4️⃣ What does "declarative" mean?**

Declarative means you **describe what you want to happen**, not how to do it.

In React, you say:

> “Show this UI”

React handles the steps.

---

### **5️⃣ What does "composable" mean?**

Composable means you can **build small components and combine them together** to create bigger UI.

Like LEGO blocks 🧱


### ** 6 Library vs Framework**
 
🔹 1️⃣ Library

A library is a collection of ready-made functions that you call when you need them.

👉 You are in control.
👉 You decide when and where to use it.

Think of it like:

📞 You call the library.

Example:

React is a library.

You write:

ReactDOM.createRoot(...)


You are controlling everything.

🔹 2️⃣ Framework

A framework is a complete structure that controls the flow of your application.

👉 The framework is in control.
👉 It tells your code when to run.

Think of it like:

📞 The framework calls you.

 Custom Component quiz 

1. What is a React component?
React componnet a function that returns react elements

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
pascal case - capital letter in the starting of the name -MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
-<header/>

1. What do props help us accomplish?

make a component more reusable.

2. How do you pass a prop into a component?



3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
no..because the JSX we use to describe native DOM elements will be turned into real DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specifications. which doesnt' include properties like 'blahblabal'

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}

5. What data type is `props` when the component receives it?
object function Navbar(props.name) {
    return (
        <header>
            ...
        </header>
    )
}



1. What does the `.map()` array method do?

returns new array.whatever gets returned from the callback funcgtion provided is placed at the ame index in the new array. usually we take the items from the original array and modify them in some way. 

2. What do we usually use `.map()` for in React?

Convert an array of raw data into an array of JSX elements that can be displayed on the page. 

3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?

1. we don't no what data we are getting
2. more sustainable 


```