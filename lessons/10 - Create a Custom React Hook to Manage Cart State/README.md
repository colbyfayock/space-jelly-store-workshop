# 📓 Lesson 10: Create a Custom React Hook to Manage Cart State

Often when we have too much business logic in one file, it can become hard to read and manage. On top of that, there might be some parts of that logic that we want to reuse so we can use it in other parts of our application.

We can abstract our shopping cart state by creating a custom React hook that we can use in our store to more easily maintain our app.

## Getting Started

In lesson 10, we're going to take our local state from the homepage and move it into a custom React hook.

We'll then use that hook to manage our state, leaving us with the same functionality, but now our hook can be used anywhere in our app!

## Objectives
* Create and import a new custom hook file
* Move cart state to custom hook
* Move "add to cart" function to custom hook

## Exercises

🕵️‍♂️ Use the `@lesson-10-todo` key to search for this lesson's assignments in the code!

### 1. Create a custom React hook and import it into the homepage

Custom hooks are a great way to move React code, particularly React state logic, to an outside function making it easier to maintain and use anywher we want.

Create a new function inside of the `hooks/use-cart.js` file called `useCart` and make it the default export.

Then, import that function into the homepage.

> 👋 **Hey! Quick Note**
>
> Once you import the function, you can try testing that the hook works by returning a value from the function. Then you can invoke that function inside of the homepage and use `console.log` to see the results in the browser!

#### Where We'll Make Changes
* `hooks/use-cart.js`

#### Resources
* [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html) (reactjs.org)
* [React Custom Hooks Tutorial](https://www.youtube.com/watch?v=Q0xVnRanXVk) (youtube.com)

### 2. Migrate the cart state logic to the custom hook

In Exercise 1, we were able to create and export a new function to create a new hook. With that function, we're not really doing anything "special"--it's just a function.

But the benefit of making that function a hook by prefixing with `use`, is that we can now include other React hooks such as `useState` or `useEffect, making it "special".

This means, we can move our cart state logic, including the `useState` hook, into our new custom hook.

Move the cart state logic including the `useState` instance and variables created based off of that state to the custom hook.

Then, return those variables from the hook function and use them in the homepage.

#### Where We'll Make Changes
* `pages/index.js`
* `hooks/use-cart.js`

### 3. Migrate the `addToCart` function to the custom hook

After moving our cart logic to our custom hook, nothing should really change when we first load the app. We're using the same logic with the same variables.

But if you try adding something to the cart, you'll immediately notice you get an error. That's because we no longer have access to the `updateCart` function inside of `addToCart`.

Since we probably want to allow anyone to also add an item to the cart, we can also move our addToCart function into our custom hook.

Move the addToCart function to the useCart hook.

Then, return addToCart from the hook function and use it in the homepage.

#### Where We'll Make Changes
* `pages/index.js`
* `hooks/use-cart.js`

## Extra Credit

### 1. Migrate the `checkout` function to the custom hook

As we noticed in Exercise 3, when we tried to use our `addToCart` function before we moved it to our custom hook, we got an error and it didn't work!

Similarly, if we try to click the Check Out button, we get a similar error.

Fix the `checkout` function similar to how we fixed the `addToCart` function in Exercise 3.

#### Where We'll Make Changes
* `pages/index.js`
* `hooks/use-cart.js`