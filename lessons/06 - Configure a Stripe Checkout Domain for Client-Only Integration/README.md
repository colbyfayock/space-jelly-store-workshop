# 📓 Lesson 06: Configure a Stripe Checkout Domain for Client-Only Integration

Stripe has a variety of solutions that makes it super powerful as a payment provider. We're taking advantage of their [Stripe Checkout](https://stripe.com/payments/checkout) product because it allows us to get started with an online store without having to manually accept payments.

To do this though, Stripe Checkout relies on the browser to make API requests, which we have to configure to work for our website.

## Getting Started

Now that we have our web app deployed, we're going to configure Stripe to allow us to set up a payment integration with our project.

In lesson 6, we'll walk through finding the Checkout settings and how we can configure our Stripe account to allow our domain to work.

## Objectives
* Locate Checkout settings in Stripe dashboard
* Enable Client-Only integration
* Configure hosted web app as an allowed domain

## Exercises

> 👋 **Hey! Quick Note**
>
> For this lesson, we'll be working inside of Stripe. There will be no code changes for these exercises.

### 1. Find the Checkout settings in the Stripe dashbaord

For our Stripe integration, we'll be using Stripe Checkout. This is a clientside service that allows us to quickly get up and running, accepting payments from all around the world.

To get our integration working, we need to update a few settings. To do that, we'll first need to find the Checkout Settings section of our Stripe dashboard.

Take a second to find the Checkout Settings section of the dashboard inside of Settings and get familiar with the available options such as customizing payment options.

#### Where you should be looking
* [Checkout Settings](https://dashboard.stripe.com/settings/checkout) (dashboard.stripe.com)

### 2. Enable Client-Only integrations in Stripe

When setting up a new account, Stripe doesn't automatically allow people to interface with an API clientside (from the browser) on behalf of your account. Instead, there's an option inside of our Checkout Settings that will allow that integration to work.

Inside of the Checkout Settings, enable the Checkout client-only integration.

#### Where We'll Make Changes
* [Checkout Settings](https://dashboard.stripe.com/settings/checkout) (dashboard.stripe.com)

### 3. Configure hosted Next.js web app as an allowed domain in Stripe

Even though we configured our account to work clienside, for security purposes, we can't use our integration on any website we want. Otherwise, anyone could use our integration on their own site!

Along with the client-only integration, Stripe also lets you configure specific domains that can be used with the Stripe Checkout integration.

Add the domain of the hosted website you set up with Vercel from Lesson 5 to the Domains list of the Checkout client-only integration.

#### Where We'll Make Changes
* [Checkout Settings](https://dashboard.stripe.com/settings/checkout) (dashboard.stripe.com)
