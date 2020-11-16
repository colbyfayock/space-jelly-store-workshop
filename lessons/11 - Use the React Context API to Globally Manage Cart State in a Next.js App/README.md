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
> Unlike the previous lessons, you're not able to see the solution live in the browser by just going to the /solution page. Instead, if you want to preview the solution in your browser, you need to rename the pages/_app.solution.js file to _app.js. Be sure to first rename the original pages/_app.js file to something like _app.original.js though so you don't lose it!

### 1. Use createContext to create a new Context instance for the shopping cart

React's Context API is a way that allows us to take some data and pass it around through different components from a shared parent component. For instance, if we have a React application and we add Context to the root of the application, we can access that Context anywhere in the app.

With our shopping cart, we're going to want to manage and access the same instance of state anywhere in the app, so that we're always keeping track of what products someone has in their cart, no matter what page they add it from.

To get started, create a new Context for our Cart inside of the `hooks/use-cart.js` file and export to to later use.

#### Where We'll Make Changes
* `hooks/use-cart.js`

#### Resources
* [Create Context - React](https://reactjs.org/docs/context.html#reactcreatecontext) (reactjs.org)

### 2. Wrap the root application with the shopping cart Context

Now that we have our shopping cart Context, we want to use that to access our shopping cart state throughout our app.

To do that, we need to wrap the root of our application in a "Provider" component, which is what React uses to idenfity what has access to that Context.

When working in Next.js, we'll make these changes inside of the `pages/_app.js` file, which is where Next.js allows us to make changes to the React component tree.

Use the Context Provider component to wrap the application.

#### Where We'll Make Changes
* `pages/_app.js`

#### Resources
* [Context.Provider - React](https://reactjs.org/docs/context.html#contextprovider) (reactjs.org)
* [Custom App - Next.js](https://nextjs.org/docs/advanced-features/custom-app) (nextjs.org)

### 3. Configure the custom cart hook to use the shopping cart Context

Now that we have our application wrapped with a Provider for our shopping cart, we want to use that data any time we try to grab our shopping cart state.

The issue is, right now, when someone imports `useCart` from our hook file, they don't get that.

To mitigate that, we can first create a new hook with the `useCart` name, export it as a new function, and inside of that hook consume the shopping cart Context which would return the current state to the code using it. Then, we can rename our original hook to something like `useCartState`, which we'll use in the next exercise to pass our cart state data to the app.

Create a new hook inside `hooks/use-cart.js` called `useCart` that consumes and returns the shopping cart Context.

Then, rename the old `useCart` hook to `useCartState` to avoid conflicting names.

> 👋 **Hey! Quick Note**
>
> Now that our hook has multiple exports, it doesn't really make much sense anymore to have a single "default" export. We can remove the default keyword, making each of our hooks / functions a named export.

#### Where We'll Make Changes
* `hooks/use-cart.js`

#### Resources
* [useContext - React](https://reactjs.org/docs/hooks-reference.html#usecontext) (reactjs.org)
* [export - MDN Docs](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) (developer.mozilla.org)

### 4. Pass the shopping cart state as a value to the cart Context

We added our cart Context, but we're missing one thing--the cart data.

The Context Provider component takes a `value` prop which allows us to pass in really whatever we want, then use that value anywhere in that component tree.

For instance, we have our shopping cart data and our cart functions to manipulate that state. We can pass in an object containing both of those things, allowing us to both view that data anywhere and manipulate the cart anywhere.

Use the `useCartState` hook to import the cart state to the root of the application and pass it as a value into the cart Context Provider.

#### Where We'll Make Changes
* `pages/_app.js`

#### Resources
* [Context Provider - React](https://reactjs.org/docs/context.html#contextprovider) (reactjs.org)

### 5. Use the shopping cart Context to add the total cost to the global navigation

Now that we're passing our data into our Context Provider, we should now have access to that data anywhere in our app!

Use the `useCart` hook to import the cart state to the navigation component and show the dynamic total cost value.

Then, find the `checkout` function inside of the cart state and trigger the checkout process when the navigation cart is clicked.

#### Where We'll Make Changes
* `components/Nav/Nav.js`

## Extra Credit

### 1. Set the navigation total cart cost to always show 2 decimal places

When we're passing around our data through React and adding everything together, we end up with a whole number which no longer shows the "cents" or "change". This is because all of our products are rounded to `.00`.

To be consistent, we typically want to show the two decimal places so our customers know for sure that's what they're paying.

Update the navigation total cart cost to always show two decimal places.

#### Where We'll Make Changes
* `components/Nav/Nav.js`
