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



```