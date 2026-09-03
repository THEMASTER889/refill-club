# Refill Club

A simple membership site. People pay **A$9 / month** through Lemon Squeezy and you email them the monthly restock list.

You do not need to know how to code. Follow the steps in order.

## What you have

| File | What it is |
| --- | --- |
| `index.html` | The public page (the “website”) |
| `js/config.js` | Where you paste the Lemon Squeezy checkout link |
| `issues/2026-09.md` | The first month’s list to send to members |

## 1. Create the Lemon Squeezy store

1. Open [lemonsqueezy.com](https://lemonsqueezy.com) and create an account.
2. Use store name **Refill Club**.
3. Create a product:
   - Type: **Subscription**
   - Name: Refill Club monthly
   - Price: **9 AUD** per month
   - Description: Monthly Australian restock list. Cancel any time.
4. Open the product → **Share** and copy the checkout URL.
5. Add `?embed=1` at the end if it is not already there.

## 2. Connect checkout to this site

Open `js/config.js` and put the URL between the quotes:

```js
checkoutUrl: "https://your-store.lemonsqueezy.com/checkout/buy/PASTE-ID-HERE?embed=1",
```

Save the file. Until that line is filled, the Join buttons will not take money. That is intentional.

## 3. Look at the page on your computer

Double-click `index.html`, or in a terminal in this folder:

```bash
npx --yes serve .
```

Then open the address it prints (usually `http://localhost:3000`).

## 4. Put the site on the internet

Easiest for a beginner: drag the whole `refill-club` folder onto [https://app.netlify.com/drop](https://app.netlify.com/drop). Netlify gives you a public URL.

If you change `config.js` later, upload the folder again.

## 5. After someone pays

Lemon Squeezy emails you. You email them that month’s file from `issues/` (or a PDF you export). Later we can automate this. Do not skip sending the list — that is the product.

## 6. Business basics (Australia)

- Get an **ABN** when you are trading.
- Ask an accountant about **GST** once you are near the threshold.
- Put the ABN in the page footer when you have it.

## Slack

If you made a Slack workspace, name it **Refill Club**. You do not need Slack to sell.
