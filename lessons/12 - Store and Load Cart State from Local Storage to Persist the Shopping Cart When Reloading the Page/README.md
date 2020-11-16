# 📓 Lesson 12: Store and Load Cart State from Local Storage to Persist the Shopping Cart When Reloading the Page

When selling a product online, our ideal scenario is:
* A customer visits our website
* That same customer adds a product to their cart
* They immediately purchase that product

But that's not typically what happens. Customers second-guess their purchases, keeping your website up in a new tab or maybe even coming back to it later, where then they hopefully follow through to purchasing your product.

Because React state only exists in memory by default, as soon as that page refreshes, they lose all of the products in their cart! This means your potential customer has to go back through the process of adding products to that cart, making more friction for getting a sale.

Luckily, browser ship with a storage API called localStorage that we can take advantage to persist our customer's state through each page refresh.

## Getting Started

While we're able to keep track of someone adding products to their shopping cart, if they refresh the page, they lose all of those products!

In lesson 12, we'll learn how to use the browser's localStorage API, which will allow us to save our customer's shopping cart state even if they load the page.

## Objectives
* Review cart state only existing in memory
* Store cart state in localStorage
* Get cart state from localStorage

## Exercises

🕵️‍♂️ Use the `@lesson-12-todo` key to search for this lesson's assignments in the code!

> 👋 **Hey! Quick Note**
>
> Similar to lesson 11, you're not able to see the solution live in the browser by just going to the /solution page. Instead, if you want to preview the solution in your browser, you need to rename the pages/_app.solution.js file to _app.js. Be sure to first rename the original pages/_app.js file to something like _app.original.js though so you don't lose it!

### 1. Understanding how state persists between pages in React

When using the state capabilities within React, we're able to store a value, typically based on user input or a condition, and then later read that value so we can use it somewhere in our app.

The only issue with the using state "out-of-the-box" is when you refresh the page, all of that state goes away!

We can see how this works in our current store. If we add a few products to our shopping cart and reload the page, we no longer have any items in our cart. But if we go to a website like [Amazon](https://www.amazon.com/) and add items to our cart, those items will stick with us pretty much until we remove them.

Now many websites will store that cart state in a database, making that cart state readable and available not only between page refreshes, but between different sessions or even different devices if you're logged in.

While we're not going to set up a database, we can leverage the browser's built-in [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store data and later retrieve it.

For Exercise 1, spend a couple of minutes looking around how different websites store and persist a shopping cart.

Then, take a quick look at the localStorage API before we dive in.

#### Resources
* [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (developer.mozilla.org)

### 2. Storing the shopping cart state in localStorage

When trying to persist and load our customer's cart state from the browser, the first thing we need to do is store it!

Browsers ship with a storage API called localStorage that allows us to set and store values in that browser, where we can later get that value to use.

Store the customer's shopping cart state to the browser using localStorage any time the cart state changes.

#### Where We'll Make Changes
* `hooks/use-cart.js`

#### Resources
* [localStorage Example](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Example) (developer.mozilla.org)

### 3. Getting and loading the cart state from localStorage

Once we're storing our data, we're ready to load it up and actually persist it to our customer, allowing them to pick up where they left off.

Using the same storage key that we saved it with, we can now get that value from localStorage.

Retrieve the customer's cart state from localStorage when the page first loads and update the active cart state.

#### Resources
* [localStorage Example](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Example) (developer.mozilla.org)

#### Where We'll Make Changes
* `hooks/use-cart.js`

## Extra Credit

### 1. Abstract the localStorage functionality into reusable functions

The great thing about localStorage, is we can use this for anything we want. For instance, if we later add the ability for our customers to log in, we can save their logged in state to localStorage as well.

To make using localStorage easier, we can abstract our store and retrieve functions, allowing us to get and set our values with a simpler function.

Abstract the localStorage get and set methods into reusable functions.