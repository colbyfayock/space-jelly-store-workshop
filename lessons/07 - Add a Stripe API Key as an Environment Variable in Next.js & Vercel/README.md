# 📓 Lesson 07: Add a Stripe API Key as an Environment Variable in Next.js & Vercel

With Stripe or many other services, their APIs rely on special keys that authenticate requests or allow that service to track usage for things like billing.

Some of these keys are able to be used publicly and some must be kept private, but ultimately we want to have a way to easily manage these keys and not hard-code them into our application, which is where environment variables come in.

## Getting Started

The API key is what allows us to connect to Stripe and integrate their checkout experience with our app.

In lesson 7, we're going to find our API key in our Stripe account and figure out how we can use it in our Next.js app. We'll set it up as an environment variable which will allow us to access it later in our code as well as make it easily interchangeable if we ever need to change it.

## Objectives
* Find API key in Stripe dashboard
* Create a .env.local file and store API key as an environment variable
* Test the environment variable by logging it to the web console
* Add API key as an environment variable to Vercel deployment

## Exercises

🕵️‍♂️ Use the `@lesson-07-todo` key to search for this lesson's assignments in the code!

### 1. Locate your unique API key in the Stripe dashboard

Every time we interact with the Stripe API, we need to include an API key that will allow Stripe to recognize it's us making that request.

Luckily, this key is automatically generated for us and available right inside of the developer settings of the dashboard.

Find your Publishable API Key inside of the Developer section of the Stripe settings.

#### Where you should be looking
* [API Keys - Stripe](https://dashboard.stripe.com/apikeys) (dashboard.stripe.com)

### 2. Create an environment variables file to store the API key

With our API key, we need a way to securely store it that will also allow us to easily grab it to use in our application.

Environment variables are a tool we can use built right into Next.js that will allow us to keep a local file with our key, which we can then use inside of our app.

Create a new `.env.local` file with your unique Stripe API key.

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

> 👋 **Hey! Quick Note**
>
> While you can use whatever you want for an environment variable as long as it's prefixed with `NEXT_PUBLIC_`, I'll be using `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` for the remainder of the lessons.

#### Where We'll Make Changes
* `.env.local`

#### Resources
* [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

### 3. Log the environment variable to the web console

Now that we've set up our environment variable, let's test that we can use it.

If we add a `console.log` statement inside of one of our pages, we'll be able to see that we can acces that value both inside of our app. We can also see that the value is logged into our terminal when that page gets compiled.

Add a `console.log` statement and review the output in the web console and terminal.

#### Where We'll Make Changes
* `pages/index.js`

### 4. Add the API key as an environment variable in Vercel

When creating our local `.env.local` file, that will work whenever we're developing locally, but that won't work on our app deployed to Vercel.

Instead, we have to separately add our Stripe API key as an environment variable inside of Vercel to make it available when our application is built.

Add a new environment variable in Vercel with the same name and value that you used for your Stripe API key.

#### Where We'll Make Changes
* [Vercel](https://vercel.com/dashboard) (vercel.com)

#### Resources
* [Build Steps - Environment Variables - Vercel](https://vercel.com/docs/build-step#environment-variables)

## Extra Credit

### 1. Update the global environment file

Each lesson in this course uses its own set of files, meaning, changes to the `.env.local` file won't carry on to the next lesson.

To get around that, future lessons will be taking advantage of a shared `.env.shared` file that lives in the `lessons` folder of this repository where we can make our environment changes and have them available throughout all of the lessons.

Take a moment to review the shared `.env.shared` file inside of `shared/.env.shared` and update the Stripe API key.

> 👋 **Hey! Quick Note**
>
> In order for the Stripe integration to work later, you'll need to make sure you have the right API key.

#### Where We'll Make Changes
* `lessons/shared/.env.shared`
