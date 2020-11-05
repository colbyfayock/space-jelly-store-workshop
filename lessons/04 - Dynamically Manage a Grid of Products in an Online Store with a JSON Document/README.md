# 📓 Lesson 04: Dynamically Manage a Grid of Products in an Online Store with a JSON Document

Manually creating blocks of HTML for every product in our store can take a long time depending on how many products the store has. On top of that, making any changes to those products makes that even more of a challenge as you try to search through the file and know where to make the change.

Instead, we can manage our products in a central location and use that to build our store pages.

## Getting Started

For lesson 4, we're going to learn how we can dynamically manage our products with an external file rather than manually managing them inside of the code.

We can use the standard JSON format to create a `.json` file where we can store that data. Then, we'll loop through that data and build our UI.

## Objectives
* Create a JSON document and import it into the app
* Update JSON document to include personalized product data
* Add the product price ID as a unique identifier to the product
* Use JSON document to loop through product to build the UI

## Exercises

🕵️‍♂️ Use the `@lesson-04-todo` key to search for this lesson's assignments in the code!

### 1. Create and import a new JSON document

Managing a few products manually inside of an app isn't too bad, but as a store scales or as a UI becomes complex, it's often easier to be able to manage products in a structured format that lives outside of UI code.

We can use a JSON document to manage our products right in a way that our app can understand. By importing it, we make that data ummediately available to use in our app.

Create a new `products.json` file inside of the root of the project and import it at the top of the homepage.

> 👋 **Hey! Quick Note**
>
> To test this out, you can add an empty array to the JSON document (`[]`) and log it to the web developer terminal to make sure it works.

#### Where We'll Make Changes
* `products.json` (new)
* `pages/index.js`

### 2. Add product data to the products JSON document

Now that we're ready to go with our JSON doc, we can start setting up our products to use in our app.

For each of our products in the app, create a new object inside of the array that includes the products title, description, and the link to the image file.

> 👋 **Hey! Quick Note**
>
> Here's an idea of what each of the product objects should look like in the `products.json` document.
>
> ```
> {
>   "title": "[Product Title]",
>   "description": "[Product Description]",
>   "image": "/images/[product-image].jpg"
> }
> ```

#### Where We'll Make Changes
* `products.json`

### 3. Update each product with its unique product price ID

As we talked about in Lesson 3, each product that we created included a unique price ID which is also called an API ID. This API ID (price ID) is what we'll use to interface with the Stripe API to allow our customers to purchase.

For each of our products, find the unique price API ID for each product and add it as an `id` property inside of the product objects inside of `products.json`.

> 👋 **Hey! Quick Note**
>
> Here's an idea of what each of the product objects should look like in the `products.json` document.
>
> ```
> {
>   "id": "[Product Price ID]",
>   ...
> }
> ```

#### Where We'll Make Changes
* `products.json`

#### Where you Should Look
* [Products in Stripe Dashboard](https://dashboard.stripe.com/test/products) (dashboard.stripe.com)

### 4. Use the products JSON document to dynamically create the product cards UI

At this point, we should now have a JSON document that represents the same product data inside of our application. Now let's use it to dynamically build out app!

Inside of our homepage, we're manually setting up a new card for each product, but instead, we can use the map function to loop through each item of our `products.json` file and use that data to create our product card.

> 👋 **Hey! Quick Note**
>
> When using the map function to create React components, you want to have a unique `key` prop on each component. We can take advantage of our unique `id` property of each product for that prop.

#### Where We'll Make Changes
* `pages/index.js`

#### Resources
* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) (reactjs.org)

## Extra Credit

### 1. Update the global shared products JSON document with personalized product data

Each lesson in this course uses its own set of files, meaning, changes to the `products.json` document won't carry on to the next lesson.

To get around that, future lessons will be taking advantage of a shared `products.json` file that lives in the `lessons` folder of this repository where we can make our product changes and have them available throughout all of the lessons.

Take a moment to review the shared `products.json` file inside of `shared/products.json` and update any product data that you may have customized for your app including the unique price ID for your products.

> 👋 **Hey! Quick Note**
>
> In order for the Stripe integration to work later, you'll need to make sure you have the right price ID set for each product.

#### Where We'll Make Changes
* `lessons/shared/products.json`
