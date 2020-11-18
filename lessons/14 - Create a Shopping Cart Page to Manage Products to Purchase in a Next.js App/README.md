# 📓 Lesson 14: Create a Shopping Cart Page to Manage Products to Purchase in a Next.js App

A typical component of an ecommerce store is a shopping cart.

The idea is, similar to a real life shopping cart, you can add products and have an overhead look at what products are in your cart.

Now that we have our cart state available globally, we can use that state to create a new page and show our customer's products.

## Getting Started

In Lesson 14, we're going to start off with a new shopping cart page that displays a placeholder item.

Using global state, we'll add the products our customers currently have in their cart as well as trigger a new checkout session with Stripe whenever they click the Check Out button.

## Objectives
* Review new static cart page
* Export cart items from global state
* Update cart table to dynamically load products from cart state
* Update Checkout button to initiate Stripe Checkout
* Update navigation cart link to cart page

## Exercises

🕵️‍♂️ Use the `@lesson-14-todo` key to search for this lesson's assignments in the code!

> 👋 **Hey! Quick Note**
>
> Like other lessons, the solution isn't immediately available to view in your browser due to the complexity of maintaining our global cart state. You can still follow along with the code and see your changes live in the browser!

### 1. Review shopping cart page

As we learned in Lesson 13, not only can we create static pages, we can create dynamic ones too using dynamic routes.

To start off Lesson 14, we're going to stick with a static page, which will be our shopping cart page where we can direct customers to manage their shopping cart and eventually proceed to purchase those products.

For the first exercise, take some time to review the new shopping cart page at `/pages/cart.js` and get an idea of what contents and components the page consists of.

#### Where you should be looking
* `/pages/cart.js`

### 2. Export shopping cart items to global cart state

The way our cart currently stands, we don't have an easy way to grab an array of the products that are in the cart to display in our app.

Luckily, in one of the past lessons, we need to create an array of cart items to calculate things like the quantity of items and total cost of the cart.

Make the array of cart items available globally from the `useCart` hook.

#### Where We'll Make Changes
* `hooks/use-cart.js`

### 3. Update cart table to show products in shopping cart

Now that we have our array of products, we're ready to fill out our cart table.

The Table component should already be prepared, but we need to make sure we're formatting our data so the Table knows how to display it.

Using the placeholder data as an example, create a new array of the shopping cart items and add those products to the table.

#### Where We'll Make Changes
* `pages/cart.js`

### 4. Trigger Stripe Checkout when clicking the cart Checkout button

With the products in the cart table, we can show what products our customer is about to purcahse, but how do they purchase it?

Similar to previous lessons, we have access to functions from our  global state that allow us to immediately trigger a new checkout session based on the current shopping cart state.

Update the Check Out button to trigger a new Stripe Checkout session when clicked.

#### Where We'll Make Changes
* `pages/cart.js`

## Extra Credit

### 1. Link the global navigation cart to the cart page

Now that we have a cart page, we need a way for our customers to access it!

Update the cart link in the global navigation to go to the cart page.

### 2. Show a friendly message when no products are in the shopping cart

While we hope people are adding products to their cart, we're not gauranteed that they'll have any products added before they navigate to the shopping cart page.

We still want to show a good experience though and maybe a little encourangement to go shop for something.

Display a friendly message encouraging someone to go buy something when there are no products in the cart.