# 📓 Lesson 15: Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next.js

Adding products to a shopping cart is exactly what we want our customers to do. But they might go overboard and add too many, or maybe they have second thoughts on a product.

If we don't add a way for them to update the quantity of a product, they might abandon that shopping cart and leave the site all together!

## Getting Started

In lesson 15, we're going to give our customers a way to update the quantity of each product they have in their cart.

We'll first add an HTML form right inside of our cart table, then trigger a function from our `useCart` hook when that form is submitted to update our customer's shopping cart.

## Objectives
* Add input and button to each cart row
* Trigger function on button click that logs input value
* Create cart state function that updates product quantity
* Trigger cart update when clicking quantity input button

## Exercises

🕵️‍♂️ Use the `@lesson-15-todo` key to search for this lesson's assignments in the code!

> 👋 **Hey! Quick Note**
>
> Like other lessons, the solution isn't immediately available to view in your browser due to the complexity of maintaining our global cart state. You can still follow along with the code and see your changes live in the browser!

### 1. Add a form with an input for quantity and button to submit

In order to let someone update the quantity of products, we need some kind of mechanism to allow them to make that change.

While we can add buttons to increment, a simpler solution is to add a number input and a button inside of a form. Once we submit that form, we can update that quantity.

To start, add a form inside of the Quantity cell of the cart table that includes a number type input with a default value of the product's quantity and a button that we can later use to submit.

#### Where We'll Make Changes
* `pages/cart.js`

### 2. Trigger a function and prevent default behavior on form submission

With our form, we can trigger functionality to update our customer's shopping cart.

Before we do that, we want to make sure we're actually triggering an event handler and preventing the default action from occuring on our form to avoid any unintended side effects of a typical form submission.

Add an event handler for when a form is submitted and prevent the default behavior of a form submission.

> 👋 **Hey! Quick Note**
>
> To test that this works, you can add a `console.log` statement with the event argument or anything else you'd like!

#### Where We'll Make Changes
* `pages/cart.js`

#### Resources
* [Form Events - React](https://reactjs.org/docs/events.html#form-events) (reactjs.org)

### 3. Create a new function that updates a product's quantity in the global cart state

When updating our shopping cart, we need to actually update the global state that tracks what products and how many of each product is in that cart.

Right now, we have a function that we can use to add an item to a cart, but not one to delete or update.

Create an `updateItem` function in the `useCart` hook that adds the ability to update the quantity of a product in the shopping cart by ID.

#### Where We'll Make Changes
* `hooks/use-cart.js`

### 4. Use quantity form to update a product's quantity on the cart page

Now that way have a way to update product quantites in the global state, we're ready to make it happen in the UI.

We can use the form and event handler that we've already created to trigger an update whenever a customer makes that request.

Trigger an update of a product quantity whenever the quantity form on the cart table is submitted.

#### Where We'll Make Changes
* `pages/cart.js`