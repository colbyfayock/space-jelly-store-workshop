# 📓 Lesson 04: Dynamically Manage a Grid of Products in an Online Store with a JSON Document

Manually creating blocks of HTML for every product in our store can take a long time depending on how many products the store has. On top of that, making any changes to those products makes that even more of a challenge as you try to search through the file and know where to make the change.

Instead, we can manage our products in a central location and use that to build our store pages.

## Getting Started


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


## Extra Credit

### 1. shared global file
