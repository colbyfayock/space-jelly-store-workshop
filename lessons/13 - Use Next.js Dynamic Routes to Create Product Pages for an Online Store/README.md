# 📓 Lesson 13: Use Next.js Dynamic Routes to Create Product Pages for an Online Store

Most of the time when you're shopping online, you not only have a list of the products available, but you're also able to click into that product to get more information about that product.

Right now, we have a grid of products on our homepage, but that doesn't leave a lot of room for us to later add more information, where if we create a new page for each product, we can add as many details as we want.

## Getting Started

In lesson 13, we're going create new pages for each of our products.

We'll take advantage of Next.js's ability to create dynamic routes and use the `getStaticPaths` as well as the `getStaticProps` functions to create a unique page for each product.

## Objectives
* Review new static page and route with sample product page
* Update a static route to a dynamic route
* Import product data and use getStaticPaths to build product page paths
* Use getStaticProps to configure product props
* Update Add to Cart button to use cart state
* Update homepage products to link to product pages

## Exercises

🕵️‍♂️ Use the `@lesson-13-todo` key to search for this lesson's assignments in the code!

> 👋 **Hey! Quick Note**
>
> While you can view the /solution page, when trying to click through a product, you'll get a broken link. If you want to preview the solution in your browser, you need to rename the pages/products/[productId].solution.js file to [productId].js.

### 1. Review product page with static Next.js route

When creating a new app with Next.js we start off with an `index.js` file which serves as the static route for our homepage. If we wanted to create another static route, we can create a new file and page component with the name of the route like route-two.js, and make it immediately avialable at /route-two.js.

We can see that we've started Lesson 13 off with a new static route at `/pages/products/productId.js`. Here, we can see that when we go to /products/productId in our browswer, we get a simple page with a placeholder image and some placeholder text, but ultimately, it's a static page for a product.

For exercise 1, take some time to look at the static `productId.js` page and see how when creating that new file, we can immediately use that new static route.

#### Where you should be looking
* `/pages/products/productId.js`

#### Resources
* [Pages - Next.js](https://nextjs.org/docs/basic-features/pages) (nextjs.org)

### 2. Update product page to a dynamic route

Our main goal is to create a new page for each product, giving us the ability to let someone eventually see more details about an individual product.

To do that, Next.js supports dynamic routes. This means, we can configure our route to use a dynamic parameter that we can use to navigate our customers to a specific product's page and dynamically look up the details of that product.

Update the static `/products/productId` page to be a static route, accepting `productId` as a parameter.

#### Where We'll Make Changes
* `pages/products/productId.js`

#### Resources
* [Pages with Dynamic Routes - Next.js](https://nextjs.org/docs/basic-features/pages#pages-with-dynamic-routes) (nextjs.org)

### 3. Import products json document and create static paths

Now that we can dynamically access our page with an individual product ID, we need to configure the available paths so Next.js knows that route exists.

By exporting `getStaticPaths` function from our page, we can tell Next.js exactly which paths exist.

Import the store's product data and use it to create static paths.

#### Resources
* [getStaticPaths - Next.js](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) (nextjs.org)
* [Your page paths depend on external data - Next.js](https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-data) (nextjs.org)

### 4. Configure static product props using path parameter

After getting set up with the static paths, Next.js now knows what pages actually exist, but Next.js doesn't yet know about what data should be on that page.

Another function we can export is `getStaticProps`. With it, we can take our dynamic route parameter and use it to look up the data for that particular page.

Use the dynamic route parameter to add static props to the page.

#### Where We'll Make Changes
* `pages/products/[productId].js`

#### Resources
* [getStaticProps - Next.js](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (nextjs.org)
* [Your page paths depend on external data - Next.js](https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-data) (nextjs.org)

### 5. Use global cart state to add products to the shopping cart

At this point we should have our dynamic product pages. If we go to `/products/[productId]`, we should be able to see a page specific to that product.

Now, we want our customers to be able to add that product to their shopping cart, giving them another opportunity to purchase our products.

To do this, we can take advantage of our global cart state and import our function to add a product to the cart, similar to how we used it to add our customer's cost total to the navigation.

Import and use the global state add to cart function to add a product to the cart when clicking the Buy button.

#### Where We'll Make Changes
* `pages/products/[productId].js`

### 6. Update homepage product grid to use dynamic routes

When customers visit our store, we don't want them to have to manually type out the URL with the ID to get to a specific product page.

Instead, we can update the product grid on our homepage to direct users to our dynamic product path using each product's ID.

Update the homepage to link each product to their individual page. Make sure to still allow someone to add that product to cart from the homepage.

#### Where We'll Make Changes
* `pages/index.js`

#### Resources
* [Navigate Between Pages - Link Component - Next.js](https://nextjs.org/learn/basics/navigate-between-pages/link-component) (nextjs.org)