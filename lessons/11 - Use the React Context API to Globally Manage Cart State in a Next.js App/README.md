# 📓 Lesson 11: Use the React Context API to Globally Manage Cart State in a Next.js App

Using React hooks like useState makes it easy to manage things like a shopping cart, but that state may only be available one instance at a time. What if we wanted that state to be available between multiple pages?

We can take advantage of React's Context API which lets us extend our cart state by making that state available anywhere we want in the app.

## Getting Started

We're now using our custom hook to manage our shopping cart state in our app, but while we can use it in multiple places, each instance will be a new "copy" of that state.

In lesson 11, we'll use the React Context API to coordinate the use of our shopping cart state so that we can use a single, global cart state throughout our application.

## Objectives
* Create a new Cart context
* Wrap Next.js app with Cart context provider
* Import Cart context into custom hook
* Move Cart to global navigation

## Exercises

🕵️‍♂️ Use the `@lesson-11-todo` key to search for this lesson's assignments in the code!

> 👋 **Hey! Quick Note**
>
> Unlike the previous lessons, you're not able to see the solution live in the browser by just going to the /solutions page. Instead, if you want to preview the solution in your browser, you need to rename the pages/_app.solution.js file to _app.js. Be sure to first rename the original pages/_app.js file to something like _app.original.js though so you don't lose it!

### 1. Use createContext to create a new Context instance for the shopping cart

### 2. Wrap the root application with the shopping cart Context

### 3. Configure the custom cart hook to use the shopping cart Context

### 4. Use the shopping cart Context to add the total cost to the global navigation







> 👋 **Hey! Quick Note**
>
> asdf

#### Where We'll Make Changes
*

#### Resources
*